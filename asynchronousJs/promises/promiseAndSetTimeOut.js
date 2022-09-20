console.log("script start");
function promiseAndSetTimeOut() {
    return new Promise((reslove, reject) => {
        let value = true;
        setTimeout(() => {
            if (value) {
                reslove();
            } else {
                reject();
            }
        }, 2000);
    });
}

promiseAndSetTimeOut().then(
    () => {
        console.log("reslove");
    }
).catch(
    () => {
        console.log("reject");
    }
);

console.log("script end");