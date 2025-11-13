import AboutImage from "../../src/assets/Saffron Living - Duplexes .png";
import FamilyImage from "../assets/family.jpg";
import ExperienceBanner from "../experienceBanner/experienceBanner.jsx";
import AboutSummary from "../ui/components/AboutSummary.jsx";
import InfoCard from "../ui/components/InfoCard.jsx";
import HeroSection from "../ui/components/HeroSection.jsx";
import Mission from "../ui/components/Mission.jsx";
import Vision from "../ui/components/Vision.jsx";
import { info_Cards_Array } from "./constant.js";

function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      {/* <section className="relative">
        <HeroSection
          title="Building Your Future"
          imageSrc={FamilyImage}
          imageAlt="Family"
        />
      </section> */}

      {/* About Summary Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              SPEEDWAY HOMES: EVOLVING SPACES. ENDURING VALUES.
            </h1>
          </div>
          <AboutSummary
            imageSrc={AboutImage}
            imageAlt="Speedway Homes Developments"
            paragraphs={[
              "Speedway Homes is a Canadian family-owned and operated development company, serving the Fraser Valley since the 1990's. Our roots in framing, construction and trades speak for themselves in our industry-leading build quality and homeowner care. From single-family houses to boutique multifamily complexes, our team understands what it takes to build, from the ground up, a home that evolves with you.",
              "At Speedway Homes, our values are our promise. Business ethics, trust, professionalism and excellence inform every decision - thereby building homes and relationships to last generations. We are, first and foremost, a company for family by family.",
            ]}
          />
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Mission />
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Vision />
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet the Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced leadership team brings decades of expertise in
              construction, development, and finance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Sarbjit Taggar - Founder */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-4xl text-gray-500">👤</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Sarbjit Taggar
              </h3>
              <p className="text-green-600 font-semibold mb-4">
                Founder
              </p>
              <p className="text-gray-600 leading-relaxed text-left">
                With over three decades of construction experience, Sarbjit is the driving force behind Speedway Homes' reputation for quality, integrity, and craftsmanship. After immigrating to Canada from India in the 1990s, Sarbjit founded Speedway Homes and began his journey in the construction industry as a framer. Built from the ground up under his leadership, Speedway Homes quickly evolved from building single-family residences to developing small subdivisions. Today, Speedway Homes develops single-family, duplex, and townhouse communities known for their lasting quality and thoughtful design. Sarbjit's deep construction knowledge and hands-on approach remain at the heart of every project; the company continues to self-perform its work, ensuring that each detail meets the standard of excellence he set from day one.
              </p>
            </div>

            {/* Manveer Taggar - VP of Development */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-4xl text-gray-500">👤</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Manveer Taggar
              </h3>
              <p className="text-green-600 font-semibold mb-4">
                VP of Development
              </p>
              <p className="text-gray-600 leading-relaxed text-left">
                B.Eng (Civil Engineering) - With a background in civil engineering and project management, Manveer combines technical expertise with a strategic, results-driven mindset that ensures success for Speedway Homes. Manveer balances technical, financial, regulatory, and site constraints to deliver efficient, practical, and high-quality outcomes. He is the founder of Common Ground Consulting, a development management firm trusted by leading developers to guide projects from concept through municipal approvals to final occupancy.
              </p>
            </div>

            {/* Joash Taggar - VP of Construction */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-4xl text-gray-500">👤</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Joash Taggar
              </h3>
              <p className="text-green-600 font-semibold mb-4">
                VP of Construction
              </p>
              <p className="text-gray-600 leading-relaxed text-left">
                With a strong foundation in architectural design and construction management, Joash Taggar brings both technical skill and efficient communication to every Speedway Homes construction site. A graduate of the British Columbia Institute of Technology (BCIT) with a Diploma in Architecture and Building Technology, he combines formal training with years of practical experience managing residential and commercial construction projects. Before joining Speedway Homes full-time, Joash worked at Earls Restaurants in their construction project management division, overseeing new restaurant builds and renovations across Western Canada and the United States. This experience honed his ability to coordinate trades, manage timelines and budgets, and maintain the high standards that define Speedway Homes' developments. From planning and site coordination to final quality assurance, Joash manages the construction lifecycle from start to finish.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              The principles that guide everything we do at Speedway Homes
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Family Oriented */}
            <div className="bg-gray-50 rounded-2xl p-8 lg:p-10 hover:shadow-lg transition-shadow duration-300">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👨‍👩‍👧‍👦</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Family Oriented
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-left">
                Family is at the heart of everything Speedway Homes does. The
                homes are designed to cater to the evolving needs of modern
                families, ensuring safety, comfort, and functionality. From
                spacious living areas that encourage family gatherings to
                child-friendly spaces that promote play and learning, these
                homes are built with the intention of nurturing family bonds and
                creating lasting memories.
              </p>
            </div>

            {/* Forward Thinking */}
            <div className="bg-gray-50 rounded-2xl p-8 lg:p-10 hover:shadow-lg transition-shadow duration-300">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Forward Thinking
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-left">
                Speedway Homes is dedicated to creating sustainable and
                innovative communities that not only meet the housing needs of
                today but also anticipate the needs of tomorrow. Each project is
                thoughtfully designed to foster a sense of community and enhance
                the overall quality of life. By engaging with local
                organizations and residents, Speedway Homes ensures that its
                developments contribute positively to neighborhoods,
                incorporating forward-thinking amenities such as green spaces,
                community centers, and other features that promote long-term
                well-being and connection.
              </p>
            </div>

            {/* Relationship Driven */}
            <div className="bg-gray-50 rounded-2xl p-8 lg:p-10 hover:shadow-lg transition-shadow duration-300">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Relationship Driven
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-left">
                Speedway Homes prioritizes building and maintaining strong
                relationships with clients, partners, and the communities where
                it operates. By fostering trust and open communication, Speedway
                Homes ensures that every project is a collaborative effort,
                reflecting the needs and desires of the community. From the
                initial planning stages to the final touches, Speedway Homes
                works closely with stakeholders to deliver homes and
                neighborhoods that resonate with the people who live there,
                creating lasting connections and a sense of belonging.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards Section */}
      {/* <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Discover what makes Speedway Homes a trusted name in residential development
            </p>
          </div>
          
          <div className="space-y-20 lg:space-y-24">
            {info_Cards_Array.map((card, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-xl overflow-hidden p-8 lg:p-12 hover:shadow-2xl transition-shadow duration-300">
                <InfoCard
                  image={card.image}
                  alt={card.alt}
                  textId={card.textId}
                  title={card.title}
                  text={card.text}
                  reverse={index % 2 === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Experience Banner Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ExperienceBanner />
        </div>
      </section>
    </div>
  );
}

export default About;
