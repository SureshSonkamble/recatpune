import React from 'react';
import './Footer.css'; // for custom styles


const Footer = () => {
  return (
    <footer className="footer bg-dark text-white pt-5">
      <div className="container">
        <div className="row">

          {/* About */}
          <div className="col-md-3 mb-4">
            <h3 className="footer-brand mb-3">
              <strong>Humming</strong><span className="text-success">Byte</span>
            </h3>
            <p>
              Humming Byte is a technology services Company helping businesses drive their digital transformation journey.
              Over the years, Humming Byte has evolved as a reliable and successful technology partner to provide comprehensive Information Technology Solutions.
            </p>
            <div className="footer-social mt-3">
              {/* <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedinIn /></a> */}
            </div>
          </div>

          {/* Short Links */}
          <div className="col-md-3 mb-4">
            <h5 className="text-success">Short Link</h5>
            <ul className="list-unstyled">
              <li><a href="#">About us</a></li>
              <li><a href="#">Contact us</a></li>
              <li><a href="#">Our Services</a></li>
              <li><a href="#">Our Projects</a></li>
              <li><a href="#">Latest Blog</a></li>
            </ul>
          </div>

          {/* Help Links */}
          <div className="col-md-3 mb-4">
            <h5 className="text-success">Help Link</h5>
            <ul className="list-unstyled">
              <li><a href="#">Terms Of use</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Helps</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="col-md-3 mb-4">
            <h5 className="text-success">Contact Us</h5>
            <p> Collage Road Nashik - 422005, Maharashtra, INDIA</p>
            <p> +91 8485070453</p>
            <p> info@hmbyte.com</p>
          </div>

        </div>
        
        {/* Footer Bottom */}
        <div className="text-center py-3 mt-4 border-top border-secondary">
          <p className="mb-0">
            <span className="text-success">© Humming Byte Technology Pvt. Ltd</span>, All rights reserved.
            <br />
            Designed By <span className="text-success">Humming Byte Technology Pvt. Ltd</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
