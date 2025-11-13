import { useState, useEffect, useRef } from "react";
import "./ZoomText.css";

const ZoomText = () => {
  const [fontSize, setFontSize] = useState(() => getBaseFontSize());
  const [opacity, setOpacity] = useState(1);
  const redrawIntervalRef = useRef(null);

  function getBaseFontSize() {
    const width = window.innerWidth;
    if (width < 992) return "12vw";
    if (width < 1200) return "11vw";
    if (width < 1500) return "13vw";
    return "10vw";
  }

  const checkFooterVisibilityAndRedraw = () => {
    const footer = document.querySelector("footer");
    const footerRect = footer.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (footerRect.top < windowHeight) {
      if (!redrawIntervalRef.current) {
        redrawIntervalRef.current = setInterval(() => {
          setOpacity((prevOpacity) => (prevOpacity === 1 ? 0.9999 : 1));
        }, 500);
      }
    } else {
      if (redrawIntervalRef.current) {
        clearInterval(redrawIntervalRef.current);
        redrawIntervalRef.current = null;
        setOpacity(1);
      }
    }
  };

  const handleScroll = () => {
    requestAnimationFrame(() => {
      const zoomContainer = document.querySelector(".zoom-container");
      if (!zoomContainer) return;

      const { offsetTop, offsetHeight } = zoomContainer;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      const midPoint = offsetTop + offsetHeight / 2;
      const viewTop = scrollY;
      const viewBottom = scrollY + windowHeight;

      if (viewTop < midPoint && viewBottom > midPoint) {
        const progress = ((viewBottom - midPoint) / offsetHeight) * 2;
        const baseSize = parseFloat(getBaseFontSize());
        const newSize = Math.max(baseSize, baseSize + progress * 13);
        setFontSize(`${newSize}vw`);
      }

      checkFooterVisibilityAndRedraw();
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (redrawIntervalRef.current) {
        clearInterval(redrawIntervalRef.current);
      }
    };
  }, []);

  return (
    <div className="zoom-container" style={{ opacity }}>
      <h1 className="zoom-text" style={{ fontSize }}>
        Quality
      </h1>
    </div>
  );
};

export default ZoomText;
