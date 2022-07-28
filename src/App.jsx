import { useState } from 'react'

import './App.css'
import logo from './images/shop.png'
import Boton from './components/Boton'
import Contador from './components/Contador'

function App() {
  const [numDeClics, setNumClics] = useState(0)

  
  const manejarClic = () => {
    setNumClics(numDeClics + 1)
  }
  

  const reiniciarContador = () =>{
    setNumClics(0)
  }

  const restarClic = () => {
    setNumClics(numDeClics - 1)
  }
  
  return (

   
    <div className="App">
      <div className="ecommerce-logo-contenedor">

        <img className='logo-shop' src={logo} alt="logo" />

      </div>

      <article className="contenedor-principal-contador">
        
        <Contador numDeClics = {numDeClics} />
        
        <Boton
        texto='Sumar'
        esBotonDeClic={true}
        manejarClic={manejarClic} />

        <Boton
        texto= 'Reiniciar' 
        esBotonDeClic={false}
        manejarClic={reiniciarContador}/>

        <Boton
        texto= 'Restar'
        esBotonDeClic={true}
        manejarClic={restarClic} />
      </article>
    </div>
  )
}

export default App
