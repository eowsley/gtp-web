import {Routes, Route} from 'react-router-dom'
import Contact from './components/Contact'
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Nav from './components/Nav';
import OurWork from './components/OurWork'
import WorkingWithUs from './components/WorkingWithUs';
import './App.css';

function App() {
  return (
		<div className='app__container'>
			<div className='app__header__div'>
				<Header />
				<Nav />
			</div>
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='/aboutus' element={<WorkingWithUs />}> </Route>
				<Route path='/ourwork' element={<OurWork />}></Route>
				<Route path='/contactus' element={<Contact />}></Route>
			</Routes>
      
			<Footer />
		</div>
	);
}

export default App;
