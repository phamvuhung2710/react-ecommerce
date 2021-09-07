import React from 'react'
import 'normalize.css'
import 'src/assets/styles/global.scss'
import 'react-toastify/dist/ReactToastify.css'
import Routes from './Routes'
import { ToastContainer } from 'react-toastify'
import Authorization from './components/Authorization/Authorization'
import Fallback from './components/Fallback/Fallback'
import { LinearProgress } from '@material-ui/core'

function App() {
  return (
    <div className="App">
      <Fallback />
      <LinearProgress />
      <Routes />

      <ToastContainer />
      <Authorization />
    </div>
  )
}

export default App
