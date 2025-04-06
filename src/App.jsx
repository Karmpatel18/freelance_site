
import './App.css'
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {


  return (
    <div className='font-poppins flex w-full min-h-screen flex-col items-center'>
     
      <Navbar/>
      <Hero/>
    </div>
  )
}

export default App
