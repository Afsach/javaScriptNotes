// it will print whole function
// function func(){
//     console.log("inside func function");
// }

// function func1(a){
//     console.log(a);
// }

// func1(func);

// here a = function func(){
//          console.log("inside func function");
//          }


// 2. just a bit different
//    function func(){
//     console.log("Inside func function");        //2

// }


// const func1 = function(callBack){
//     console.log("Hello there I am a call Back function")        //1
//     callBack();      //2
// }


// func1(func);




// 3.  Just a bit different

function func(name) {
    console.log("Inside func function");        //2
    console.log(` ${name}`);       //3

}

const func1 = function (callBack) {
    console.log("Hello there I am a call Back function")        //1
    callBack("It will come from call back and print in func function ");     //3
}


func1(func);




