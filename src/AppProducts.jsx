import React, { useState } from 'react';
import './App.css';
import Products from './component/Products';

export default function AppProducts() {
  const [showProducts, setShowProducts] = useState(true);

  return (
    <div>
      {showProducts && <Products />}
      <button onClick={() => setShowProducts((show) => !show)}>
        toggle버튼 멋져!
      </button>
    </div>
  );
}
