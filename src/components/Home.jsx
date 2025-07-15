import React, { useEffect, useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './Home.css';

const navLinks = [
  { text: 'Home', href: '#home' },
  { text: 'About Us', href: './Aboutnss' },
  { text: 'Events', href: './EventNss' },
  { text: 'Gallery', href: './GalleryNss' },
  { text: 'Contact Us', href: '#contact' },
  { text: 'Volunteer Hours', href: './HoursNss' },
  { text: 'Program Officers', href: './Officers' },
  { text: 'Upcoming Events', href: './UpcomingEvents' },
  { text: 'Annual Camps', href: './Camp' },
];

const slides = [
  {
    image: '/images/frontpost.jpg',
    title: 'Welcome to the National Service Scheme',
    text: 'Join us in making a difference in the community.',
  },
  {
    image: '/images/DSC_2n3Year.webp',
    title: 'Upcoming Events',
    text: 'Check out our latest events and participate.',
  },
  {
    image: '/images/DSC_3rdYear.webp',
    title: 'Volunteer Today',
    text: 'Contribute your time and skills to the community.',
  },
];

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(autoSlide);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    const closeOnLink = () => setMenuOpen(false);
    const links = document.querySelectorAll('.home-container nav a');
    links.forEach((link) => link.addEventListener('click', closeOnLink));
    return () =>
      links.forEach((link) => link.removeEventListener('click', closeOnLink));
  }, [menuOpen]);

  return (
    <div className="home-container">
      <header>
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
          <ul>
            {navLinks.map((link, idx) => (
              <li key={idx}>
                <a href={link.href}>{link.text}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <section id="home" className="hero">
        <div className="slider">
          <div className="slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {slides.map((slide, idx) => (
              <div
                className={`slide${idx === currentSlide ? ' active' : ''}`}
                style={{ backgroundImage: `url(${slide.image})` }}
                key={idx}
              >
                <div className="text-content">
                  <h1>{slide.title}</h1>
                  <p>{slide.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          className="prev"
          onClick={() =>
            setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
          }
          aria-label="Previous Slide"
        >
          ❮
        </button>
        <button
          className="next"
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          aria-label="Next Slide"
        >
          ❯
        </button>
      </section>

      <section id="aboutnss">
        <div className="text-container">
          <h1>About NSS ("Not Me, But You")</h1>
          <p>
            The National Service Scheme (NSS) is a Central Sector Scheme of the Government of India, Ministry of Youth Affairs & Sports. It provides opportunities to students to participate in various government-led community service activities and programs.{' '}
            <a href="/AboutNss">
              <b>Read More</b>
            </a>
          </p>
        </div>
        <div className="blog-container"></div>
      </section>

      <section id="events">
        <h1>Events</h1>
        <p>
          The NSS actively hosts various social events, including community service drives, awareness campaigns, and environmental initiatives, fostering social responsibility and leadership among participants.{' '}
          <a href="/EventNss" target="_blank" rel="noopener noreferrer">
            <b>Click for more...</b>
          </a>
        </p>
        <div className="event-container"></div>
      </section>

      <section id="gallery">
        <h2>Gallery</h2>
        <p>
          <a href="/GalleryNss" target="_blank" rel="noopener noreferrer">
            <b>Click for more...</b>
          </a>
        </p>
        <div className="gallery-container">
          <img src="/images/DSC_2n3Year.webp" alt="Event 1" />
          <img src="/images/DSC_2ndYear.webp" alt="Event 2" />
          <img src="/images/DSC_3rdYear.webp" alt="Event 3" />
        </div>
      </section>

      <section id="contact">
        <h1>Contact Us</h1>
        <p>
          Email: <a href="mailto:nss.mit@manipal.edu">nss.mit@manipal.edu</a>
        </p>
        <p>
          Email (Program Officer):<br />
          <a href="mailto:bs.maddodi@manipal.edu" className="email-link">
            bs.maddodi@manipal.edu
          </a>
        </p>
        <p>
          Phone: <a href="tel:9448229591">94482 29591</a>
        </p>
        <p>
          Email (President):<br />
          <a href="mailto:deepuchourasia41@gmail.com" className="email-link">
            deepuchourasia41@gmail.com
          </a>
        </p>
      </section>

      <section id="volunteer">
        <h1>Volunteer Hours</h1>
        <p>
          <a href="/HoursNss" target="_blank" rel="noopener noreferrer">
            <b>Attendance (2022-2024)...</b>
          </a>
        </p>
        <div className="volunteer-container"></div>
      </section>

      <section id="officers">
        <h1>
          <b>Program Officers</b>
        </h1>
        <p>
          <b>NSS Manipal</b> is guided by five dedicated program officers who play a pivotal role in organizing impactful initiatives, fostering student development, and driving positive change in the community.{' '}
          <a href="/Officers" target="_blank" rel="noopener noreferrer">
            <b>Click for more...</b>
          </a>
        </p>
        <div className="officer-container"></div>
      </section>

      <section id="camp">
        <h1>
          <b>Annual Camps</b>
        </h1>
        <p>
          <b>NSS Manipal</b> organizes enriching Summer and Winter Camps every year after semester-end, offering students unique opportunities for personal growth and community engagement. These camps foster teamwork, social awareness, and practical learning experiences beyond the classroom.{' '}
          <a href="/Camp" target="_blank" rel="noopener noreferrer">
            Click for more...
          </a>
        </p>
        <div className="officer-container"></div>
      </section>

      <section id="upcomingevents">
        <h1>
          <b>Upcoming Events</b>
        </h1>
        <p>
          <b>NSS Manipal</b> is excited to announce a series of upcoming events aimed at community service, student engagement, and social impact—stay tuned and be part of the change!{' '}
          <a href="/UpcomingEvents" target="_blank" rel="noopener noreferrer">
            <b>Click for more...</b>
          </a>
        </p>
        <div className="officer-container"></div>
      </section>

      <footer className="home-footer">
        <div className="social-media">
          <a
            href="https://www.instagram.com/nss.mit.mahe"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="footer-social-link"
          >
            <img src="/images/instalogo.png" alt="Instagram" className="footer-social-img" />
          </a>
          <a
            href="https://www.linkedin.com/in/mahe-mit-nss-units-manipal-075378274"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="footer-social-link"
          >
            <img src="/images/linkedinlogo.jpg" alt="LinkedIn" className="footer-social-img" />
          </a>
          <a
            href="https://www.manipal.edu/mit.html"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Home"
            className="footer-social-link"
          >
            <HomeIcon className="footer-social-icon" />
          </a>
          <a
            href="https://nss.gov.in/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="NSS"
            className="footer-social-link"
          >
            <img src="/images/nsslogo.png" alt="NSS Logo" className="footer-social-img" />
          </a>
        </div>
        <p className="copyright">
          © 2025 National Service Scheme. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;