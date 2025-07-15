import React, { useEffect, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './GalleryNss.css';

const navLinks = [
  { text: 'Home', href: '/' },
  { text: 'About Us', href: '/AboutNss' },
  { text: 'Events', href: '/EventNss' },
  { text: 'Gallery', href: '#gallery' },
  { text: 'Volunteer Hours', href: '/HoursNss' },
  { text: 'Program Officers', href: '/Officers' },
  { text: 'Upcoming Events', href: '/UpcomingEvents' },
  { text: 'Annual Camps', href: '/Camp' },
];

const GalleryNss = () => {
  const [activeImage, setActiveImage] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const openImage = (src, alt) => {
    setActiveImage({ src, alt });
  };

  const closeImage = () => {
    setActiveImage(null);
  };

  const images = Array.from({ length: 22 }, (_, index) => ({
    src: `/images/pic${index + 1}.jpg`,
    alt: `NSS Event Image ${index + 1}`,
  }));

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

    const links = document.querySelectorAll('.gallery-nss-container nav a');
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
    <div className="gallery-nss-container">
       <title>NSS Gallery</title>
      <header className="gallery-nss-header">
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

      <div className="page-description" id="gallery">
        <p>
          A glimpse of activities conducted by the NSS showcasing participation,
          community events, and awareness campaigns.
        </p>
      </div>

      <div className="image-grid">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img.src}
            alt={img.alt}
            onClick={() => openImage(img.src, img.alt)}
          />
        ))}
      </div>

      {activeImage && (
        <div className="overlay" onClick={closeImage}>
          <span className="close-btn" onClick={closeImage}>
            ×
          </span>
          <img src={activeImage.src} alt={activeImage.alt} className="fullscreen-image" />
        </div>
      )}
    </div>
  );
};

export default GalleryNss;