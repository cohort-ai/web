import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Education from './components/Education';
import Trust from './components/Trust';
import Footer from './components/Footer';
import Solutions from './components/Solutions';
import About from './components/About';
import Contact from './components/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SolutionsPreview from './components/SolutionsPreview';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                {/* <SolutionsPreview />
                <Education />
                <Trust /> */}
              </>
            } />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/education" element={<Education />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
