var app = require('app'),
    BrowserWindow = require('browser-window');

var mainWindow = null;

app.on('ready', function() {
    mainWindow = new BrowserWindow({
        width: 1024,
        height: 768
    });

    mainWindow.loadURL('file://' + __dirname + '/index.html');
    mainWindow.openDevTools();
});