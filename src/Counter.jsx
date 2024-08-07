import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [incrementValue, setIncrementValue] = useState(1);

  const handleIncrement = () => {
    setCount(count + parseInt(incrementValue, 10));
  };

  const handleDecrement = () => {
    setCount(count - parseInt(incrementValue, 10));
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">
        Counter: <span id="count">{count}</span>
      </h1>
      <input
        type="number"
        id="incrementValue"
        value={incrementValue}
        onChange={(e) => setIncrementValue(e.target.value)}
        className="mb-4 p-2 border rounded"
      />
      <div className="flex space-x-4">
        <button
          onClick={handleIncrement}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Increment
        </button>
        <button
          onClick={handleDecrement}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Decrement
        </button>
        <button
          onClick={handleReset}
          className="px-4 py-2 bg-gray-500 text-white rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
