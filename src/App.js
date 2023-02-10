import React, { useState, useEffect } from 'react';
import './App.css';
import calculate from './logic/calculate';
import Display from './components/Display';
import ButtonPanel from './components/ButtonPanel';

// eslint-disable-next-line react/prefer-stateless-function
const App = () => {
  const [totals, setTotals] = useState({});
  //const [output, setOutput]=useState('')
  useEffect(() => {
    setTotals({
      total: null,
      next: null,
      operation: null,
      output : null,
    });
  }, []);

  const handleClick = (event) => {
    setTotals(calculate(totals, event.target.textContent));
  };
  
  return (
    <div>
      <div className="calculator-container">
      <Display status={totals} />
      <ButtonPanel grantParentHandleState={handleClick}/>
      </div>
    </div>
  );
};
 
export default App;
