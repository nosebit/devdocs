"use strict";
exports.__esModule = true;
var electron_1 = require("electron");
var path_1 = require("path");
var mainWindow;
var createMainWindow = function () {
    mainWindow = new electron_1.BrowserWindow({
        width: 800,
        height: 600,
        title: "DevDocs - Desktop",
        icon: path_1.resolve(__dirname, 'images/icon.png')
    });
    var view = new electron_1.BrowserView({
        webPreferences: {
            nodeIntegration: false
        }
    });
    view.webContents.loadURL('https://devdocs.io');
    mainWindow.setBrowserView(view);
    var resizeView = function () {
        var _a = mainWindow.getBounds(), width = _a.width, height = _a.height;
        view.setBounds({ x: 0, y: 0, width: width, height: height });
    };
    // Resize BrowserView when BrowserWindow is resized
    mainWindow.on('resize', resizeView);
    resizeView();
};
electron_1.app.on('ready', createMainWindow);
