import React, { useEffect } from 'react';
import { Outlet, useLocation } from "react-router-dom"; 
import Header from '../components/home/Header';
import Footer from '../components/home/Footer';

const MainLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]); // Add pathname as a dependency

  return (
    <>
      <Header />
      
      <div className='overflow-x-hidden'>
        <Outlet />
      </div>
      
      <Footer />
    </>
  );
};

export default MainLayout;