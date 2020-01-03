"use strict";
const zipSync = new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'zip.json', true); // true:async非同期で行うという意味
    xhr.onload = () => {
        // https://developer.mozilla.org/ja/docs/Web/API/XMLHttpRequest/readyState
        // XMLHttpRequest.readyState
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                resolve(xhr.response);
            }
            else {
                reject(new Error(xhr.statusText));
            }
        }
    };
    xhr.send(null);
}).then((value) => {
    console.log(value);
}).catch((reason) => {
    console.log("★Error");
    console.log(reason);
});
