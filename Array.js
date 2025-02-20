// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

// The returned array should be created such that returnedArray[i] = fn(arr[i], i).

var map = function (arr,fn) {
    const res = new Array (arr.length);

    for (const i in arr){
        res[i] = fn(arr[i], Number(i));
    }
    return res;
};