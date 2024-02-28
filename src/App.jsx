import Navbar from './components/Navbar'
import './App.css'
import BG from './assets/bg.png'
import About from './components/About'
import Gallery from './components/Gallery'


function App() {
  

  return (
    <>
    <div className='h-screen bg-[url("./assets/bg.png")] bg-contain bg-no-repeat bg-center'>
      <Navbar/>
    </div>
    <About/>
    <Gallery/>
    </>
  )
}

export default App
