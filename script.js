// Day 4 Tasks

console.log("Day 4 Tasks ");
//Task 1- Programs in anonymous function & IIFE
console.log("Task 1- Programs in anonymous function & IIFE");
console.log("!----------------------------!");
// Print odd numbers in an array in anonymous function & IIFE
console.log("Task a--->Print odd numbers in an array");

console.log("Method 1-->Anonymous function");
console.log("Array-[13, 52, 39, 47, 51, 69, 72, 86, 97, 170]");
var result = [];
var a = function (arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      result.push(arr[i]);
    }
  }
  return result;
};
console.log("Odd Numbers->" + a([13, 52, 39, 47, 51, 69, 72, 86, 97, 170]));

console.log("----------------------------");

console.log("Method 2-->IIFE function");
console.log("Array-[1, 3, 5, 2, 46, 76, 80, 34, 44, 33, 22, 65, 99]");
var result = []; 
(function (arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      result.push(arr[i]);
    }
  }
  console.log("Odd Numbers->" + result.join(" "));
})([1, 3, 5, 2, 46, 76, 80, 34, 44, 33, 22, 65, 99]);

console.log("x-------------------------x");

// Convert all the strings to title caps in a string array in anonymous function & IIFE
console.log(
  "Task b--->Convert all the strings to title caps in a string array"
);

console.log("Method 1-->Anonymous function");
console.log(
  "Before Title Caps->hI,wELcome,thIS is demO OF ConveRtiNG aLl sTrIngs TO TiTLE  cAps"
);

var result = [];
var b = function (arr) {
  let str = [];
  for (var i = 0; i < arr.length; i++) {
    //console.log(arr[i].toLowerCase());
    str.push(arr[i].toLowerCase());
    str[i] = str[i].charAt(0).toUpperCase() + str[i].substr(1);
    result = str;
  }
  return result.join(" ");
};
console.log(
  b([
    "hI",
    "wELcome",
    "thIS",
    "is",
    "demO",
    "OF",
    "ConveRtiNG",
    "aLl",
    "sTrIngs",
    "TO",
    "TiTLE",
    "cAps",
  ])
);

console.log("----------------------------");

console.log("Method 2-->IIFE function");
console.log(
  "Before Title Caps->hI,wELcome,thIS is demO OF ConveRtiNG aLl sTrIngs TO TiTLE  cAps"
);
var result = [];
(function (arr) {
  let str = [];
  for (var i = 0; i < arr.length; i++) {
    //console.log(arr[i].toLowerCase());
    str.push(arr[i].toLowerCase());
    str[i] = str[i].charAt(0).toUpperCase() + str[i].substr(1);
    result = str;
  }
  console.log(result.join(" "));
})([
  "hI",
  "wELcome",
  "thIS",
  "is",
  "demO",
  "OF",
  "ConveRtiNG",
  "aLl",
  "sTrIngs",
  "TO",
  "TiTLE",
  "cAps",
]);

console.log("x-------------------------x");

// Sum of all numbers in an array in anonymous function & IIFE
console.log("Task c--->Sum of all numbers in an array");

console.log("Method 1-->Anonymous function");
console.log("Array->[13, 52, 39, 47, 51, 69, 72, 86, 97, 170]");
var c = function (arr) {
  let sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};
console.log(
  "Sum of Odd numbers ->>" + c([13, 52, 39, 47, 51, 69, 72, 86, 97, 170])
);

console.log("----------------------------");

console.log("Method 2-->IIFE function");
console.log("Array->[133, 532, 390, 47, 51, 69, 72, 86, 97, 170]");
 (function (arr) {
  let sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log("Sum of Odd numbers ->>" + sum);
})([133, 532, 390, 47, 51, 69, 72, 86, 97, 170]);

console.log("x-------------------------x");

// Return all the prime numbers in an array in anonymous function & IIFE
console.log("Task d--->Return all the prime numbers in an array");

console.log("Method 1-->Anonymous function");
console.log("Array->[1,2,3,11,13,39,47,51,69,72,86,97]");
var result = [];
var d = function (arr) {
  let isPrime = true;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 2) {
      isPrime = true;
    } else if (arr[i] % 2 === 0) {
      isPrime = false;
    } else {
      for (let factor = 3; factor * factor <= arr[i]; factor = factor + 2) {
        if (arr[i] % factor == 0) {
          isPrime = false;
          break;
        }
        isPrime = true;
      }
    }
    if (isPrime) {
      result.push(arr[i]);
    }
  }
  return result.join(" ");
};
console.log(d([1, 2, 3, 11, 13, 39, 47, 51, 69, 72, 86, 97, 14]));

console.log("----------------------------");

console.log("Method 2-->IIFE function");
console.log("Array->[133, 532, 390, 47, 51, 69, 72, 86, 97, 173]");
var result = [];
(function (arr) {
  let isPrime = true;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 2) {
      isPrime = true;
    } else if (arr[i] % 2 === 0) {
      isPrime = false;
    } else {
      for (let factor = 3; factor * factor <= arr[i]; factor = factor + 2) {
        if (arr[i] % factor == 0) {
          isPrime = false;
          break;
        }
        isPrime = true;
      }
    }
    if (isPrime) {
      result.push(arr[i]);
    }
  }
  console.log(result.join(" "));
})([133, 532, 390, 47, 51, 69, 72, 86, 97, 173]);

console.log("x-------------------------x");

// Return all the palindromes in an array in anonymous function & IIFE
console.log("Task e--->Return all the palindromes in an array");

console.log("Method 1-->Anonymous function");
console.log(
  "Array->[civic, radar, level,rotor,kayak, madam,refer,name,Date,size]"
);
var e = function (arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    let rev = arr[i].split("").reverse().join("");
    //console.log(rev);
    if (rev === arr[i]) {
      result.push(rev);
    }
  }
  return result.join(" ");
};
console.log(
  e([
    "civic",
    "radar",
    "level",
    "rotor",
    "kayak",
    "madam",
    "refer",
    "name",
    "Date",
    "size",
  ])
);

console.log("----------------------------");

console.log("Method 2-->IIFE function");
console.log(
  "Array->[civic, radar,hi,level,welcome,malayalam,rotor,kayak, madam,refer,name,Date,size]"
);
 (function (arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    let rev = arr[i].split("").reverse().join("");
    //console.log(rev);
    if (rev === arr[i]) {
      result.push(rev);
    }
  }
  console.log(result.join(" "));
})([
  "civic",
  "radar",
  "Hi",
  "level",
  "Welcome",
  "malayalam",
  "rotor",
  "kayak",
  "madam",
  "refer",
  "name",
  "Date",
  "size",
]);

console.log("x-------------------------x");

// Return median of two sorted arrays of the same size in anonymous function & IIFE
console.log("Task f--->Return median of two sorted arrays of the same size.");

console.log("Method 1-->Anonymous function");
console.log("Array1->[1,3,2,5,6,8,9,7,4], Array2->[11,10,15,12,14,13]");
var f = function (arr1, arr2) {
  var result = [];
  let sortedarr1 = arr1.sort();
  let sortedarr2 = arr2.sort();
  //console.log(sortedarr1,sortedarr2);
  let concatedarr = sortedarr1.concat(sortedarr2);
  console.log(concatedarr);
  if (concatedarr.length % 2 !== 0) {
    let median = concatedarr.length / 2;
    return median;
  } else {
    let median = concatedarr.length / 2 + concatedarr.length / 2 + 1;
    return median;
  }
};
console.log(
  "Median of two sorted arrays of the same size ->" +
    f([1, 3, 2, 5, 6, 8, 9, 7, 4], [11, 10, 12, 15, 14, 13])
);

console.log("----------------------------");

console.log("Method 2-->IIFE function");
console.log("Array1->[1,3,2,5,6,8,9,7,4],Array 2->[10,12,15,14,13]");
(function (arr1, arr2) {
  var result = [];
  let sortedarr1 = arr1.sort();
  let sortedarr2 = arr2.sort();
  //console.log(sortedarr1,sortedarr2);
  let concatedarr = sortedarr1.concat(sortedarr2);
  console.log(concatedarr);
  if (concatedarr.length % 2 !== 0) {
    let median = concatedarr.length / 2;
    console.log(median);
  } else {
    let median = concatedarr.length / 2 + concatedarr.length / 2 + 1;
    console.log("Median of two sorted arrays of the same size ->" + median);
  }
})([1, 3, 2, 5, 6, 8, 9, 7, 4], [10, 12, 15, 14, 13]);

console.log("x-------------------------x");

// Remove duplicates from an array in anonymous function & IIFE
console.log("Task g--->Remove duplicates from an array.");

console.log("Method 1-->Anonymous function");
console.log("Array->[1,3,2,2,3,1,5,6,6,7,9,6]");
var g = function (arr) {
  let newarr = [];
  for (let i = 0; i < arr.length; i++) {
    if (newarr.indexOf(arr[i]) === -1) {
      newarr.push(arr[i]);
    }
  }
  return newarr.join(" ");
};
console.log(g([1, 3, 2, 2, 3, 1, 5, 6, 6, 7, 9, 6]));

console.log("----------------------------");

console.log("Method 2-->IIFE function");
console.log("Array->1,32,22,22,3,16,25,16,6,7,9,6]");
 (function (arr) {
  let newarr = [];
  for (let i = 0; i < arr.length; i++) {
    if (newarr.indexOf(arr[i]) === -1) {
      newarr.push(arr[i]);
    }
  }
  console.log(newarr.join(" "));
})([1, 32, 22, 22, 3, 16, 25, 16, 6, 7, 9, 6]);

console.log("x-------------------------x");

// Rotate an array by k times in anonymous function & IIFE
console.log("Task g--->Rotate an array by k times");

console.log("Method 1-->Anonymous function");
console.log("Array->[1,3,2,2,3,1,5,6,6,7,9,6],k=3");
var h = function (arr, k) {
  for (let i = 0; i < k; i++) {
    arr.unshift(arr.pop());
  }
  return arr.join(" ");
};
console.log(
  "Rotated array by k value 3 -> " + g([1, 3, 2, 2, 3, 1, 5, 6, 6, 7, 9, 6], 3)
);

console.log("----------------------------");

console.log("Method 2-->IIFE function");
console.log("Array->[1,32,22,22,3,16,25,16,7,9,6],k=4");
var h1 = (function (arr, k) {
  for (let i = 0; i < k; i++) {
    arr.unshift(arr.pop());
  }
  console.log("Rotated array by k value 4 -> " + arr.join(" "));
})([1, 32, 22, 22, 3, 16, 25, 16, 7, 9, 6], 4);

console.log("x-------------------------x");

console.log("!----------------------------!");

//Task 2- Programs in arrow functions.
console.log("Task 2- Programs in arrow functions..");
console.log("!----------------------------!");
// Print odd numbers in an array in arrow functions
console.log("Task a--->Print odd numbers in an array");

console.log("Array-[13, 52, 39, 47, 51, 69, 72, 86, 97, 170]");
var result = [];
var a = (arr) => {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      result.push(arr[i]);
    }
  }
  return result;
};
console.log("Odd Numbers->" + a([13, 52, 39, 47, 51, 69, 72, 86, 97, 170]));

console.log("----------------------------");

// Convert all the strings to title caps in a string array in  arrow functions
console.log(
  "Task b--->Convert all the strings to title caps in a string array"
);

console.log(
  "Before Title Caps->hI,wELcome,thIS is demO OF ConveRtiNG aLl sTrIngs TO TiTLE  cAps"
);

var result = [];
var b = (arr) => {
  let str = [];
  for (var i = 0; i < arr.length; i++) {
    //console.log(arr[i].toLowerCase());
    str.push(arr[i].toLowerCase());
    str[i] = str[i].charAt(0).toUpperCase() + str[i].substr(1);
    result = str;
  }
  return result.join(" ");
};
console.log(
  b([
    "hI",
    "wELcome",
    "thIS",
    "is",
    "demO",
    "OF",
    "ConveRtiNG",
    "aLl",
    "sTrIngs",
    "TO",
    "TiTLE",
    "cAps",
  ])
);

console.log("----------------------------");

//Sum of all numbers in an array in arrow functions
console.log("Task c--->Sum of all numbers in an array");

console.log("Array->[13, 52, 39, 47, 51, 69, 72, 86, 97, 170]");
var c = (arr) => {
  let sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};
console.log(
  "Sum of Odd numbers ->>" + c([13, 52, 39, 47, 51, 69, 72, 86, 97, 170])
);

console.log("----------------------------");

// Return all the prime numbers in an array in arrow functions
console.log("Task d--->Return all the prime numbers in an array");

console.log("Array->[1,2,3,11,13,39,47,51,69,72,86,97]");
var result = [];
var d = (arr) => {
  let isPrime = true;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 2) {
      isPrime = true;
    } else if (arr[i] % 2 === 0) {
      isPrime = false;
    } else {
      for (let factor = 3; factor * factor <= arr[i]; factor = factor + 2) {
        if (arr[i] % factor == 0) {
          isPrime = false;
          break;
        }
        isPrime = true;
      }
    }
    if (isPrime) {
      result.push(arr[i]);
    }
  }
  return result.join(" ");
};
console.log(d([1, 2, 3, 11, 13, 39, 47, 51, 69, 72, 86, 97, 14]));

console.log("----------------------------");

// Return all the palindromes in an array in arrow functions
console.log("Task e--->Return all the palindromes in an array");

console.log(
  "Array->[civic, radar, level,rotor,kayak, madam,refer,name,Date,size]"
);
var e = (arr) => {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    let rev = arr[i].split("").reverse().join("");
    //console.log(rev);
    if (rev === arr[i]) {
      result.push(rev);
    }
  }
  return result.join(" ");
};
console.log(
  e([
    "civic",
    "radar",
    "level",
    "rotor",
    "kayak",
    "madam",
    "refer",
    "name",
    "Date",
    "size",
  ])
);
console.log("----------------------------");
