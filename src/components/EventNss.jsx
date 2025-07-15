import React, { useEffect, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './EventNss.css';

const navLinks = [
  { text: 'Home', href: '/' },
  { text: 'About Us', href: '/AboutNss' },
  { text: 'Events', href: '#event' },
  { text: 'Gallery', href: '/GalleryNss' },
  { text: 'Volunteer Hours', href: '/HoursNss' },
  { text: 'Program Officers', href: '/Officers' },
  { text: 'Upcoming Events', href: '/UpcomingEvents' },
  { text: 'Annual Camps', href: '/Camp' },
];

const EventNss = () => {
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

    const links = document.querySelectorAll('.event-nss-container nav a');

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
    <div className="event-nss-container">
       <title>NSS Regular Events</title>
      <header className="event-nss-header">
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
              <a key={idx} href={link.href}>
                {link.text}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main className="event-nss-content" id="event">
        <h1>NSS Events</h1>

        <div className="event">
          <h2>Blood Donation Camp</h2>
          <p>
            The NSS unit has consistently demonstrated its dedication to community service by organizing impactful events that promote social welfare and development. Over 100+ generous donors participate always, contributing to saving countless lives and reinforcing the spirit of compassion and selflessness. The event was seamlessly managed by NSS volunteers, who ensured the smooth operation of the camp in collaboration with healthcare professionals. The collected blood units have already made a meaningful impact in hospitals, aiding patients in need. Join us in saving lives by donating blood.
          </p>
          <p><b>"A single pint of blood can save up to three lives."</b></p>
        </div>

        <div className="event">
          <h2>Beach Cleaning</h2>
          <p>
            The NSS unit has consistently demonstrated its dedication to environmental conservation by organizing impactful events that promote cleanliness and community awareness. These drives have seen the enthusiastic participation of numerous volunteers who actively engaged in cleaning up litter and debris from the beach. Armed with gloves, trash bags, and an unwavering spirit, the volunteers worked tirelessly to restore the natural charm of the shoreline. Through collective efforts, several tons of waste, including plastic, glass, and other pollutants, have been responsibly collected, helping protect marine life.
          </p>
          <p><b>"A clean beach is a happy beach. Let’s keep it that way for generations to come."</b></p>
        </div>

        <div className="event">
          <h2>Road Safety Awareness</h2>
          <p>
            The NSS unit has consistently demonstrated its commitment to public welfare by organizing impactful events that promote awareness and responsible behavior. Among these initiatives, the Road Safety Awareness Campaigns stand out as vital efforts to create safer roads for all. These campaigns witnessed enthusiastic participation from NSS volunteers, who actively engaged in spreading awareness about traffic rules, the importance of wearing helmets and seat belts, and avoiding distracted driving. Volunteers conducted interactive sessions, distributed informative brochures, and organized street plays to effectively convey road safety messages. Through these efforts, the NSS unit successfully reached hundreds of community members, instilling a sense of responsibility and caution among drivers, passengers, and pedestrians alike. The campaign has contributed to fostering a culture of safe and responsible road usage.
          </p>
          <p><b>"Road safety is not just a rule; it's a way of life. Stay safe, stay aware."</b></p>
        </div>

        <div className="event">
          <h2>Self Defense Workshop</h2>
          <p>
            These workshops witnessed enthusiastic participation, where trained instructors guided participants through practical techniques for personal safety. From defensive moves to situational awareness strategies, the sessions were designed to equip both girls and boys with essential self-defence skills that can be applied in real-life situations.
          </p>
          <p>
            Through hands-on training and confidence-building exercises, the workshops empowered girls to feel more secure and self-assured in their daily lives. The NSS unit's initiative not only promoted physical preparedness but also fostered mental strength and courage.
          </p>
          <p><b>"Confidence is your best defence."</b></p>
        </div>

        <div className="event">
          <h2>Cancer Awareness</h2>
          <p>
            Cancer Awareness Campaigns have played a vital role in educating and empowering people about the prevention, early detection, and treatment of cancer. These campaigns witnessed active participation from NSS volunteers, who collaborated with healthcare professionals to conduct informative sessions, distribute educational materials, and organize interactive discussions. Topics such as the importance of regular screenings, early warning signs, lifestyle modifications, and debunking common myths about cancer are covered. Through these efforts, the NSS unit successfully raised awareness among community members, encouraging them to prioritize their health and take preventive measures. The campaign contributed to fostering a culture of proactive health management and early detection.
          </p>
          <p><b>"Knowledge is power, and awareness is the first step to prevention."</b></p>
        </div>

        <div className="event">
          <h2>Youth Day Celebration</h2>
          <p>
            The NSS unit proudly celebrates National Youth Day every year, commemorating the birth anniversary of the great visionary Swami Vivekananda, whose teachings continue to inspire generations. The event serves as a vibrant tribute to the spirit, energy, and potential of the youth in shaping a better society. The celebration typically features motivational talks, cultural performances, and engaging activities aimed at fostering leadership, self-discipline, and national pride among young minds. Inspirational excerpts from Swami Vivekananda's speeches are shared, emphasizing his timeless ideals of courage, character, and dedication to selfless service. Workshops and interactive sessions focus on empowering the youth to embrace their responsibilities as future leaders while maintaining a balance between tradition and modernity. The atmosphere is filled with positivity and enthusiasm, reminding participants of their power to make meaningful changes in the world.
          </p>
          <p><b>Let us be inspired by Swami Vivekananda's words: </b><i>"Arise! Awake! And stop not until the goal is reached."</i></p>
        </div>

        <div className="event">
          <h2>Cloth Donation Drive</h2>
          <p>
            Cloth Donation Drive, where NSS volunteers gather and distribute clothing to those in need, ensuring warmth and comfort during harsh seasons. These drives have been a source of hope for many, as generous donations from students, faculty, and community members provide essential clothing to homeless individuals, orphanages, and low-income families. Volunteers actively collect, sort, and distribute the clothes, ensuring that each item reaches those who need it the most. The drive serves not only as a charitable act but also as an opportunity to raise awareness about the importance of sharing resources and uplifting those in need. Each year, the NSS unit continues to inspire compassion and generosity, reminding participants of the power of small acts of kindness in making a significant difference.
          </p>
          <p><b>"A single act of kindness can warm the hearts of many. Let's spread love, one piece of cloth at a time."</b></p>
        </div>

        <div className="event">
          <h2>Tree Plantation Drive</h2>
          <p>
            Plantation Drive is organized every year to help combat environmental challenges and create a greener, healthier future. These drives have seen enthusiastic participation from NSS volunteers, local residents, and environmental enthusiasts who come together to plant saplings in various public spaces, parks, and community areas. Volunteers take part in not only planting trees but also in educating the community about the importance of trees in maintaining ecological balance, promoting clean air, and preserving biodiversity. The NSS team ensures that the plantation process is followed up with regular care and maintenance, ensuring the saplings grow into healthy, mature trees. Over the years, these efforts have contributed to enhancing local green spaces, reducing carbon footprints, and promoting environmental awareness.
          </p>
          <p><b>"The best time to plant a tree was 20 years ago. The second-best time is now."</b></p>
        </div>
      </main>
    </div>
  );
};

export default EventNss;
