import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Desktop from './Desktop';
import Mobile from './Mobile';
import { useReducer } from 'react';
import { Context, initialState } from './store/Context';
import { reducer } from './store/reducer';
import { auth } from './firebase';

function DesktopApp({ name }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return (
    <Context.Provider value={value}>
      <Desktop name={name} />
    </Context.Provider>
  );
}

function MobileApp({ name }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return (
    <Context.Provider value={value}>
      <Mobile name={name} />
    </Context.Provider>
  );
}

function App() {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else {
        setUserName('');
      }
    });
  }, []); // Add an empty dependency array to run the effect only once

  function isDesktop() {
    return 800 < window.innerWidth;
  }

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/"
          element={isDesktop() ? <DesktopApp name={userName} /> : <MobileApp name={userName} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
