import React, { useState } from 'react';


const DynamicDiv = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <div>
      <button onClick={handleIncrement}>Incrementar</button>
      <div>
        {count > 0 && (
          <div className="my-div">
            <p>Contador: {count}</p>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DynamicDiv;
