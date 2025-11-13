import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import FormInput from '../ui/components/FormInput.jsx';
import ContactSidebar from '../ui/components/ContactSidebar.jsx';

const Contact = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handlePhoneClick = (e) => {
    e.preventDefault();
    window.open('tel:604-728-4243');
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');
    setIsError(false);

    const formData = new FormData(form.current);
    const fullName = formData.get('name');
    const emailAddress = formData.get('email');
    const emailSubject = formData.get('subject');
    const messageBody = formData.get('message');

    // Validation
    if (!fullName || !emailAddress || !messageBody || !emailSubject) {
      setMessage('All fields are required!');
      setIsError(true);
      setIsLoading(false);
      return;
    }

    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(emailAddress)) {
      setMessage('Please enter a valid email address!');
      setIsError(true);
      setIsLoading(false);
      return;
    }

    try {
      const result = await emailjs.sendForm(
        'service_vesrx0x',
        'template_yw3hdq9',
        form.current,
        '6LR5VZOeu894wcK5-'
      );
      
      if (result.status === 200) {
        setMessage('Message sent successfully! We\'ll get back to you soon. You can also download our real estate form below.');
        setIsError(false);
        form.current.reset();
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setMessage('Failed to send message. Please try again or call us directly.');
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to start your next project? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Send us a Message</h2>
            
            {message && (
              <div className={`mb-6 p-4 rounded-lg ${
                isError 
                  ? 'bg-red-50 text-red-700 border border-red-200' 
                  : 'bg-green-50 text-green-700 border border-green-200'
              }`}>
                {message}
              </div>
            )}

            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <FormInput 
                label="Full Name" 
                id="name" 
                name="name" 
                required 
                placeholder="Enter your full name"
              />
              <FormInput 
                label="Email Address" 
                id="email" 
                name="email" 
                type="email" 
                required 
                placeholder="Enter your email address"
              />
              <FormInput 
                label="Subject" 
                id="subject" 
                name="subject" 
                required 
                placeholder="What's this about?"
              />
              <FormInput 
                label="Message" 
                id="message" 
                name="message" 
                as="textarea" 
                rows={6} 
                required 
                placeholder="Tell us about your project or inquiry..."
              />
              
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
            
            {/* PDF Form Section */}
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Real Estate Form</h3>
              <p className="text-gray-600 mb-6">
                Download our real estate form to get started with your project inquiry.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => window.open('/speedway_real_estate_form.pdf', '_blank')}
                  className="flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  View PDF
                </button>
                <button
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/speedway_real_estate_form.pdf';
                    link.download = 'speedway_real_estate_form.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                  className="flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-300"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download PDF
                </button>
              </div>
            </div>

          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h2>
              <ContactSidebar onPhoneClick={handlePhoneClick} />
            </div>

            {/* Additional Info */}
            <div className="bg-green-50 rounded-2xl p-8 lg:p-10 border border-green-200">
              <h3 className="text-xl font-semibold text-green-800 mb-4">Why Choose Speedway Homes?</h3>
              <ul className="space-y-3 text-green-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">✓</span>
                  <span>Family-owned and operated since the 1990s</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">✓</span>
                  <span>Industry-leading build quality and craftsmanship</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">✓</span>
                  <span>Personalized service and attention to detail</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">✓</span>
                  <span>Comprehensive warranty and ongoing support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
