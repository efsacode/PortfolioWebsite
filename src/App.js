import logo from './logo.svg';
import './App.css';
import SideBar from './components/sideBar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Services from './components/services/Services';
import Resume from './components/resume/Resume';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Testimonials from './components/testimonials/Testimonials';
import Blog from './components/blog/Blog';


const App = () => { 
  return (
    <>
    <SideBar />
    <main className='main'>
      <Home />
      <About />
      <Services />
      <Resume />
      <Portfolio />
      <Testimonials />
      <Blog />
      <Contact />
    </main>
      
    </>
  );
}
export default App;
