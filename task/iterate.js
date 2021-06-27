function dropElements(arr, func) {
    
    let myArr=[];
    for (let i=0; i<arr.length; i++) {
      if (func(arr[i])) {
        myArr=arr.slice(i);
        break;
      }
    }
    return myArr;
  }
  
 

console.log( dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) );
console.log( dropElements([1, 2, 3, 4], function(n) {return n >= 5;}) );