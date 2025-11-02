import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../redux/counterSlice';

export default function ReduxCounter(){
  const count = useSelector(s => s.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Redux Counter</h1>
      <div className="card">
        <p className="text-lg mb-3">Count: <strong>{count}</strong></p>
        <div className="flex gap-2">
          <button onClick={()=> dispatch(increment())} className="px-3 py-1 bg-sky-600 text-white rounded">Increment</button>
          <button onClick={()=> dispatch(decrement())} className="px-3 py-1 bg-amber-500 text-white rounded">Decrement</button>
          <button onClick={()=> dispatch(reset())} className="px-3 py-1 bg-gray-200 rounded">Reset</button>
        </div>
      </div>
    </div>
  );
}
