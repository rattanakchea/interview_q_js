//Given an array of integers, return indices of the two numbers such that they add up to a specific target.
//You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Given nums = [2, 7, 11, 15], target = 9,
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1]


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twosums(nums, target) {

  //key: value
  //value: index
  var map = new Map();

  for(var i=0; i < nums.length; i++) {
    var complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  //return [2, 7];
  return [];
}

// Unit tests
describe('two sum', ()=> {

  var nums = [2, 7, 11, 15];
  var target = 13;
  var result = [0, 2]
  it('positive test', () => {

    expect(twosums(nums, target)).toEqual(result);
  })

})
