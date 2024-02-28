import Navbar from './components/Navbar'
import './App.css'
import About from './components/About'
import Gallery from './components/Gallery'
import Menu from './components/Menu'


function App() {
  

  return (
    <>
    <div className='h-screen bg-[url("./assets/bg.png")] bg-opacity-10 bg-contain bg-no-repeat bg-center'>
      <Navbar/>
    </div>
    <About/>
    <Gallery/>
    <Menu/>
    </>
  )
}

export default App
