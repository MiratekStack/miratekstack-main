import React from 'react'
import { Outlet, Link } from "react-router-dom";
import Header from '../components/home/Header'
import Footer from '../components/home/Footer'

const MainLayout = () => {
  return (
    <>
    <Header />
    <div className='overflow-x-hidden'>
    <Outlet />
    </div>
     <Footer />
    </>
  )
}

export default MainLayout