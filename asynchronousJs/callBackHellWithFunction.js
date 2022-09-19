const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
const heading8 = document.querySelector(".heading8");
const heading9 = document.querySelector(".heading9");
const heading10 = document.querySelector(".heading10");
console.log(heading10);

function functionChangeTextAndBackground(element, text, color, time, onSuccess, onFaiture) {
    setTimeout(() => {
        if (element) {
            element.textContent = text;
            element.style.backgroundColor = color;
            if (onSuccess) {
                onSuccess();
            }
        } else {
            if (onFaiture) {
                onFaiture();
            }
        }
    }, time)
}


// pyramid of doom
functionChangeTextAndBackground(heading1, "Heading1", "blue", 1000, () => {
    functionChangeTextAndBackground(heading2, "Heading2", "green", 1000, () => {
        functionChangeTextAndBackground(heading3, "Heading3", "red", 1000, () => {
            functionChangeTextAndBackground(heading4, "Heading4", "purple", 1000, () => {
                functionChangeTextAndBackground(heading5, "Heading5", "indigo", 1000, () => {
                    functionChangeTextAndBackground(heading6, "Heading6", "yellow", 1000, () => {
                        functionChangeTextAndBackground(heading7, "Heading7", "pink", 1000, () => {
                            functionChangeTextAndBackground(heading8, "Heading8", "violet", 1000, () => {
                                functionChangeTextAndBackground(heading9, "Heading9", "cyan", 1000, () => {
                                    functionChangeTextAndBackground(heading10, "Heading10", "teal", 1000, () => {
     
                                    }, () => { console.log("heading1 does not exits"); })
                                }, () => { console.log("heading2 does not exits"); })
                            }, () => { console.log("heading3 does not exits"); })
                        }, () => { console.log("heading4 does not exits"); })
                    }, () => { console.log("heading5 does not exits"); })
                }, () => { console.log("heading6 does not exits"); })
            }, () => { console.log("heading7 does not exits"); })
        }, () => { console.log("heading8 does not exits"); })
    }, () => { console.log("heading9 does not exits"); })
}, () => { console.log("heading10 does not exits"); })