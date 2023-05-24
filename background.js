//main.js
 
const { app, BrowserWindow } = require('electron');
const path = require('path');

console.log(app.getVersion());
console.log(app.getName());


async function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 900,
    height: 700,
    kiosk: true,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      webviewTag: true,
      nodeIntegrationInWorker: true,
      nodeIntegrationInSubFrames: true
    }
  })
    
  // Load the index.html when not in development
  win.loadURL('file://' + path.join(__dirname, 'index.html'))
}

app.on('ready', async () => {  
  createWindow()
})