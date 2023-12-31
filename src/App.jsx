import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <NavBar/>
     
     <ItemListContainer
            greeting={"Le damos la Bienvenida a nuestra tienda !"}
     />

     
    </>
  )
}

export default App
