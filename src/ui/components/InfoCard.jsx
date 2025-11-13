const InfoCard = ({ image, alt, textId, title, text, reverse = false }) => {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
      reverse ? "lg:grid-flow-col-dense" : ""
    }`}>
      <div className={`${reverse ? "lg:col-start-2" : ""}`}>
        <div className="relative">
          <img
            src={image}
            alt={alt}
            className="w-full h-auto rounded-2xl shadow-2xl object-cover transition-transform duration-300 ease-in-out hover:scale-105"
          />
          <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-green-600 rounded-2xl opacity-20 -z-10"></div>
        </div>
      </div>
      
      <div id={textId} className={`space-y-6 ${reverse ? "lg:col-start-1" : ""}`}>
        <div className="text-center lg:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-green-600 mb-4">
            {title}
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;


