import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from './pages/landing/Home'
import Services from './pages/landing/Services'
import Contact from './pages/landing/Contact'
import About from './pages/landing/About';
import UserRegister from './pages/auth/user/UserRegister';
import UserLogin from './pages/auth/user/UserLogin';
import UserDashboard from './pages/auth/user/UserDashboard'
import SelectionAuth from './pages/auth/SelectionAuth';
import LawyerRegister from './pages/auth/lawyer/LawyerRegister';
import LawyerLogin from './pages/auth/lawyer/LawyerLogin';
import LawyerDashboard from './pages/auth/lawyer/LawyerDashboard';
import AdminLogin from './pages/auth/admin/AdminLogin';
import AdminDashboard from './pages/auth/admin/AdminDashboard';
import PrivacyPolicy from './pages/landing/PrivacyPolicy';
import PageNotFound from './pages/landing/PageNotFound';
import TermsAndConditions from './pages/landing/TermsAndConditions';

import './App.css'

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            
            {/* for everyone */}
            <Route path="" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="contact" element={<Contact />} />
            <Route path="selectionAuth" element={<SelectionAuth />} />
            <Route path="privacyPolicy" element={<PrivacyPolicy />} />
            <Route path="termsAndConditions" element={<TermsAndConditions />} />


            {/* for user module */}
            <Route path="userRegister" element={<UserRegister />} />
            <Route path="userLogin" element={<UserLogin />} />
            <Route path="userDashboard" element={<UserDashboard />} />

            {/* for lawyer module */}
            <Route path="lawyerRegister" element={<LawyerRegister />} />
            <Route path="lawyerLogin" element={<LawyerLogin />} />
            <Route path="lawyerDashboard" element={<LawyerDashboard />} />

            {/* for admin module */}
            <Route path="adminLogin" element={<AdminLogin />} />
            <Route path="adminDashboard" element={<AdminDashboard />} />

            {/* for 404 page not found */}
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
