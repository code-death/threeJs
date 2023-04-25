import Canvas from './canvas'
import Customizer from './pages/Customizer'
import './App.css'
import Home from './pages/HOme'

function App() {


  return (
    <main className='app transition-all ease-in'>
      <Home />
      <Canvas />
      <Customizer />
    </main>
  )
}

export default App
