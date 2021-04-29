import React from 'react';
import Main from './Components/Main';
import Wrapper from './Components/Wrapper';
import Header from './Components/Header';
// import Navbar from './Components/Navbar';
import "./App.css";import './App.css';

function App() {
  return (
    <div className="App">
   <Wrapper>
     {/* <Navbar/> */}
     <Header />
     <Main />
   </Wrapper>
    </div>
  );
}
export default App;
