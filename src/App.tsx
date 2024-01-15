import React, { useEffect } from 'react';
import { Router } from './router/Router';

function App() {
  useEffect(() => {
    document.title = 'Alenso Lopes | Portfolio';
  }, []);
  return (
    <Router />
  );
}

export default App;
