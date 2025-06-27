import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Solutions from "./components/Solutions";
import About from "./components/About";
import Contact from "./components/Contact";
import ValueProposition from "./components/ValueProposition";
import ServicesProducts from "./components/ServicesProducts";
import CaseStudies from "./components/CaseStudies";
import CallToAction from "./components/CallToAction";
import AIRecruitment from "./components/AIRecruitment";
import AIAdvisory from "./components/AIAdvisory";
import ScrollToTop from "./components/ScrollToTop";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ScrollToTop />
        <Header />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <ValueProposition />
                  <ServicesProducts />
                  <CaseStudies />
                  <CallToAction />
                </>
              }
            />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/ai-advisory" element={<AIAdvisory />} />
            <Route path="/ai-recruitment" element={<AIRecruitment />} />
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
