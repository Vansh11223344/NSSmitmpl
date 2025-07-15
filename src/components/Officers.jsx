import React, { useEffect, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './Officers.css';

const navLinks = [
  { text: 'Home', href: '/' },
  { text: 'About Us', href: '/AboutNss' },
  { text: 'Events', href: '/EventNss' },
  { text: 'Gallery', href: '/GalleryNss' },
  { text: 'Volunteer Hours', href: '/HoursNss' },
  { text: 'Program Officers', href: '#officers' },
  { text: 'Upcoming Events', href: '/UpcomingEvents' },
  { text: 'Annual Camps', href: '/Camp' },
];

const Officers = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Highlight current page link
    const currentPage = window.location.href;
    const links = document.querySelectorAll('.officers-container nav a');
    links.forEach((link) => {
      if (link.href === currentPage) {
        link.style.fontWeight = 'bold';
      }
    });

    // Smooth scrolling for in-page links
    const handleScroll = (e) => {
      const targetId = e.target.getAttribute('href')?.substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        e.preventDefault();
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const closeOnLink = () => setMenuOpen(false);

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
    <div className="officers-container">
       <title>MIT Manipal NSS Program Officers</title>
      <header className="officers-header">
        <div className="logo-container">
          <img src="/images/nsslogo.png" alt="NSS Logo" className="logo-img" />
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

      <div className="officers-profiles" id="officers">
        <div className="profile">
          <img src="/images/MadodiSir.webp" alt="Balakrishna S Maddodi" />
          <h2>Balakrishna S Maddodi</h2>
          <p>Designation: Program Officer</p>
          <p>
            Email:{' '}
            <a href="mailto:bs.maddodi@manipal.edu" className="email-link">
              bs.maddodi@manipal.edu
            </a>
          </p>
        </div>

        <div className="profile">
          <img src="/images/PoornimaMam.webp" alt="Poornima Bhagavath" />
          <h2>Poornima Bhagavath</h2>
          <p>Designation: Program Officer</p>
          <p>
            Email:{' '}
            <a href="mailto:poornima.nayak@manipal.edu" className="email-link">
              poornima.nayak@manipal.edu
            </a>
          </p>
        </div>

        <div className="profile">
          <img src="/images/LaxmanSir.webp" alt="Lakshman Rao S. Paragond" />
          <h2>Lakshman Rao S. Paragond</h2>
          <p>Designation: Program Officer</p>
          <p>
            Email:{' '}
            <a href="mailto:laxman.sp@manipal.edu" className="email-link">
              laxman.sp@manipal.edu
            </a>
          </p>
        </div>

        <div className="profile">
          <img src="/images/MahaShwetaMam.webp" alt="Mahasweta Laskar" />
          <h2>Mahasweta Laskar</h2>
          <p>Designation: Assistant Program Officer</p>
          <p>
            Email:{' '}
            <a href="mailto:mahasweta.laskar@manipal.edu" className="email-link">
              mahasweta.laskar@manipal.edu
            </a>
          </p>
        </div>

        <div className="profile">
          <img src="/images/HarshiniMam.webp" alt="Harshini Dasari" />
          <h2>Harshini Dasari</h2>
          <p>Designation: Assistant Program Officer</p>
          <p>
            Email:{' '}
            <a href="mailto:harshini.dasari@manipal.edu" className="email-link">
              harshini.dasari@manipal.edu
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Officers;