import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MainUser } from './crud/MainUser'

function App() {
  const [count, setCount] = useState(0)

  return (
   <MainUser/>
  )
}

export default App
