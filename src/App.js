import logo from './logo.svg';
import './App.css';
import React from "react";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import{BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import All_testimonials from './components/All_testimonials/All_testimonials';
import Main_test from './components/Main_test/Main_test';


function App() {
  return (
  
    <div className="App">
      <Router>
        <Header/>
        <Routes>
        <Route exact path='/' element={<Main_test/>}/>
        <Route exact path='/About' element ={<About/>}/>
        </Routes>
      </Router>
       


    </div>
  
  );
}

export default App;
