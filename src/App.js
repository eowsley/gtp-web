import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';
import WorkingWithUs from './components/WorkingWithUs'
import WorkingWithUsBanner from './components/WorkingWithUsBanner'
import {Routes, Route} from 'react-router-dom'
import {HashLink as Link} from 'react-router-hash-link'

function App() {
  return (
    <div>
      <Header/>
      <Nav/>
      <WorkingWithUsBanner/>
      <Footer/>
      <Routes>
        <Route path='/about' element={<WorkingWithUs/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
