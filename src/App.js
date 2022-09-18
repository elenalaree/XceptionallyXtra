import React from 'react';

import { Routes, Route } from "react-router-dom";
import './App.css';

import Header from './components/Header';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import About from './pages/About';
import NoMatch from './pages/NoMatch';
import Footer from './components/Footer';

function App() {
  return (

				<div className="flex-column justify-flex-start min-100-vh">
					<Header />
					<div className="container">
						<Routes>
              <Route path="/" element={<About />} />
							<Route path="about" element={<About />} />
							<Route path="portfolio" element={<Portfolio />} />
							<Route path="contact" element={<Contact />} />
							<Route path="resume" element={<Resume />} />
							<Route path="*" element={<NoMatch />} />
						</Routes>
					</div>
					<Footer />
				</div>
			
  );
}

export default App;
