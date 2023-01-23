import React from 'react'
import { useEffect, useState } from 'react';
import Clock from './components/Clock';


function App() {
  const [showClowk, setShocClowk] = useState(true);

 
  return ( 
  <>
  <button onClick={() => setShocClowk(!showClowk)}>Afficher Heure</button>
  {showClowk && <Clock />}
  </>
  )
  }
export default App
