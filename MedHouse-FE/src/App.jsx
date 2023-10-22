import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Services from "./Pages/ServicesPage/Services";
import Accommodation from "./Pages/Accommodations/Accommodation";
import AccommodationForm from "./Pages/Accommodations/Form/Form";
import SignInUpPage from "./Pages/Sign-in-up/SignInUpPage";
import Cleaning from "./Pages/ServicesPage/Forms/Cleaning";
import Medical from "./Pages/ServicesPage/Forms/Medical";
import Clearance from "./Pages/ServicesPage/Forms/Clearance";
import Mentoring from "./Pages/ServicesPage/Forms/Mentoring";
import Leave from "./Pages/ServicesPage/Forms/Leave";
import RoomInquire from "./Pages/Accommodations/DetailPage/RoomInquire";
import AdminDashboard from "./Pages/Admin/AdminDashboard";

function App() {
  return (
    <Router>
      <Navbar /> {/* Render Navbar on all pages */}
      <Routes>
        <Route path="/" element={<SignInUpPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/accommodation" element={<Accommodation />} />
        <Route path="/accommodation/form" element={<AccommodationForm />} />
        <Route path="/accommodation/inquire" element={<RoomInquire />} />
        <Route path="/services/Cleaning" element={<Cleaning />} />
        <Route path="/services/Medical" element={<Medical />} />
        <Route path="/services/Clearance" element={<Clearance />} />
        <Route path="/services/Mentoring" element={<Mentoring />} />
        <Route path="/services/Leave" element={<Leave />} />
        <Route path="/adminpage" element={<AdminDashboard />} />
      </Routes>
      <Footer /> {/* Render Footer on all pages */}
    </Router>
  );
}

export default App;
