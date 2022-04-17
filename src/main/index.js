const { app, BrowserWindow, session } = require('electron')
const devTools =
  'C:/Users/CareyQ/AppData/Local/Microsoft/Edge/User Data/Default/Extensions/nhdogjmejiglipccpnnnanhbledajbpd/6.1.4_0'

function createWindow() {
  const win = new BrowserWindow({
    width: 1060,
    height: 770,
    frame: false,
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: true
    }
  })

  win.loadURL('http://localhost:3000')
  win.webContents.openDevTools({ mode: 'detach' })
}

app.whenReady().then(async () => {
  await session.defaultSession.loadExtension(devTools)
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
