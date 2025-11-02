import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavLink = ({to, children})=>{
  const loc = useLocation();
  const active = loc.pathname === to;
  return (
    <Link to={to} className={(active? 'text-white bg-sky-600':'text-sky-600') + ' px-3 py-2 rounded-md'}>
      {children}
    </Link>
  );
};

export default function Navbar({title}) {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-4xl mx-auto p-4 flex items-center justify-between">
        <div className="text-xl font-semibold text-slate-700">{title}</div>
        <nav className="space-x-2">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/hooks">Hooks Demo</NavLink>
          <NavLink to="/redux">Redux Counter</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </div>
    </header>
  );
}
