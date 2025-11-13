import { useEffect, useState } from "react";

function ProjectModal({ project, onClose }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = Array.isArray(project?.gallery) && project.gallery.length > 0
    ? project.gallery
    : [project?.image_url].filter(Boolean);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setActiveIndex((i) => (i + 1) % images.length);
      if (e.key === "ArrowLeft") setActiveIndex((i) => (i - 1 + images.length) % images.length);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [images.length, onClose]);

  const getStatusClass = (status) => {
    if (status === "Sold Out") return "bg-[#9e9e9e]";
    if (status === "Coming Soon") return "bg-[#ff9800]";
    if (status === "On Sale") return "bg-[#007037]";
    if (status === "Current") return "bg-[#333333]";
    return "bg-[#333333]";
  };

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[9999]">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="relative z-[10000] bg-white w-full max-w-5xl rounded-2xl shadow-2xl overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <h3 className="text-xl md:text-2xl font-semibold m-0">{project.project_name}</h3>
              {project.status && (
                <span className={`px-2.5 py-1 rounded text-white text-xs ${getStatusClass(project.status)}`}>{project.status}</span>
              )}
            </div>
            <button onClick={onClose} className="h-9 w-9 inline-flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200" aria-label="Close">
              <span className="text-xl">×</span>
            </button>
          </div>

          <div className="p-4 md:p-6">
            <div className="relative">
              <img
                src={images[activeIndex]}
                alt={`${project.project_name} image ${activeIndex + 1}`}
                className="w-full h-[260px] md:h-[420px] object-cover rounded-xl"
              />

              {images.length > 1 && (
                <>
                  <button
                    onClick={() => setActiveIndex((i) => (i - 1 + images.length) % images.length)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 h-9 w-9 md:h-10 md:w-10 rounded-full bg-black/60 text-white hover:bg-black/75"
                    aria-label="Previous"
                  >
                    ‹
                  </button>
                  <button
                    onClick={() => setActiveIndex((i) => (i + 1) % images.length)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 h-9 w-9 md:h-10 md:w-10 rounded-full bg-black/60 text-white hover:bg-black/75"
                    aria-label="Next"
                  >
                    ›
                  </button>
                </>
              )}
            </div>

            {images.length > 1 && (
              <div className="mt-4 grid grid-cols-5 md:grid-cols-8 gap-2">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`relative group rounded-lg overflow-hidden border ${activeIndex === idx ? "border-black" : "border-transparent"}`}
                    aria-label={`Select image ${idx + 1}`}
                  >
                    <img src={img} alt={`${project.project_name} thumbnail ${idx + 1}`} className="h-14 w-full object-cover" />
                    {activeIndex !== idx && <span className="absolute inset-0 bg-black/0 group-hover:bg-black/10" />}
                  </button>
                ))}
              </div>
            )}

            <div className="mt-6">
              <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
                {project.type && <span className="px-2.5 py-1 rounded-full bg-gray-100">{project.type}</span>}
                {project.location && <span className="px-2.5 py-1 rounded-full bg-gray-100">{project.location}</span>}
              </div>
              {project.thumbnail_desc && (
                <p className="mt-3 text-gray-800 text-base md:text-lg">{project.thumbnail_desc}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;


