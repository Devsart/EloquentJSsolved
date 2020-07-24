function range(start,end,increment){
    var list = [];
    if (increment==undefined){
    (start <= end) ? increment = 1 : increment = -1;
    };
    
    if(increment>0){
        for(var i = start ; i <= end ;i+=increment){
        list.push(i);
        }
    }
    else if(increment<0){
        for(var i = start ; i >= end ;i+=increment){
        list.push(i);
        }
    }
    else{
        return null
    }
    return list;
    };
    
function sum(sarray){
    var suma = 0;
    for(var i = 0; i < sarray.length ; i++ ){
        suma += sarray[i];
    }
    return suma;
    
    }
    
    //extra: Fibonacci with n size.
    
function Fibonacci(n){
    fibarray=[1];
    for(var i=1;i<n;i++){
        var fib = fibarray.length > 1 ? fibarray[i-1]+fibarray[i-2] : fibarray[i-1];
        fibarray.push(fib);
        }
    return fibarray;
    }
    
function reverseArray(array){
    newArray =[];
    for(i=array.length-1;i>=0;i+=-1){
        newArray.push(array[i]);
    }
    return newArray;
}

function reverseArrayInPlace(array){
    var x = (array.length-1)/2
    for(i=0;i< x;i++){
        var p = array[i];
        var u = array[array.length-(i+1)];
        array[array.length-(i+1)] = p;
        array[i] = u;
    }
    return array;
}

function arrayToList(array){
    list = null;
    for(i=(array.length-1);i>=0;i+=-1){
        list={value:array[i], rest:list};
        }
    return list;
    }
    
function listToArray(list){
    array = [];
    while(list.rest != null){
        array.push(list.value);
        list = list.rest;
        };
    array.push(list.value);
    return array;
    };

function prepend(element,list) {
    list={value:element,rest:list};
    return list
};

function nth(list,position){
    var element = ""
    for(i=0;i<=position;i++){
        if(list != null){
            element = list.value;
            list = list.rest;
        }
        else{
            element = undefined
        }
    }
    return element;
}
//now, the recursive version...
function nthr(list,position){
    list != null ? 
    position == 0 ? 
    element = list.value 
    : nthr(list.rest,position-1) 
    : element = undefined;
    return element; 
}    

var deepEqual = function (x, y) {
    if (x === y) {
      return true;
    }
    else if ((typeof x == "object" && x != null) && (typeof y == "object" && y != null)) {
      if (Object.keys(x).length != Object.keys(y).length)
        return false;
  
      for (var prop in x) {
        if (y.hasOwnProperty(prop))
        {  
          if (! deepEqual(x[prop], y[prop]))
            return false;
        }
        else
          return false;
      }
  
      return true;
    }
    else 
      return false;
  }
   

obj1 = {here:{is: {morty: 'an'}},there:2,away:{together: 'no'}};
obj2 = {here:{is: {morty: 'an'}},there:2,away:{together: 'no'}};
console.log(deepEqual(obj1,obj2))