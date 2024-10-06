import React from 'react';

const Footer = () => {
  return (
    <footer className=" text-black py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">ritu singh </h3>
            <p className=" font-semibold mb-4">1234 Street Address, City, State, 12345</p>
            <p className=" font-semibold mb-4">Phone: (123) 456-7890</p>
            <p className=" font-semibold">Email: info@company.com</p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400 ">Home</a></li>
              <li><a href="#" className="hover:text-gray-400 ">About</a></li>
              <li><a href="#" className="hover:text-gray-400 ">Services</a></li>
              <li><a href="#" className="hover:text-gray-400 ">Contact</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-black hover:text-gray-300">
                <i className="fab fa-facebook-f"></i> Facebook
              </a>
              <a href="#" className="text-black hover:text-gray-300">
                <i className="fab fa-twitter"></i> Twitter
              </a>
              <a href="#" className="text-black hover:text-gray-300">
                <i className="fab fa-instagram"></i> Instagram
              </a>
              <a href="#" className="text-black hover:text-gray-300">
                <i className="fab fa-linkedin-in"></i> LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p className="text-sm">&copy; ritu sing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
