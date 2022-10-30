import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Experience from './pages/Experience/Experience';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ProjectDisplay from './pages/ProjectDisplay/ProjectDisplay';
import ContactForm from './components/ContactForm/ContactForm';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/projects/:id' element={<ProjectDisplay/>} />
          <Route path='/experience' element={<Experience/>}/>
          <Route path='/contact' element={<ContactForm/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
