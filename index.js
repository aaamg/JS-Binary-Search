// Time Complexity: O(log n)
// Space Complexity: 

var array = [1,3,4,6,8,9,11,14,60]
                  ///^ <-- middle on first go 
var binarySearch = (data, value) => {

  // Var dec
  var first, last, n, middle;
  n = data.length; // 9
  first = 0; // 0
  last = n - 1; // 8

  //Algo
  while(first <= last){
    middle = Math.floor((first + last) / 2)
    if(value > data[middle]){
      first = middle + 1
    } else if(value < data[middle]){
      last = middle - 1
    } else {
      return middle
    }
  }
};

binarySearch(array, 9)

