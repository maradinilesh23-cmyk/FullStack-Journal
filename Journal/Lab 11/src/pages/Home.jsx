import React from 'react';
import { Link } from 'react-router-dom';

const ExampleCard = ({title, children, to})=>(
  <div className="card mb-4">
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <div className="mb-3">{children}</div>
    {to && <Link to={to} className="inline-block text-sky-600">Open →</Link>}
  </div>
);

export default function Home(){
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Overview</h1>
      <ExampleCard title="Components, Props & State" to="/">
        Small interactive components show props and state.
      </ExampleCard>
      <ExampleCard title="Hooks Demo" to="/hooks">
        Explore useState, useEffect, useRef, useMemo and useCallback.
      </ExampleCard>
      <ExampleCard title="Redux Counter" to="/redux">
        Global state management example with dispatch actions.
      </ExampleCard>
      <ExampleCard title="About" to="/about">
        Short notes and lab instructions.
      </ExampleCard>
    </div>
  );
}
