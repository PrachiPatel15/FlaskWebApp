import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FrontPage from './FrontPage';
import OTPPage from './OTPPage';
import TermsAndConditions from './TermsAndConditions';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/otp" element={<OTPPage />} />
      </Routes>
    </Router>
  );
};

export default App;
