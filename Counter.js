//Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).


var createCounter = function(n){
    let count =n;

    return function(){
        return count++;
    };

};

class Counter {
    constructor(n)
    {
        this.n =n ; //başlangıç değer
    }
    increment(){
        return ++this.n;
    };
};
const counter = new Counter(10);  // 'new' anahtar kelimesi ile bir nesne oluşturulmalı
console.log(counter.increment());  // 11
console.log(counter.increment());

