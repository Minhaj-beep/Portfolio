import './App.css';
import Header from '../src/components/header/Header'
import Nav from '../src/components/nav/Nav'
import About from '../src/components/about/About'
import Experience from '../src/components/experience/Experience'
import Contact from '../src/components/contact/Contact'
import Testimonial from '../src/components/testimonial/Testimonial'
import Services from '../src/components/services/Services'
import Portfolio from '../src/components/portfolio/Portfolio'
import Footer from '../src/components/footer/Footer'

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      {/* <Testimonial /> */}
      <Contact />
      <Footer />
    </>
  );
}

export default App;
