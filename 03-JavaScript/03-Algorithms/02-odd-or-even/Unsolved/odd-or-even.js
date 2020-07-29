// Write code to return the string "odd" if `num` is an odd number
// and return the string "even" if `num` is an even number

var oddOrEven = function(array) {
    for (var i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
        console.log('even')
      } else {
        console.log('odd');
      }
    }
  };
  oddOrEven([1,2,3,4,5,6,7,8,9]);