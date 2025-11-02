import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import HooksDemo from './pages/HooksDemo';
import ReduxCounter from './pages/ReduxCounter';
import About from './pages/About';
import Navbar from './components/Navbar';

export default function App(){
  return (
    <div className="min-h-screen">
      <Navbar title="React Concepts Playground" />
      <main className="max-w-4xl mx-auto p-6">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/hooks' element={<HooksDemo/>} />
          <Route path='/redux' element={<ReduxCounter/>} />
          <Route path='/about' element={<About/>} />
        </Routes>
      </main>
    </div>
  );
}
