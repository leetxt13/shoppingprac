import React, { useState } from 'react';
import './AppXY.css';

export default function AppXY() {
  //   const [x, setX] = useState(0);
  //   const [y, setY] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0, z: 0 });

  return (
    <div
      className="container"
      onMouseMove={(e) => {
        console.log(e.clientX, e.clientY);
        setPosition((prev) => ({ ...prev, x: e.clientX, y: e.clientY }));
        // 수평으로만 이동가능하게 하려면?
      }}
    >
      <div
        className="pointer"
        style={{ transform: `translate(${position.x}px,${position.y}px)` }}
      ></div>
    </div>
  );
}
