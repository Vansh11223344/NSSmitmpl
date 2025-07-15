import React, { useEffect, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './AboutNss.css';

const navLinks = [
  { text: 'Home', href: '/' },
  { text: 'About Us', href: '#about' },
  { text: 'Events', href: '/EventNss' },
  { text: 'Gallery', href: '/GalleryNss' },
  { text: 'Volunteer Hours', href: '/HoursNss' },
  { text: 'Program Officers', href: '/Officers' },
  { text: 'Upcoming Events', href: '/UpcomingEvents' },
  { text: 'Annual Camps', href: '/Camp' },
];

const AboutNss = () => {
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

    const links = document.querySelectorAll('.about-nss-container nav a');
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
    <div className="about-nss-container">
       <title>About NSS</title>
      <header className="about-header">
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

      <div className="main-content">
        <h1>National Service Scheme (NSS)</h1>
        <p>
          The National Service Scheme (NSS) is a Central Sector Scheme of the Government of India, Ministry of Youth Affairs & Sports. It provides opportunities to students to participate in various government-led community service activities and programs. The aim of NSS is to develop the personality and character of students through community service.
        </p>
        <p>
          NSS volunteers work in rural areas, adopted villages, and urban slums to help improve living conditions and promote sustainable development. The motto of NSS is <strong>"Not Me, But You"</strong>, which reflects the essence of democratic living and the need for selfless service.
        </p>
        <h2 id="about">About NSS</h2>
        <p>
          The National Service Scheme was launched in 1969 to involve students in nation-building activities. It aims to inculcate social welfare in students and provide service to society without bias. NSS volunteers work on issues like literacy, health, environment, and social justice.
        </p>
        <h2>Activities</h2>
        <p>
          NSS organizes various activities such as blood donation camps, tree plantation drives, cleanliness campaigns, and awareness programs on health, hygiene, and education. Volunteers also participate in relief work during natural disasters and emergencies.
        </p>
        <h2 id="contact">Contact Us</h2>
        <p>
          For more information about NSS, you can contact us on any of our social media platforms, your nearest NSS unit, or visit the official website of the Ministry of Youth Affairs & Sports.
        </p>
      </div>
    </div>
  );
};

export default AboutNss;