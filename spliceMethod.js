// spice method (start, delete, insert)
//It returns deleted Items in new array
// it changes the original array

const words = ["Abhay", "Burak", "Aman", "Sheetal", "roshni", "malini", "mangesh"];
// words.splice(3, 0, "Mishra", "Deepa");
// words.splice(3, 2, "Deepak", "Prajapati");
const deletedItems = words.splice(4, 2);

console.log(deletedItems);
console.log(words);

console.log(deletedItems === words);