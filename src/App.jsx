import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

function App() {

  return (
    <div>
      <Header />
      <Home />
      <About />
      <Contact />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
