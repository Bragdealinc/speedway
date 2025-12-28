const ContactSidebar = ({
  onPhoneClick,
  locationText = "Surrey, BC",
  email = "manveer@commonground-consulting.com",
  phone = "604-728-4243",
}) => {
  const handleEmailClick = () => {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;
    window.open(gmailUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="space-y-8">
      {/* Contact Details */}
      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
            <i className="fa fa-location-dot text-green-600 text-lg"></i>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              Location
            </h3>
            <p className="text-gray-600">{locationText}</p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
            <i className="fa fa-envelope text-green-600 text-lg"></i>
          </div>
            <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
            <button 
              onClick={handleEmailClick}
              className="inline-block px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-300 text-sm font-medium"
            >
              <i className="fa fa-envelope mr-2"></i>
              Send Email
            </button>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
            <i className="fa fa-phone text-green-600 text-lg"></i>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">Phone</h3>
            <a
              href={`tel:${phone.replaceAll("-", "")}`}
              onClick={onPhoneClick}
              className="text-green-600 hover:text-green-700 transition-colors duration-300"
            >
(604) 807-6419            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSidebar;
