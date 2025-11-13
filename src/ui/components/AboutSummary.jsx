const AboutSummary = ({ imageSrc, imageAlt, paragraphs = [] }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      <div className="space-y-6">
        <div className="space-y-4">
          {paragraphs.map((text, idx) => (
            <p key={idx} className="text-lg leading-relaxed text-gray-700">
              {text}
            </p>
          ))}
        </div>
      </div>
      <div className="flex justify-center ">
        <div className="relative">
          <img 
            src={imageSrc} 
            alt={imageAlt} 
            className="!w-full max-w-md h-auto rounded-2xl shadow-2xl object-cover bg-gray-50 p-4" 
          />
          <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-green-600 rounded-2xl opacity-20 -z-10"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutSummary;


