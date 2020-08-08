// Write code to print all numbers from 1 to `num`
// Assume `num` will be a positive number


const nums = [ 0 ,1 ,2 ,3 ,4 ,5 ];
// accumulatedVal = 0, 0, 1, 3, 6, 10, 15
// currentVal = 0, 1, 2, 3, 4, 5,
const adder = function(accumulatedVal, currentVal) {
  console.log('I am accumulated value', accumulatedVal);
  console.log('I am current value', currentVal);
  return accumulatedVal + currentVal;
}
const sumArray = function(arr) {
  return arr.reduce(adder, 0);
};
sumArray(nums)