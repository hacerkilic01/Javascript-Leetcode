// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

// The three functions are:

// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.

var createCounter = function (init) {
  let count = init;

  const increment = () => ++count;
  
//   function increment(){
//     return ++count;
//   }

  function decrement() {
    return --count;
  }

  function reset() {
    count = init;
    return count;
  }

  return {
    increment : increment,
    decrement : decrement,
    reset : reset,
  }
};

// class Counter {
//     constructor(init){
//         this.init = init;
//         this.count = init;
//     }
//     increment () {
//         return ++this.count;
//     }
//     decrement () {
//         return --this.count;
//     }
//     reset() {
//         this.count = this.init;
//         return this.count;
//     }
// }
// const counter = new Counter(10);  // Yeni bir sayaç nesnesi oluşturuluyor 
// console.log(counter.increment()); // 11 (10'dan 1 artırıldı)
// console.log(counter.decrement()); // 10 (11'den 1 azaltıldı)
// console.log(counter.reset());