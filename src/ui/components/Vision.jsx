import VisionImage from "../../assets/community.jpg";

function Vision() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      <div>
        <div className="relative">
          <img
            src={VisionImage}
            alt="Community-focused modern neighborhood"
            className="w-full h-auto rounded-2xl shadow-2xl object-cover"
            loading="lazy"
          />
          <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-green-600 rounded-2xl opacity-20 -z-10"></div>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Vision
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-8">
            To shape thriving communities where families flourish—homes that are
            connected, efficient, and designed for the future. We envision neighborhoods
            where quality builds trust and great design inspires everyday living.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <h3 className="font-semibold text-gray-900 mb-2">Design Forward</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Timeless architecture with smart, functional layouts.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <h3 className="font-semibold text-gray-900 mb-2">Community First</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Spaces that bring people together and foster belonging.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <h3 className="font-semibold text-gray-900 mb-2">Sustainable Living</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Energy-efficient choices that respect our environment.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <h3 className="font-semibold text-gray-900 mb-2">Enduring Value</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Homes built to perform and last for generations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vision;


