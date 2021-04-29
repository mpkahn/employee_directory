import React from 'react';
import Main from './components/Main';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import Navbar from './Components/Navbar';
import "./App.css";import './App.css';

function App() {
  return (
    <div className="App">
   <Wrapper>
     <Navbar/>
     <Header />
     <Main />
   </Wrapper>
    </div>
  );
}
export default App;
