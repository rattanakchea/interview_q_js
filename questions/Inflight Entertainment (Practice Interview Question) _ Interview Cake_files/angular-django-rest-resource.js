'use strict';angular.module('djangoRESTResources',['ng']).factory('djResource',['$http','$parse',function($http,$parse){var DEFAULT_ACTIONS={'get':{method:'GET'},'save':{method:'POST'},'query':{method:'GET',isArray:true},'remove':{method:'DELETE'},'delete':{method:'DELETE'}};var noop=angular.noop,forEach=angular.forEach,extend=angular.extend,copy=angular.copy,isFunction=angular.isFunction,getter=function(obj,path){return $parse(path)(obj);};function encodeUriSegment(val){return encodeUriQuery(val,true).replace(/%26/gi,'&').replace(/%3D/gi,'=').replace(/%2B/gi,'+');}
function encodeUriQuery(val,pctEncodeSpaces){return encodeURIComponent(val).replace(/%40/gi,'@').replace(/%3A/gi,':').replace(/%24/g,'$').replace(/%2C/gi,',').replace(/%20/g,(pctEncodeSpaces?'%20':'+'));}
function Route(template,defaults){this.template=template=template+'#';this.defaults=defaults||{};this.urlParams={};}
Route.prototype={setUrlParams:function(config,params,actionUrl){var self=this,url=actionUrl||self.template,val,encodedVal;var urlParams=self.urlParams={};forEach(url.split(/\W/),function(param){if(param&&(new RegExp("(^|[^\\\\]):"+ param+"(\\W|$)").test(url))){urlParams[param]=true;}});url=url.replace(/\\:/g,':');params=params||{};forEach(self.urlParams,function(_,urlParam){val=params.hasOwnProperty(urlParam)?params[urlParam]:self.defaults[urlParam];if(angular.isDefined(val)&&val!==null){encodedVal=encodeUriSegment(val);url=url.replace(new RegExp(":"+ urlParam+"(\\W|$)","g"),encodedVal+"$1");}else{url=url.replace(new RegExp("(\/?):"+ urlParam+"(\\W|$)","g"),function(match,leadingSlashes,tail){if(tail.charAt(0)=='/'){return tail;}else{return leadingSlashes+ tail;}});}});config.url=url.replace(/#$/,'');forEach(params,function(value,key){if(!self.urlParams[key]){config.params=config.params||{};config.params[key]=value;}});}};function DjangoRESTResourceFactory(url,paramDefaults,actions){var route=new Route(url);actions=extend({},DEFAULT_ACTIONS,actions);function extractParams(data,actionParams){var ids={};actionParams=extend({},paramDefaults,actionParams);forEach(actionParams,function(value,key){if(isFunction(value)){value=value();}
ids[key]=value.charAt&&value.charAt(0)=='@'?getter(data,value.substr(1)):value;});return ids;}
function DjangoRESTResource(value){copy(value||{},this);}
forEach(actions,function(action,name){action.method=angular.uppercase(action.method);var hasBody=action.method=='POST'||action.method=='PUT'||action.method=='PATCH';DjangoRESTResource[name]=function(a1,a2,a3,a4){var params={};var data;var success=noop;var error=null;var promise;switch(arguments.length){case 4:error=a4;success=a3;case 3:case 2:if(isFunction(a2)){if(isFunction(a1)){success=a1;error=a2;break;}
success=a2;error=a3;}else{params=a1;data=a2;success=a3;break;}
case 1:if(isFunction(a1))success=a1;else if(hasBody)data=a1;else params=a1;break;case 0:break;default:throw"Expected between 0-4 arguments [params, data, success, error], got "+
arguments.length+" arguments.";}
var value=this instanceof DjangoRESTResource?this:(action.isArray?[]:new DjangoRESTResource(data));var httpConfig={},promise;forEach(action,function(value,key){if(key!='params'&&key!='isArray'){httpConfig[key]=copy(value);}});httpConfig.data=data;route.setUrlParams(httpConfig,extend({},extractParams(data,action.params||{}),params),action.url);function markResolved(){value.$resolved=true;}
promise=$http(httpConfig);value.$resolved=false;promise.then(markResolved,markResolved);value.$then=promise.then(function(response){var data=response.data;var then=value.$then,resolved=value.$resolved;var deferSuccess=false;if(data){if(action.isArray){value.length=0;if(data.hasOwnProperty("count")&&data.hasOwnProperty("results")){deferSuccess=true;var paginator=function recursivePaginator(data){if(data.next!==null){var next_config=copy(httpConfig);next_config.url=data.next;$http(next_config).success(function(next_data){recursivePaginator(next_data);}).error(error);}
forEach(data.results,function(item){value.push(new DjangoRESTResource(item));});if(data.next==null){(success||noop)(value,response.headers);}};paginator(data);}else{forEach(data,function(item){value.push(new DjangoRESTResource(item));});}}else{copy(data,value);value.$then=then;value.$resolved=resolved;}}
if(!deferSuccess){(success||noop)(value,response.headers);}
response.resource=value;return response;},error).then;return value;};DjangoRESTResource.prototype['$'+ name]=function(a1,a2,a3){var params=extractParams(this),success=noop,error;switch(arguments.length){case 3:params=a1;success=a2;error=a3;break;case 2:case 1:if(isFunction(a1)){success=a1;error=a2;}else{params=a1;success=a2||noop;}
case 0:break;default:throw"Expected between 1-3 arguments [params, success, error], got "+
arguments.length+" arguments.";}
var data=hasBody?this:undefined;DjangoRESTResource[name].call(this,params,data,success,error);};});DjangoRESTResource.bind=function(additionalParamDefaults){return DjangoRESTResourceFactory(url,extend({},paramDefaults,additionalParamDefaults),actions);};return DjangoRESTResource;}
return DjangoRESTResourceFactory;}]);