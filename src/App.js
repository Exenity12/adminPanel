import { React } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Admin from './components/Admin';
import Game from './components/Game';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Admin />}/>
        <Route path="/game" element={<Game />}/>
      </Routes>
    </div>
  );
}

export default App;
