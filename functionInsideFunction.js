const app = () =>{
    console.log("hello from Function");

    // adddition of three numbers
    function sumOfTwo(num1, num2){
        console.log(num1 + num2);
    }

    // multiplication of three numbers 
    const multipleOfThree = function(num1, num2, num3){
        return num1 * num2 * num3;
    }

    // addition of natural numbers 
    const addnofNumbers = (numbers) => {
        total = 0;
        for(let i=1; i<=numbers; i++){
            total = i + total;
            console.log(total);
        }
    } 
    addnofNumbers(10);
    console.log(multipleOfThree(4,5,3));
    sumOfTwo(10,55);

}
app();