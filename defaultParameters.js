const defaultParameter = function(num1=0, num2=0){
    console.log(num1 + num2);
}
defaultParameter();


// second method 
function defaultPara(num1, num2){
    if(num2 === undefined){
        num2 = 0;
    }
    return(num1+num2);
}
console.log(defaultPara(9));