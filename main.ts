import { app, BrowserWindow, BrowserView } from 'electron'
import { resolve } from 'path'

let mainWindow: BrowserWindow

const createMainWindow = () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    title: "DevDocs - Desktop",
    icon: resolve(__dirname, 'images/icon.png')
  })

  const view = new BrowserView({
    webPreferences: {
      nodeIntegration: false
    }
  })
  view.webContents.loadURL('https://devdocs.io')
  mainWindow.setBrowserView(view)

  const resizeView = () => {
    const { width, height } = mainWindow.getBounds()
    view.setBounds({ x: 0, y: 0, width, height })
  }
  // Resize BrowserView when BrowserWindow is resized
  mainWindow.on('resize', resizeView)
  resizeView()
}

app.on('ready', createMainWindow)