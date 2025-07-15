import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutNss from './components/AboutNss';
import Camp from './components/Camp';
import EventNss from './components/EventNss';
import GalleryNss from './components/GalleryNss';
import Home from './components/Home';
import HoursNss from './components/HoursNss';
import Officers from './components/Officers';
import UpcomingEvents from './components/UpcomingEvents';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutNss" element={<AboutNss />} />
        <Route path="/Camp" element={<Camp />} />
        <Route path="/EventNss" element={<EventNss />} />
        <Route path="/GalleryNss" element={<GalleryNss />} />
        <Route path="/HoursNss" element={<HoursNss />} />
        <Route path="/Officers" element={<Officers />} />
        <Route path="/UpcomingEvents" element={<UpcomingEvents />} />
      </Routes>
    </Router>
  );
}

export default App;