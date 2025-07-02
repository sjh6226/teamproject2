import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from "react-router-dom";
import WeatherDetailPage from "./component/page/WeatherDetailPage";
import WeatherMainPage from "./component/page/WeatherMainPage";
import Detail from "./pages/Detail";
import Home from "./pages/Home"; 
import { BrowserRouter, Routes, Route } from "react-router-dom"; 

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          
          {/* 
          <Route path="/" element={<WeatherMainPage />} />
          <Route path="/weather/:locationId" element={<WeatherDetailPage />} /> 
          */}
        </Routes>
      </BrowserRouter>
    );



  /* 
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  ) 
    */
}

export default App
