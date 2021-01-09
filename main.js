const { app, BrowserWindow } = require('electron');

let googleWindow;

// handle create googleWindow
function createGoogleWindow(){
    googleWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            preload:`${__dirname}/scripts/googleWindow.js`
          }});
    //load html into window
    googleWindow.loadURL('https://www.google.com/');
    //garbage collection handle
    googleWindow.on('close', function(){
        googleWindow=null;
    });
}

app.whenReady().then(createGoogleWindow)
