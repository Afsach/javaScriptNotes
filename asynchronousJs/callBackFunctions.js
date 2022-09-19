function normFuntion(callBackFunction) {
    console.log("I am a normal function");
    callBackFunction();
}

function callBackFunction() {
    console.log("I am a callBackFunction called inside normFunction");
}

normFuntion(callBackFunction);

// first way
// function getToNumbersAndAdd(n1, n2, addTwoNumbers){
//     console.log(n1, n2);
//     addTwoNumbers(n1, n2)
// }

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
// }

// getToNumbersAndAdd(3, 5, addTwoNumbers);

// second way
function getToNumbersAndAdd(n1, n2, onSuccess, onFailure) {
    console.log(n1, n2);
    if (typeof n1 === "number" && typeof n2 === "number") {
        onSuccess(n1, n2);
    } else {
        onFailure();
    }
}

// we can make separate function and pass its refference or we can directly pass a function as argument by separating with a comma
getToNumbersAndAdd(8, 5, (n1, n2) => {
    console.log(n1 + n2);
}, () => {
    console.log("wrong datatype !");
});