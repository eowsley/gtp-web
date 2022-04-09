import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';
import WorkingWithUs from './components/WorkingWithUs'
import WorkingWithUsBanner from './components/WorkingWithUsBanner'
import {Routes, Route, Link} from 'react-router-dom'

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
