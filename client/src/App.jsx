import { useState, useEffect, useRef } from 'react'
import './App.css'

import { Route, Routes, Navigate } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Experience from './pages/Experience';
import Solution from './pages/Solution';
import Living from './pages/Living';
import AboutUs from './pages/AboutUs';
import CaseStudies from './pages/CaseStudies';
import Contact from './pages/Contact';
import Support from './pages/Support';

import Signin from './pages/Signin';


import MainLayout from './layouts/MainLayout';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('authToken') !== null; 

  if (!isAuthenticated) {
    return <Navigate to="/signin" replace />;
  }

  return children;
}


const PublicRoute = ({ children }) => {
  // const isAuthenticated = localStorage.getItem('authToken');
  const isAuthenticated = false;

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};


function App() {
  return (
   <Routes>
    <Route element={<MainLayout />}>
    <Route path="/" element={<Home />} />
    <Route path="/experience" element={<Experience />} />
    <Route path="/solution" element={<Solution />} />
    <Route path="/living" element={<Living />} />
    <Route path="/aboutus" element={<AboutUs />} />
    <Route path="/casestudies" element={<CaseStudies />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/support" element={<Support />} />
    </Route>
    <Route path='/dashboard' element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
    <Route path='/signin' element={<PublicRoute><Signin /></PublicRoute>} />
    <Route path='*' element={<NotFound />} />
   </Routes>
  );
}

export default App