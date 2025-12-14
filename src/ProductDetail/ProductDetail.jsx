import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import HeroSection from '../ui/components/HeroSection.jsx';
import { allProjects } from '../data/projectsData.js';

function ProductDetail() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);


  useEffect(() => {
    const foundProject = allProjects.find(p => p.id === projectId);
    if (foundProject) {
      setProject(foundProject);
    } else {
      navigate('/communities');
    }
  }, [projectId, navigate]);

  if (!project) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  const getStatusClass = (status) => {
    if (status === 'Sold Out') return 'bg-[#9e9e9e]';
    if (status === 'Coming Soon') return 'bg-[#ff9800]';
    if (status === 'On Sale') return 'bg-[#007037]';
    return 'bg-[#333333]';
  };

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div className="min-h-screen bg-white">
   
      
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              {/* <h1 className="text-4xl font-bold text-gray-900 mb-6">{project.project_name}</h1> */}
              <h3 className="text-2xl font-bold text-gray-900 mb-0">{project.units}</h3>
              <h3 className="text-2xl font-bold text-gray-900 mb-0">{project.name}</h3>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.city}</h3>
              <p className="text-xl text-gray-600 mb-4">{project.location}</p>
              <p className="text-lg text-gray-700 leading-relaxed">{project.details.description}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Features</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.details.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Specifications</h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(project.details.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                      <dt className="font-medium text-gray-900">{key}</dt>
                      <dd className="text-gray-700">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Gallery</h2>
              <div className="space-y-4">
                <div className="relative">
                  <span
                    className={`absolute top-4 right-4 px-4 py-2 rounded-full text-white text-sm font-medium ${getStatusClass(
                      project.status
                    )}`}
                  >
                    {project.status}
                  </span>
                  <img
                    src={project.gallery[selectedImage]}
                    alt={`${project.project_name} - Image ${selectedImage + 1}`}
                    className="w-full h-96 object-cover rounded-lg shadow-lg"
                  />
                  {project.gallery.length > 1 && (
                    <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 rounded-lg flex items-center justify-between px-4">
                      <button
                        onClick={() => setSelectedImage((prev) => (prev - 1 + project.gallery.length) % project.gallery.length)}
                        className="bg-white bg-opacity-80 hover:bg-opacity-100 text-black rounded-full p-2 transition-all duration-300 opacity-0 hover:opacity-100"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                        onClick={() => setSelectedImage((prev) => (prev + 1) % project.gallery.length)}
                        className="bg-white bg-opacity-80 hover:bg-opacity-100 text-black rounded-full p-2 transition-all duration-300 opacity-0 hover:opacity-100"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  )}
                </div>
                
                {project.gallery.length > 1 && (
                  <div className="grid grid-cols-4 gap-2">
                    {project.gallery.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`relative overflow-hidden rounded-lg transition-all duration-300 ${
                          selectedImage === index ? 'ring-2 ring-blue-500' : 'hover:ring-2 hover:ring-gray-300'
                        }`}
                      >
                        <img
                          src={image}
                          alt={`${project.project_name} - Thumbnail ${index + 1}`}
                          className="w-full h-20 object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Interested in this project?</h3>
              <p className="text-gray-700 mb-6">Contact us to learn more about availability, pricing, and investment opportunities.</p>
              <div className="space-y-3">
                <button 
                  onClick={handleContactClick}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300"
                >
                  Contact Sales Team
                </button>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
