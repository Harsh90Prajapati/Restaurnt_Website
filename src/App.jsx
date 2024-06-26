import Navbar from './components/Navbar'
import './App.css'
import About from './components/About'
import Gallery from './components/Gallery'
import Menu from './components/Menu'
import Reservation from './components/Reservation'
import Testimonial from './components/Testimonial'
import Contact from './components/Contact'
import Footer from './components/Footer'


function App() {
  

  return (
    <>
    <Navbar/>
    <div className='sm:h-screen h-96 bg-[url("./assets/bg.png")] bg-contain bg-no-repeat bg-center flex flex-col justify-center items-center'>
      <h1 className='sm:text-7xl text-5xl font-semibold text-yellow-400 font-serif'>MouMo</h1>
      <p className='sm:text-md text-sm'>The Taste Of Mountain</p>
      <a href='#reservation' className='mt-4 py-2 px-4 bg-blue-600 rounded-md text-sm shadow-md duration-300 hover:bg-indigo-500'>Book Now</a>
    </div>
    <Menu/>
    <Gallery/>
    <Reservation/>
    {/* <About/> */}
    <Contact/>
    <Testimonial/>
    <Footer/>
    </>
  )
}

export default App
