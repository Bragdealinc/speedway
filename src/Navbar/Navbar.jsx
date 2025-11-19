import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const speedwayLogoWhite = "/white-colore-logo.png";


const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavigate = (path) => {
    return (e) => {
      e.preventDefault();
      setIsMobileMenuOpen(false);
      navigate(path);
      
      if (path === "/" || path === "/about" || path === "/contact") {
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }, 100);
      }
    };
  };

  const handleNavigateCommunities = () => {
    setIsMobileMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById("communities-section")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById("communities-section")?.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <>
      <div className="h-16 md:h-20 max-w-7xl mx-auto "></div>
      <nav className=" fixed top-0 left-0 right-0 z-50 bg-gray-900 shadow-lg transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <div 
              className="flex items-center cursor-pointer"
              onClick={handleNavigate("/")}
            >
              <img
                src={speedwayLogoWhite}
                alt="Speedway Homes"
                className="h-[170px] w-[200px] mt-4 lg:ml-[-55px] ml-[-30px]"
              />
           
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="/"
                onClick={handleNavigate("/")}
                className="text-sm font-medium text-white transition-colors duration-300 hover:text-green-400"
              >
                Home
              </a>
              <a
                href="#"
                onClick={handleNavigateCommunities}
                className="text-sm font-medium text-white transition-colors duration-300 hover:text-green-400"
              >
                Communities
              </a>
              <a
                href="/about"
                onClick={handleNavigate("/about")}
                className="text-sm font-medium text-white transition-colors duration-300 hover:text-green-400"
              >
                About
              </a>
              <a
                href="/contact"
                onClick={handleNavigate("/contact")}
                className="text-sm font-medium text-white transition-colors duration-300 hover:text-green-400"
              >
                Contact
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-white hover:bg-white/10 transition-colors duration-300"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ${
          isMobileMenuOpen 
            ? 'max-h-64 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="bg-white shadow-lg">
            <div className="px-4 py-2 space-y-1">
              <a
                href="/"
                onClick={handleNavigate("/")}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md transition-colors duration-300"
              >
                Home
              </a>
              <a
                href="#"
                onClick={handleNavigateCommunities}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md transition-colors duration-300"
              >
                Communities
              </a>
              <a
                href="/about"
                onClick={handleNavigate("/about")}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md transition-colors duration-300"
              >
                About
              </a>
              <a
                href="/contact"
                onClick={handleNavigate("/contact")}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md transition-colors duration-300"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
