import React, { useState, useEffect, useRef, useMemo, useCallback, createContext, useContext } from 'react';

const ThemeContext = createContext('light');

const Display = ({value})=> <div className="p-3 bg-slate-100 rounded">{value}</div>;

function Expensive({num}){
  const val = useMemo(()=> {
    let s=0; for(let i=0;i<100000;i++) s += i*num;
    return s;
  }, [num]);
  return <div>Expensive result: {val}</div>;
}

export default function HooksDemo(){
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const inputRef = useRef(null);
  const theme = useContext(ThemeContext);

  useEffect(()=> {
    document.title = `Count: ${count}`;
  }, [count]);

  const inc = useCallback(()=> setCount(c=>c+1), []);
  const squared = useMemo(()=> count*count, [count]);

  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <h1 className="text-2xl font-bold mb-4">Hooks Playground</h1>

        <div className="card mb-4">
          <h3 className="font-semibold">useState & useEffect</h3>
          <p className="mb-2">Count: {count}</p>
          <div className="flex gap-2">
            <button onClick={inc} className="px-3 py-1 bg-sky-600 text-white rounded">Increment</button>
            <button onClick={()=> setCount(0)} className="px-3 py-1 bg-gray-200 rounded">Reset</button>
          </div>
        </div>

        <div className="card mb-4">
          <h3 className="font-semibold">useRef</h3>
          <input ref={inputRef} value={name} onChange={e=>setName(e.target.value)} placeholder="Type name" className="border p-2 rounded w-full mb-2"/>
          <div className="flex gap-2">
            <button onClick={()=> inputRef.current.focus()} className="px-3 py-1 bg-sky-600 text-white rounded">Focus</button>
            <button onClick={()=> setName('')} className="px-3 py-1 bg-gray-200 rounded">Clear</button>
          </div>
          <p className="mt-2">Typed: <strong>{name}</strong></p>
        </div>

        <div className="card mb-4">
          <h3 className="font-semibold">useMemo & useCallback</h3>
          <p>Squared: {squared}</p>
          <Expensive num={count}/>
          <button onClick={()=> setCount(c=>c+1)} className="mt-2 px-3 py-1 bg-sky-600 text-white rounded">Add</button>
        </div>

        <div className="card">
          <h3 className="font-semibold">useContext (Theme)</h3>
          <Display value={`Current theme: ${theme}`}/>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}
