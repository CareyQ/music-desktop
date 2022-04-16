const { app, BrowserWindow, session } = require('electron')
const devTools =
  'C:/Users/CareyQ/AppData/Local/Microsoft/Edge/User Data/Default/Extensions/nhdogjmejiglipccpnnnanhbledajbpd/6.1.4_0'

function createWindow() {
  const win = new BrowserWindow({
    width: 1140,
    height: 660,
    frame: false,
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: true
    }
  })

  win.loadURL('http://localhost:3000')
  win.webContents.openDevTools({ mode: 'detach' })
}

app.on('activate', () => {
  const allWindows = BrowserWindow.getAllWindows()
  if (allWindows.length) {
    allWindows[0].focus()
  } else {
    init()
  }
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.whenReady().then(async () => {
  createWindow
  await session.defaultSession.loadExtension(devTools)
})

app.whenReady().then(createWindow)

function init() {
  console.log('init')
  createWindow()
}
