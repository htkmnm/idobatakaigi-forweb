import React, { useState } from 'react';
import './App.css';
import Login from './pages/Login';
import Main from './pages/Main';

function App() {
  const [name, setName] = useState('')

  if (name.length === 0) {
    return <Login setName={setName} />
  } else {
    return <Main name={name} />
  };
};

export default App;