// clone using Object.assign 
// memory

const obj = {
    key1 : "value1",
    key2 : "value2"
}

const obj2 = obj ;
console.log(obj);
console.log(obj2);

obj.key3 = "value3";

console.log(obj);
console.log(obj2);

// first way to clone Object 
const obj3 = {...obj2};
console.log(obj3);
obj3.kye4 = "value4";
console.log(obj3);

// second way to clone object 
const obj4 = Object.assign({}, obj2)
console.log(obj4);
obj4.key5 = "value5";
console.log(obj2 === obj4); //to get condition true remove curley braces from line number 25