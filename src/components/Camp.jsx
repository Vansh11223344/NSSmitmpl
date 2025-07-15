import React, { useEffect, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './Camp.css';

const navLinks = [
  { text: 'Home', href: '/' },
  { text: 'About Us', href: '/AboutNss' },
  { text: 'Events', href: '/EventNss' },
  { text: 'Gallery', href: '/GalleryNss' },
  { text: 'Volunteer Hours', href: '#volunteerHours' },
  { text: 'Program Officers', href: '/Officers' },
  { text: 'Upcoming Events', href: '/UpcomingEvents' },
  { text: 'Annual Camps', href: '#camp' },
];

const Camp = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = (e) => {
      const targetId = e.target.getAttribute('href')?.substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        e.preventDefault();
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const closeOnLink = () => setMenuOpen(false);

    const links = document.querySelectorAll('.camp-container nav a');
    links.forEach((link) => {
      link.addEventListener('click', handleScroll);
      link.addEventListener('click', closeOnLink);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener('click', handleScroll);
        link.removeEventListener('click', closeOnLink);
      });
    };
  }, []);

  return (
    <div className="camp-container">
       <title>NSS Camps</title>
      <header className="camp-header">
        <div className="logo-container">
          <img src="/images/nsslogo.webp" alt="NSS Logo" className="logo-img" />
          <div className="logo-text">
            <h1 className="logo-title">National Service Scheme</h1>
            <p className="logo-subtitle">Empowering Communities, Inspiring Change</p>
          </div>
        </div>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((m) => !m)}
          aria-label="Menu"
        >
          {menuOpen ? <CloseIcon fontSize="inherit" /> : <MenuIcon fontSize="inherit" />}
        </button>
        <nav className={menuOpen ? 'active' : ''}>
          <div className="nav-links">
            {navLinks.map((link, idx) => (
              <a key={idx} href={link.href} id={link.text.toLowerCase().replace(/\s+/g, '')}>
                {link.text}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main className="camp-content">
        <h1 id="camp">About NSS Camps</h1>
        <p>
          <b>NSS MAHE MIT</b> organizes enriching camps at the end of both summer and winter semesters, providing students
          with unique opportunities for personal growth and community service. These camps offer a diverse range of
          experiences, from environmental conservation and rural development to health awareness and educational support.
          Volunteers immerse themselves in hands-on activities, building leadership, teamwork, and problem-solving skills
          while making a meaningful impact on society. These camps not only enhance the students’ social responsibility but
          also foster lasting friendships and memories. Through these experiences, NSS MAHE MIT continues to cultivate well-rounded
          individuals who are equipped to contribute positively to society.
        </p>
        <div className="camp-link-wrapper">
          <a
            href="/images/December2024.docx"
            target="_blank"
            rel="noopener noreferrer"
            className="camp-link"
          >
            <b>Winter Camp(2024) report...</b>
          </a>
        </div>
        <div id="volunteerHours" className="volunteer-container"></div>
        <div id="contact" className="contact-container">
        
          <p>
            For more information about NSS camps, contact us via our social media platforms or the official NSS MAHE MIT
            website.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Camp;