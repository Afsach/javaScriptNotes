function hello(){
    console.log("hello world");
}
hello();

// javaScript Function = function + Object 
// javaScript function provide free space i.e. prototype object 
// only javaScript function provide prototype property

// const hello = [1, 3, 3, 5];
// const hello = {key:"1", key:"2"}

// to check only javaScript provide prototype property uncomment line 10 and 11 one after othe before that comment line 1 to 4

if (hello.prototype){
    console.log("prototype is present");
}else{
    console.log("prototype is not present")
}

console.log(hello.prototype);

// add prototype property in prototype object
hello.prototype.abc = "abc";
hello.prototype.xyz = [1, 4, 5, 8, 0];
hello.prototype.obj = {1 : "one", 2 : "two", 3 : "three"};
hello.prototype.func = function(){
    console.log("In prototype object property");
}

console.log(hello.prototype); 