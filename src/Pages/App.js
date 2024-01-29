import React from "react"
import { Routes, Route } from "react-router-dom"
import Header from '../components/header'
import Home from '../components/Home'
import '../style/App.css'

function App() {
  return (
        <div className="App">
        <Header />
          <Routes>
            <Route exact path="/" element={<Home/>} />
          </Routes>
      </div>
  );
}

export default App;
