import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {MyRoutes} from './routes/routes.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <header className="App-header">
        <h1>----menu----</h1>
      </header>
  
    <MyRoutes/>
    </div>
  )
}

export default App
