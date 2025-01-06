import React from 'react';
import './App.css';
import Counter from '../component/Counter';
import { useState } from 'react';
export default function AppCounter() {
  const [count, setCount] = useState(0);
  const handleClick = () => setCount((prev) => prev + 1);
  const resetClick = () => setCount(0);
  return (
    <div className="container">
      <div className="banner">
        Total Count : {count} {count > 10 ? '💥' : '❄'}
      </div>
      <div className="counters">
        <Counter total={count} onClick={handleClick} resetClick={resetClick} />
        <Counter total={count} onClick={handleClick} resetClick={resetClick} />
      </div>
    </div>
  );
}
