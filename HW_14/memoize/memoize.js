function add(a, b) {
  console.log('Called add(' + a + ', ' + b + ')');

  return a + b;
}

function sortNumber(a, b) {
  return a - b;
}


function cache(func) {
  var results = {};
  return function() {
    var args = Array.prototype.slice.call(arguments); 
    if (isAllArrayNumber(args)) {
      args.sort(sortNumber);
    }   
    var key = JSON.stringify(args);    
    console.log(key);
    
    if (!(key in results)) {
      results[key] = func.apply(this, args);
    }

    return results[key];
  };
};

function isAllArrayNumber(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (isNaN(arr[i])) {
      return false;
    }    
  }
  return true;
}


var madd = cache(add);

console.log(madd(2, 4));
console.log(madd(9, 7));
console.log(madd(7, 9));
console.log(madd(2, 4));
console.log(madd('foo', 'baz')); 