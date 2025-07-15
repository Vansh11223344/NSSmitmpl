import React, { useEffect, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './UpcomingEvents.css';

const navLinks = [
  { text: 'Home', href: '/' },
  { text: 'About Us', href: '/AboutNss' },
  { text: 'Events', href: '/EventNss' },
  { text: 'Gallery', href: '/GalleryNss' },
  { text: 'Volunteer Hours', href: '/HoursNss' },
  { text: 'Program Officers', href: '/Officers' },
  { text: 'Upcoming Events', href: '#upcomingevents' },
  { text: 'Annual Camps', href: '/Camp' },
];

const UpcomingEvents = () => {
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

    const links = document.querySelectorAll('.upcoming-events-container nav a');
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
    <div className="upcoming-events-container">
       <title>Upcoming NSS Events</title>
      <header className="upcoming-header">
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

      <main className="upcoming-main" id="upcomingevents">
        <h1>Upcoming NSS Events</h1>

        <div className="events">
          <h2>Blood Donation Camp</h2>
          <p><strong>Date:</strong> May 5, 2025</p>
          <p><strong>Time:</strong> 10:00 AM – 2:00 PM</p>
          <p><strong>Location:</strong> MIT Food Court Hall</p>
          <p>
            Join us for a life-saving event and contribute to the community by donating blood.
            Certificates and refreshments will be provided.
          </p>
        </div>

        <div className="events">
          <h2>Beach Cleanup Drive</h2>
          <p><strong>Date:</strong> May 12, 2025</p>
          <p><strong>Time:</strong> 6:00 AM – 9:00 AM</p>
          <p><strong>Location:</strong> Malpe Beach, Udupi</p>
          <p>
            Help us restore the beauty of our beaches. Transportation and breakfast will be
            arranged. Don't forget to carry your NSS ID!
          </p>
        </div>

        <div className="events">
          <h2>Tree Plantation Campaign</h2>
          <p><strong>Date:</strong> June 3, 2025</p>
          <p><strong>Time:</strong> 8:00 AM – 11:00 AM</p>
          <p><strong>Location:</strong> MIT Campus Grounds</p>
          <p>
            Support the green cause by participating in our annual plantation drive. Tools and
            saplings will be provided at the venue.
          </p>
        </div>
      </main>
    </div>
  );
};

export default UpcomingEvents;