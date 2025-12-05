import { useNavigate, useLocation } from "react-router-dom";

const speedwayLogoWhite = "/white-colore-logo.png";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollToTop = (path) => (event) => {
    event.preventDefault();
    navigate(path);
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 150);
  };

  const handleSpeedwayHomesClick = () => {
    navigate("/login");
  };

  const scrollToCommunitiesSection = () => {
    setTimeout(() => {
      document.getElementById("communities-section")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleNavigateCommunities = (event) => {
    event.preventDefault();
    if (location.pathname === "/" && location.hash === "#communities") {
      scrollToCommunitiesSection();
      return;
    }
    navigate("/#communities");
  };

  const footerLinks = [
    { label: "Home", href: "/", onClick: handleScrollToTop("/") },
    { label: "Communities", href: "/communities", onClick: handleNavigateCommunities },
    { label: "About", href: "/about", onClick: handleScrollToTop("/about") },
    { label: "Contact", href: "/contact", onClick: handleScrollToTop("/contact") },
  ];

  const contactItems = [
    { icon: "fa fa-location-dot", content: "Surrey, BC, CAN" },
    { icon: "fa fa-phone", href: "tel:+16047284243", content: "(604) 807-6419" },
    // {
    //   icon: 'fa fa-envelope',
    //   href: 'mailto:info@speedwayhomes.ca',
    //   content: 'info@speedwayhomes.ca',
    // },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12 px-4 w-full relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-0 mt-[-60px]  ">
              <img
                src={speedwayLogoWhite}
                alt="Speedway Homes"
                className="w-48 h-auto ml-[-30px]"
              />
              <p className="text-gray-300 text-base leading-relaxed max-w-md mt-[-30px]">
                Family-focused developer building quality homes and communities
                across British Columbia. Creating lasting value through
                exceptional design and construction.
              </p>
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-4 mt-10">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <i className="fab fa-twitter text-xl"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {footerLinks.map(({ label, href, onClick }) => (
                <li key={label}>
                  <a
                    href={href}
                    onClick={(event) => onClick?.(event)}
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm cursor-pointer block py-1"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">
              Contact Info
            </h3>
            <ul className="space-y-4">
              {contactItems.map(({ icon, href, content }) => (
                <li key={icon + content} className="flex items-start">
                  <i className={`${icon} mr-3 mt-1 text-gray-400 text-sm`}></i>
                  {href ? (
                    <a
                      href={href}
                      className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                    >
                      {content}
                    </a>
                  ) : (
                    <span className="text-gray-300 text-sm">{content}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                &copy; 2025 Speedway Homes. All rights reserved.
              </p>
            </div>
            <div className="flex items-center space-x-6">
              <a
                href="#"
                onClick={handleSpeedwayHomesClick}
                className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
              >
                Terms of Service
              </a>
              <a
  href="https://bragdeal.com"
  className="text-blue-500 hover:text-blue-400 transition-colors duration-300 text-sm"
>
  Powered by <span>BragDeal Inc.</span>
</a>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
