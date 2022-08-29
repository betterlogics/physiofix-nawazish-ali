import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import Header from './components/Header/Header';
import Nav_bar from './components/Nav_bar/Nav_bar';
import Signup from './components/Sign_up/Sign_up';
import Home from './components/Home/Home';
import About from './components/About/About';
import{BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import All_testimonials from './components/All_testimonials/All_testimonials';
import Main_test from './components/Main_test/Main_test';
import Upper_header from './components/Upper_header/Upper_header';
import Main_about from './components/Main_about/Main_about';
import Main_home from './components/Main_home/Main_home';
import Sign_up from './components/Sign_up/Sign_up';
import Top_nav from './components/Top_nav/Top_nav';
import Input from './components/Input/Input';
import Top_footer from './components/Top_footer/Top_footer';
import Sub_footer from './components/Sub_footer/Sub_footer';
import Main_online from './components/Main_online/Main_online';
import Login from './components/Login/Login';
import Submit from './components/Submit/Submit';
import AllBlogs from './components/AllBlogs/AllBlogs';
import FullBlog from './components/FullBlog/FullBlog';
import EditBlog from './components/EditBlog/EditBlog';



function App() {
  const [adminLoggedIn,setAdminLoggedIn ] = useState(false);
  
  return (
  
    <div className="App">
      <Router>
        <Top_nav/>
        <Nav_bar/>
        {/* <FullBlog/> */}
        <EditBlog/>

       
       
        <Routes>
        {/* <Route exact path='/' element={<Main_home/>}/>
        <Route exact path='/About' element ={<Main_about/>}/>
        <Route exact path='/blog' element ={<Main_test/>}/>
        <Route exact path='/allblogs' element ={<AllBlogs />}/>
        <Route exact path='/signup' element ={<Sign_up/>}/>
        <Route exact path='/online' element ={<Main_online/>}/>
        <Route exact path='/login' element ={<Login setAdminLoggedIn = {setAdminLoggedIn} />}/>
        <Route exact path='/submit' element ={<Submit />}/> */}
        {/* { adminLoggedIn == true ? <Route exact path='/submit' element ={<Submit/>}/> : <></>} */}
        </Routes>
        <Input/>
        <Top_footer/>
        <Sub_footer/>
      </Router>
       


    </div>
  
  );
}

export default App;
