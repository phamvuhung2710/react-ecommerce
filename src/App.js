import React from 'react'
import 'normalize.css'
import 'src/assets/styles/global.scss'
import 'react-toastify/dist/ReactToastify.css'
import Routes from './Routes'
import { ToastContainer } from 'react-toastify'
import Authorization from './components/Authorization/Authorization'
import { SnackbarProvider } from 'notistack'

function App() {
  return (
    <div className="App">
      <SnackbarProvider maxSnack={3}>
        <Routes />
        <ToastContainer />
        <Authorization />
      </SnackbarProvider>
    </div>
  )
}

export default App
