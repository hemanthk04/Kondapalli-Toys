import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/layout/navbar";
import Hero from './components/layout/herosection';
import About from './components/layout/about';
import History from './components/layout/history';
import Footer from './components/layout/footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <About/>
      <History/>
      <Footer/>
    </>
  );
}

export default App
