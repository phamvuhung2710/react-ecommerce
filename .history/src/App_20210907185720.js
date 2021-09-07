import React from 'react'
import 'normalize.css'
import 'src/assets/styles/global.scss'
import 'react-toastify/dist/ReactToastify.css'
import Routes from './Routes'
import { ToastContainer } from 'react-toastify'
import Authorization from './components/Authorization/Authorization'
import { SnackbarProvider } from 'notistack'
import Fallback from './components/Fallback/Fallback'

function App() {
  return (
    <div className="App">
      <Routes />
      <Fallback />
      <ToastContainer />
      <Authorization />
    </div>
  )
}

export default App
