import { useNavigate } from "react-router-dom";
import videoDrone from "../assets/Drone Footage.mp4";

function Landing() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    const section = document.getElementById("comingsoon-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="Landing relative block lg:h-screen h-[40vh] overflow-hidden mt-[-90px] lg:mt-0">
      <div className="relative">
        <video
          autoPlay
          muted
          loop
          id="myVideo"
          preload="auto"
          playsInline
          className="w-full lg:h-[98vh] h-[50vh] object-cover"
        >
          <source
            src={videoDrone}
            type="video/mp4"
          />
          Sorry, your browser doesn't support videos.
        </video>
        <div className="absolute top-0 left-0 w-full h-[98vh] bg-black/60 z-20"></div>

        <div
          className="absolute z-30 text-white top-1/2 left-[40%] sm:left-[38%] md:left-[35%] lg:left-[28%] -translate-x-1/2 -translate-y-1/2"
        >
          <h1 className="whitespace-nowrap overflow-hidden lg:pb-3 pb-1 text-ellipsis font-black leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-[3.9rem]">
            Evolving Spaces,
          </h1>
          <div className="relative">
            <h1 className="whitespace-nowrap overflow-hidden text-ellipsis  lg:pb-3 pb-1 font-black leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-[3.9rem] bg-[linear-gradient(to_top,#007037_40%,transparent_55%)]">
              Enduring Values.
            </h1>
          </div>
          <button
            onClick={handleButtonClick}
            id="landingButton"
            className="mt-6 inline-flex items-center justify-center text-white bg-black/50 hover:bg-black border-2 border-[#007037] px-7 py-3.5 rounded transition-colors duration-300"
          >
            View Projects
          </button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
