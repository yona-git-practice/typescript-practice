"use strict";
var xhr = new XMLHttpRequest();
xhr.open('GET', 'zip.json', true); // true:async非同期で行うという意味
xhr.onload = function () {
    // https://developer.mozilla.org/ja/docs/Web/API/XMLHttpRequest/readyState
    // XMLHttpRequest.readyState
    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.response);
    }
};
xhr.send(null);
