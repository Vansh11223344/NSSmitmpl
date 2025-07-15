import React, { useEffect, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './HoursNss.css';

const navLinks = [
  { text: 'Home', href: '/' },
  { text: 'About Us', href: '/AboutNss' },
  { text: 'Events', href: '/EventNss' },
  { text: 'Gallery', href: '/GalleryNss' },
  { text: 'Volunteer Hours', href: '/HoursNss' },
  { text: 'Program Officers', href: '/Officers' },
  { text: 'Upcoming Events', href: '/UpcomingEvents' },
  { text: 'Annual Camps', href: '/Camp' },
];

const HoursNss = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let sortDirections = [true, true, true];

    const sortTable = (columnIndex) => {
      const table = document.querySelector('.hours-nss-container table');
      const tbody = table.querySelector('tbody');
      const rows = Array.from(tbody.querySelectorAll('tr'));

      rows.sort((a, b) => {
        const aValue = a.cells[columnIndex].textContent.trim();
        const bValue = b.cells[columnIndex].textContent.trim();

        if (!isNaN(aValue) && !isNaN(bValue)) {
          return sortDirections[columnIndex] ? aValue - bValue : bValue - aValue;
        } else {
          return sortDirections[columnIndex]
            ? aValue.localeCompare(bValue)
            : bValue.localeCompare(aValue);
        }
      });

      sortDirections[columnIndex] = !sortDirections[columnIndex];
      tbody.innerHTML = '';
      rows.forEach((row) => tbody.appendChild(row));
      updateSortIcons(columnIndex);
    };

    const updateSortIcons = (columnIndex) => {
      const icons = document.querySelectorAll('th span');
      icons.forEach((icon, index) => {
        if (index === columnIndex) {
          icon.textContent = sortDirections[columnIndex] ? '↓' : '↑';
        } else {
          icon.textContent = '↕';
        }
      });
    };

    const headers = document.querySelectorAll('th');
    headers.forEach((th, index) => {
      th.addEventListener('click', () => sortTable(index));
    });

    const handleScroll = (e) => {
      const targetId = e.target.getAttribute('href')?.substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        e.preventDefault();
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const closeOnLink = () => setMenuOpen(false);

    const links = document.querySelectorAll('.hours-nss-container nav a');
    links.forEach((link) => {
      link.addEventListener('click', handleScroll);
      link.addEventListener('click', closeOnLink);
    });

    return () => {
      headers.forEach((th, index) => {
        th.removeEventListener('click', () => sortTable(index));
      });
      links.forEach((link) => {
        link.removeEventListener('click', handleScroll);
        link.removeEventListener('click', closeOnLink);
      });
    };
  }, []);

  return (
    <div className="hours-nss-container">
       <title>NSS Volunteer Attendance</title>
      <header className="hours-nss-header">
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

      <div className="attendance-description" id="hours">
        <h2>Attendance</h2>
        <p>
          Within the NSS MAHE MIT Unit 1 and Unit 2, a dedicated group of passionate volunteers stands as the cornerstone of our vibrant community.
          Guided by the wisdom of our Programme Officers and Unit Heads, these two units collectively form an unwavering force for good in society.
          Their commitment, energy, and enthusiasm serve as an inspiration to all, showcasing the true spirit of the <b>National Service Scheme.</b>
        </p>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Name <span id="icon0">↕</span></th>
              <th>Number of Hours <span id="icon1">↕</span></th>
              <th>Rank <span id="icon2">↕</span></th>
            </tr>
          </thead>
          <tbody>
            <tr className="anchor"><td>Sanjana R Adiga</td><td>373</td><td>President(Unit-1)</td></tr>
            <tr className="senior"><td>Santhosh Prabhu</td><td>267</td><td>Volunteer</td></tr>
            <tr className="anchor"><td>Keerthan Kumar</td><td>253</td><td>Volunteer</td></tr>
            <tr className="senior"><td>Debraj Ghosh</td><td>229</td><td>Volunteer</td></tr>
            <tr className="anchor"><td>Pragyaa</td><td>228</td><td>Volunteer</td></tr>
            <tr className="anchor"><td>Pragya Godara</td><td>201</td><td>Volunteer</td></tr>
            <tr className="senior"><td>Pratham Sudheendra</td><td>198</td><td>Volunteer</td></tr>
            <tr className="anchor"><td>Raghav Moorthy</td><td>194</td><td>Volunteer</td></tr>
            <tr className="senior"><td>Aman Shekar</td><td>186</td><td>Volunteer</td></tr>
            <tr className="anchor"><td>Omkar Shanbhag</td><td>183</td><td>Volunteer</td></tr>
            <tr className="senior"><td>Mohit Jangir</td><td>182</td><td>Volunteer</td></tr>
            <tr className="anchor"><td>Adityaraj Singha</td><td>182</td><td>Volunteer</td></tr>
            <tr className="senior"><td>Mahesh Soni</td><td>179</td><td>Volunteer</td></tr>
            <tr className="anchor"><td>Aniket Hazra</td><td>181</td><td>Volunteer</td></tr>
            <tr className="anchor"><td>Sharanya divinraj</td><td>177</td><td>Volunteer</td></tr>
            <tr className="senior"><td>Vishal Vaibhav</td><td>154</td><td>Volunteer</td></tr>
            <tr className="anchor"><td>Shivani Seshadri Iyer</td><td>125</td><td>Volunteer</td></tr>
            <tr className="senior"><td>Yash Sinha</td><td>159</td><td>Volunteer</td></tr>
            <tr className="anchor"><td>Spriha Pant</td><td>159</td><td>Volunteer</td></tr>
            <tr className="anchor"><td>Shruti Priya</td><td>141</td><td>Volunteer</td></tr>
            <tr className="senior"><td>Shravya</td><td>179</td><td>Volunteer</td></tr>
            <tr className="anchor"><td>Samrat Sharma</td><td>120</td><td>Volunteer</td></tr>
            <tr className="senior"><td>Sachi</td><td>102</td><td>Volunteer</td></tr>
            <tr className="anchor"><td>Aman Gupta</td><td>90</td><td>Volunteer</td></tr>
            <tr className="anchor"><td>Ashmit Mediratta</td><td>105</td><td>Volunteer</td></tr>
            <tr className="senior"><td>Nishit Machhi</td><td>89</td><td>Volunteer</td></tr>
            <tr className="anchor"><td>Krishnapriya k Binnoy</td><td>91</td><td>Volunteer</td></tr>
            <tr className="senior"><td>Omkar Prabhu</td><td>106</td><td>Volunteer</td></tr>
            <tr className="anchor"><td>Sarvagya</td><td>103</td><td>Volunteer</td></tr>
            <tr className="anchor"><td>Shreya Talari</td><td>85</td><td>Volunteer</td></tr>
            <tr className="senior"><td>Sanjana KM</td><td>79</td><td>Volunteer</td></tr>
            <tr className="anchor"><td>Gaurav Gupta</td><td>91</td><td>Volunteer</td></tr>
            <tr className="senior"><td>Tinu Kumar Saini</td><td>113</td><td>President(Unit-2)</td></tr>
            <tr className="anchor"><td>Bhavesh Gupta</td><td>90</td><td>Volunteer</td></tr>
            <tr className="anchor"><td>Daivik S Gokhale</td><td>86</td><td>Volunteer</td></tr>
            <tr className="senior"><td>Prashast Saxena</td><td>96</td><td>Volunteer</td></tr>
            <tr className="anchor"><td>Ishan Suhas Deshmukh</td><td>70</td><td>Volunteer</td></tr>
            <tr className="senior"><td>Sanjana Virmani</td><td>99</td><td>Volunteer</td></tr>
            <tr className="anchor"><td>J Anish Babu</td><td>87</td><td>Volunteer</td></tr>
            <tr className="senior"><td>Prakhar Dwidevi</td><td>99</td><td>Volunteer</td></tr>
            <tr className="anchor"><td>Soham Sadhukar</td><td>70</td><td>Volunteer</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HoursNss;