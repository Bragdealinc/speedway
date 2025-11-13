const HeroSection = ({ title, imageSrc, imageAlt = "Hero" }) => {
  return (
    <div className="relative w-full flex items-center justify-center overflow-hidden">
      <h1 className="absolute top-[57%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-[3.6em] w-full text-center z-[3] font-light drop-shadow-[2px_2px_5px_rgba(0,0,0,0.7)] max-[900px]:top-[60%] max-[900px]:text-[3em] max-[480px]:text-[2em] max-[480px]:top-1/2">{title}</h1>
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.3)] z-[2]"></div>
      <img src={imageSrc} alt={imageAlt} className="w-full object-cover object-[center_top] block max-[900px]:h-[60vh]" />
    </div>
  );
};

export default HeroSection;


