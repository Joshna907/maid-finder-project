import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import BasicInfoForm from "./component/BasicInfoForm";
import SearchPage from "./pages/SearchPage";
import Profile from "./pages/Profile";
import About from "./component/About";
import HowItWorks from "./component/HowItWorks";
import Contact from "./pages/Contact";
import AgreementPage from "./pages/AgreementPage ";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
       <Route path="/agreement" element={<AgreementPage />} />

        <Route path="/info" element={<BasicInfoForm />} />
        <Route path="/searchmaid" element={<SearchPage />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={< HowItWorks/>} />
        <Route path="/contactus" element={< Contact/>} />
      

      </Routes>
    </Router>
  );
};

export default App;
