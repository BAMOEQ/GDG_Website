import React, { useEffect, useRef } from 'react';
import './Footer.scss';
import { FaInstagram, FaYoutube, FaTwitter, FaLinkedin, FaGoogle } from 'react-icons/fa';

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const footer = footerRef.current;
    const handleScroll = () => {
      const footerTop = footer.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (footerTop < windowHeight) {
        footer.classList.add('visible');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer ref={footerRef} className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <img src="https://www.svgrepo.com/show/353810/google-developers.svg" alt="Google Developers Group Logo" />
          <h4>Google Developers Group</h4>
          <p>GDG @ New York University</p>
        </div>
        <div className="footer-center">
          <p> <a href="/about">About Us</a></p>
          <p> <a href="/ourteam">Our Team</a></p>
          <p> <a href="/events">Events</a></p>
          <p><a href="/projects">Projects</a></p>
          <p><a href="/contact">Contact</a></p>
        </div>
        <div className="footer-right">
          <a href="https://developers.google.com/">
            <FaGoogle size={30} />
          </a>
          <a href="https://www.instagram.com/gdg_nyu/">
            <FaInstagram size={30} />
          </a>
          <a href="https://www.youtube.com/gdgs">
            <FaYoutube size={30} />
          </a>
          <a href="https://x.com/googledevgroups">
            <FaTwitter size={30} />
          </a>
          <a href="https://www.linkedin.com/company/google-developer-groups-nyu/">
            <FaLinkedin size={30} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
