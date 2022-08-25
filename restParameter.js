// function restPara(a,b,c,...d){
//     console.log(`a is ${a}`)
//     console.log(`b is ${b}`)
//     console.log(`c is ${c}`)
//     console.log(`d is `,d)
// }

// restPara(43,5,2,4,5,7,8);

const addAll = function(...numbers){
    let total = 0;
    for(let number of numbers){
        total = total + number;
    }
    
    return total;
}

const ans = addAll(5,6,4,16,3,7,8);
console.log(ans);