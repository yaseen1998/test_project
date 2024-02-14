'use client'
import React, { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);
  
    const increment = () => {
      setCount(count + 1);
    };
  
    const decrement = () => {
      setCount(count - 1);
    };
  
    return (
        <div className="max-w-md p-4 mx-auto bg-black border rounded-lg shadow-md">
        <h1>Counter</h1>
        <div className="flex items-center space-x-4">
        <button className="px-3 py-1 text-white bg-blue-500 rounded hover:bg-blue-600" onClick={decrement}>-</button>
        <span className="text-xl">{count}</span>
        <button className="px-3 py-1 text-white bg-blue-500 rounded hover:bg-blue-600" onClick={increment}>+</button>
      </div>
      </div>
    );
  }



