
import './App.css'
import Hero from './components/hero/Hero'
import Navbar from './components/Navbar/navbar'
import { Projects } from './components/projects/Projects'
import Services from './components/services/services'
import GitNote from './components/git-note/GitNote'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

function App() {
  

  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <GitNote />
      <Contact />
      <Footer />

      
    </>
  )
}

export default App
