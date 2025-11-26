import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { allProjects } from '../data/projectsData.js';

function CommunitiesGrid() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('All');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [screenSize, setScreenSize] = useState('desktop');
  const sliderRef = useRef(null);

  const currentProjects = allProjects.filter(project => project.status === 'Current');
  const completedProjects = allProjects.filter(project => project.status === 'Sold Out');
  const comingSoonProjects = allProjects.filter(project => project.status === 'Coming Soon');

  const allProjectsList = [...completedProjects, ...comingSoonProjects, ...currentProjects];

  const getStatusClass = (status) => {
    if (status === 'Sold Out') return 'bg-[#9e9e9e]';
    if (status === 'Coming Soon') return 'bg-[#ff9800]';
    if (status === 'On Sale') return 'bg-[#007037]';
    return 'bg-[#333333]';
  };

  const openDetails = null;

  const list =
    activeTab === 'All'
      ? allProjectsList
      : activeTab === 'Completed'
      ? completedProjects
      : activeTab === 'Current'
      ? currentProjects
      : comingSoonProjects;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setScreenSize('mobile');
      } else if (window.innerWidth < 1024) {
        setScreenSize('tablet');
      } else {
        setScreenSize('desktop');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isPaused && !isDragging) {
      const interval = setInterval(() => {
        setCurrentSlide((prevSlide) => {
          return (prevSlide + 1) % list.length;
        });
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [list.length, isPaused, isDragging]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % list.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + list.length) % list.length);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setIsPaused(true);
    setStartX(e.clientX);
    setCurrentX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setCurrentX(e.clientX);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    
    const diff = startX - currentX;
    const threshold = 50;
    
    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    
    setIsDragging(false);
    setTimeout(() => setIsPaused(false), 1000);
  };


  const handleTouchStart = (e) => {
    setIsDragging(true);
    setIsPaused(true);
    setStartX(e.touches[0].clientX);
    setCurrentX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    setCurrentX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    
    const diff = startX - currentX;
    const threshold = 50;
    
    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    
    setIsDragging(false);
    setTimeout(() => setIsPaused(false), 1000);
  };

  const handleCardClick = (project) => {
    navigate(`/project/${project.id}`);
  };

  const tabClasses = (tab) =>
    `px-4 md:px-5 py-2 text-sm md:text-base rounded-full transition-all duration-200 ${
      activeTab === tab
        ? 'bg-black text-white shadow'
        : 'bg-transparent text-gray-700 hover:bg-gray-100'
    }`;

  return (
    <section id="communities-section" className="py-10 px-4 bg-[whitesmoke]">
      <div className="max-w-[1140px] mx-auto">
        <h1 className="text-3xl md:text-5xl text-center py-6">Communities</h1>
        <div className="flex items-center justify-center mb-8">
          <div className="inline-flex items-center gap-1 bg-white border border-gray-200 rounded-full p-1 shadow-sm">
            <button className={tabClasses('All')} onClick={() => setActiveTab('All')}>
              All
            </button>
            <button className={tabClasses('Completed')} onClick={() => setActiveTab('Completed')}>
              Completed
            </button>
            <button
              className={tabClasses('Coming Soon')}
              onClick={() => setActiveTab('Coming Soon')}>
              Coming Soon
            </button>
            <button className={tabClasses('Current')} onClick={() => setActiveTab('Current')}>
              Current{' '}
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-[1140px] mx-auto">
        <div className="relative overflow-hidden rounded-lg sm:rounded-xl group">
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-black rounded-full p-1.5 sm:p-2 shadow-lg opacity-0 group-hover:opacity-100 sm:opacity-100 transition-all duration-300 hover:scale-110"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-black rounded-full p-1.5 sm:p-2 shadow-lg opacity-0 group-hover:opacity-100 sm:opacity-100 transition-all duration-300 hover:scale-110"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div 
            ref={sliderRef}
            className="flex transition-transform duration-700 ease-out cursor-grab active:cursor-grabbing"
            style={{
              transform: `translateX(-${currentSlide * (100 / (screenSize === 'mobile' ? 1 : screenSize === 'tablet' ? 2 : 3))}%)`,
              width: `${Math.max(list.length, screenSize === 'mobile' ? 1 : 10) * (screenSize === 'mobile' ? 14.4 :100 / (screenSize === 'mobile' ? 1 : screenSize === 'tablet' ? 2 : 3))}%`
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => {
              handleMouseUp();
              setIsPaused(false);
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {list.map((c, index) => (
              <div key={c.id} className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-1 sm:px-2">
                <div
                  className="group bg-white border border-gray-200 rounded-lg sm:rounded-xl overflow-hidden shadow-lg ring-1 ring-black/5 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-2xl hover:ring-black/10 transform-gpu cursor-pointer"
                  onClick={() => handleCardClick(c)}  
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleCardClick(c);
                  }}
                  role="button"
                  tabIndex={0}>
                  <div className="relative">
                    <img
                      src={c.image_url}
                      alt={c.project_name}
                      className="w-full h-[250px] sm:h-[300px] lg:h-[400px] object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                    />
                    <div
                      className={`absolute top-2 left-2 sm:top-3 sm:left-3 px-2 py-1 sm:px-3 sm:py-1.5 rounded text-white text-xs sm:text-sm font-medium ${getStatusClass(
                        c.status
                      )}`}>
                      {c.status}
                    </div>
                  </div>
                  <div className="px-3 pt-3 pb-4 sm:px-5 sm:pt-5 sm:pb-6">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 sm:gap-2 mb-2 sm:mb-3">
                      <h3 className="m-0 text-sm lg:text-lg font-medium text-gray-900 ">{c.project_name}</h3>
                     
                    </div>
                    <p className="text-gray-700 text-sm lg:text-lg leading-relaxed">{c.thumbnail_desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex justify-center mt-6 sm:mt-8 space-x-2 sm:space-x-3">
          {list.map((_, index) => (
            <button
              key={index}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-black scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CommunitiesGrid;
