const electron = require('electron');
function search(){
    const input = document.querySelector('input[name="q"]');
    input.value = "test";
}

setTimeout(function(){ alert("Hello");search(); }, 3000);