import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Game from "./Game.tsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <Game/>
    </div>

  )
}

export default App
