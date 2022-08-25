// const rootNode = document.getRootNode();
// console.log(rootNode);

// console.log(document.childNodes);
// console.log(rootNode.childNodes);
// console.log(rootNode.childNodes[1]);

// const htmlElementNode = rootNode.childNodes[1];
// console.log(htmlElementNode.childNodes);

// const headNode = htmlElementNode.childNodes[0];
// console.log(headNode);
// const textNode = htmlElementNode.childNodes[1];
// console.log(textNode);
// const bodyNode = htmlElementNode.childNodes[2];
// console.log(bodyNode);

// console.log(headNode.parentNode);
// console.log(headNode.nextSibling);
// console.log(headNode.nextSibling.nextSibling);

// console.log(headNode.nextElementSibling);
// console.log(headNode.childNodes);

const h1 = document.querySelector("h1");
const parentElement = h1.parentNode;
parentElement.style.color = "brown";
parentElement.style.backgroundColor = "yellow";

const body = document.body;
console.log(body);

const head = document.querySelector("head");
console.log(head);

const headTitle = head.querySelector("title");
console.log(headTitle);
console.log(headTitle.childNodes);

const container = document.querySelector("div");
console.log(container);
console.log(container.childNodes);
console.log(container.children);
