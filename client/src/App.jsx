import { useState, useEffect, useRef } from 'react'
import './App.css'

import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Signin from './pages/Signin';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('authToken') !== null; 

  if (!isAuthenticated) {
    return <Navigate to="/signin" replace />;
  }

  return children;
}


const PublicRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('authToken');

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};


function App() {
  return (
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/dashboard' element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
    <Route path='/signin' element={<PublicRoute><Signin /></PublicRoute>} />
    <Route path='*' element={<NotFound />} />
   </Routes>
  );
}

export default App