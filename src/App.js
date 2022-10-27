import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import PageTemplate from './pages/PageTemplate';
import Booking from './pages/BookNow';
import PrivacyPolicy from './pages/PrivacyPolicy';
import AccessibilityStatement from './pages/AccessibilityStatement';
import TermsOfUse from './pages/TermsOfUse';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate replace to="/appliance-repair" />} />

      <Route path="/:slug" element={<PageTemplate />} />
      <Route path="/book-now" element={<Booking />} />

      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/accessibility-statement" element={<AccessibilityStatement />} />
      <Route path="/terms-of-use" element={<TermsOfUse />} />

      <Route path="*" element={<Navigate replace to="/404" />} />
    </Routes>
  </BrowserRouter>
);

export default App;
