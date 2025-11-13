import MissionImage from "../../assets/handshake.jpg";

function Mission() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      <div className="order-2 lg:order-1">
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-8">
              To craft exceptional, family-focused homes that stand the test of time. We
              combine thoughtful design, durable materials, and sustainable practices to
              deliver safe, comfortable, and beautiful communities across British Columbia.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                1
              </div>
              <p className="text-gray-700 leading-relaxed">
                Prioritize livability, safety, and everyday convenience for families.
              </p>
            </div>
            <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                2
              </div>
              <p className="text-gray-700 leading-relaxed">
                Build with integrity, transparency, and long-term value in mind.
              </p>
            </div>
            <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                3
              </div>
              <p className="text-gray-700 leading-relaxed">
                Embrace sustainable methods to reduce environmental impact.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="order-1 lg:order-2">
        <div className="relative">
          <img
            src={MissionImage}
            alt="Handshake representing trust and commitment"
            className="w-full h-auto rounded-2xl shadow-2xl object-cover"
            loading="lazy"
          />
          <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-green-600 rounded-2xl opacity-20 -z-10"></div>
        </div>
      </div>
    </div>
  );
}

export default Mission;


