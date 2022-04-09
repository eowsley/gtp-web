import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';
import WorkingWithUs from './components/WorkingWithUs'
import WorkingWithUsBanner from './components/WorkingWithUsBanner'
import {Routes, Route} from 'react-router-dom'
import {HashLink as Link} from 'react-router-hash-link'
import AboutUs from './components/AboutUs';

function App() {
  return (
    <div className='app__container'>
      <div className='app__header__div'>
        <Header/>
        <Nav/>
      </div>
      <div className='app__aboutus__div'>
        <AboutUs/>
      </div>
      <div className='app__workingwithus__div'>
        <WorkingWithUsBanner/>
      </div>
      <div className='app__footer__div'>
        <Footer/>
      </div>
      <Routes>
        <Route path='/about' element={<WorkingWithUs/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
