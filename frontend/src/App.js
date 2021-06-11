
import React,{useState} from "react";
import { Route } from "react-router-dom";

import Header from "./components/header/index";
import Main from "./components/main/index";
import PreFooter from "./components/prefooter/index";
import Footer from "./components/footer/index";

import './App.css'

const App = () => {
  const [token,setToken]=useState()
  const [role,setRole]=useState()


  return (
    <div className="App">
      <Header token={token}setToken={setToken} setRole={setRole}/>
      <Main token={token}setToken={setToken} role={role} setRole={setRole}/>
      <PreFooter/>
      <Footer/>
    </div>
  );
};

export default App;
