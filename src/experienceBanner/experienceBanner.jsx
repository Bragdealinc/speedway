import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import Reviews from "../Reviews/Reviews";
import reviewsBG from "../assets/reviewsBG1.jpg";

const ExperienceBanner = () => {
  return (
    <div
      className="relative bg-cover bg-center"
      style={{
        backgroundImage: `url(${reviewsBG})`,
        backgroundPositionY: "100%",
        backgroundPositionX: "50%",
      }}
    >
      <div className="absolute inset-0 bg-black/75 z-10"></div>
      <div className="text-white flex flex-row justify-center text-center w-full py-[3em] pt-[8em] px-[2em] relative z-20 max-[567px]:flex-col max-[567px]:pb-0 max-[567px]:pt-[3.5em] max-[924px]:pb-[2.5em] min-[925px]:pb-[1em]">

        <div className="z-20 px-[6em] max-[924px]:px-[3em] max-[567px]:px-[2em] min-[925px]:px-[3em]">
          <div className="z-20 pb-[4px] pt-[10px] text-[2.2em] max-[924px]:text-[2em] max-[567px]:text-[1.8em]">
            <i className="fa-solid fa-house"></i>
          </div>
          <VisibilitySensor partialVisibility offset={{ bottom: 170 }}>
            {({ isVisible }) => (
              <div className="z-20 text-[2.6em] font-medium leading-[1.2] min-[925px]:text-[2.5em] max-[924px]:text-[2.7em] max-[567px]:text-[2.1em]" style={{ height: 55 }}>
                {isVisible ? <CountUp end={200} /> : 0}+
              </div>
            )}
          </VisibilitySensor>
          <div className="z-20 font-medium text-center text-[1.4em] leading-[1.2] max-[924px]:leading-[1.5] max-[924px]:text-[1.6em] max-[567px]:leading-[0.4] max-[567px]:text-[1.5em]"> units built</div>
        </div>

        <div className="z-20 px-[6em] max-[924px]:px-[3em] max-[567px]:px-[2em] min-[925px]:px-[3em]">
          <div className="z-20 pb-[4px] pt-[10px] text-[2.2em] max-[924px]:text-[2em] max-[567px]:text-[1.8em] pr-[8px] max-[567px]:mr-[5px]">
            <i className="fa-solid fa-calendar-days"></i>
          </div>
          <VisibilitySensor partialVisibility offset={{ bottom: 170 }}>
            {({ isVisible }) => (
              <div className="z-20 text-[2.6em] font-medium leading-[1.2] min-[925px]:text-[2.5em] max-[924px]:text-[2.7em] max-[567px]:text-[2.1em]" style={{ height: 55 }}>
                {isVisible ? <CountUp end={30} /> : 0}+
              </div>
            )}
          </VisibilitySensor>
          <div className="z-20 font-medium text-center text-[1.4em] leading-[1.2] max-[924px]:leading-[1.5] max-[924px]:text-[1.6em] max-[567px]:leading-[0.4] max-[567px]:text-[1.5em]"> years of experience</div>
        </div>

        <div className="z-20 px-[6em] max-[924px]:px-[3em] max-[567px]:px-[2em] min-[925px]:px-[3em]">
          <div className="z-20 pb-[4px] pt-[10px] text-[2.2em] max-[924px]:text-[2em] max-[567px]:text-[1.8em]">
            <i className="fa-solid fa-helmet-safety"></i>
          </div>

          <div className="z-20 text-[2.6em] font-medium leading-[1.2] min-[925px]:text-[2.5em] max-[924px]:text-[2.7em] max-[567px]:text-[2.1em]">BC</div>
          <div className="hidden max-[567px]:block pb-[13px]"></div>
          <div className="z-20 font-medium text-center text-[1.4em] leading-[1.2] max-[924px]:leading-[1.5] max-[924px]:text-[1.6em] max-[567px]:leading-[0.4] max-[567px]:text-[1.5em]">Licensed Builder </div>
        </div>

        <div className="z-20 w-1/4 max-[924px]:hidden text-left">
          <div className="z-20 text-left text-[1em] pb-[15px] min-[925px]:text-[0.9em]"> FAMILY FOCUSED COMMUNITIES</div>
          <div className="z-20 text-left text-[1.6em] font-medium min-[925px]:text-[1.4em]">
            Speedway Homes is dedicated to creating communities where families
            can truly thrive. Each development is thoughtfully designed to
            provide safe, nurturing environments that cater to every aspect of
            family life. Discover the perfect place to call home.
          </div>
        </div>
      </div>
      <Reviews />
    </div>
  );
};

export default ExperienceBanner;
