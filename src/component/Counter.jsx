import { useState } from 'react';
import React from 'react';

export default function Counter({ total, onClick, resetClick }) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div className="counter">
        <span className="number">
          {count}
          <span style={{ fontSize: '2rem' }}>/ {total}</span>{' '}
        </span>
        <button
          className="button"
          onClick={() => {
            setCount((prev) => prev + 1);
            onClick();
          }}
        >
          Add+
        </button>
        <button
          className="button"
          onClick={() => {
            setCount(0);
            resetClick();
          }}
        >
          delete
        </button>
      </div>
    </div>
  );
}
