// Write a function createHelloWorld. It should return a new function that always returns "Hello World".



const createHelloWorld = function (){
    return function(...args) // sınırsız sayıda argüman 
    {
        return ("Hello World");
    };
}
const a = createHelloWorld();
console.log(a()); 

