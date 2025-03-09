// @ts-nocheck

import React, { useState } from "react";
import soil from "../assets/soil.png";
import title from "../assets/title.png";
import zero from "../assets/0.png";
import twenty from "../assets/20.png";
import forty from "../assets/40.png";
import sixty from "../assets/60.png";
import hundred from "../assets/100.png";
import person2 from "../assets/person2.png";
import sunflower from "../assets/sunflower.png";

interface TooltipProps {
  text: string;
  x: number;
  y: number;
  personIconSrc: string;
}

const Tooltip: React.FC<TooltipProps> = ({ text, x, y, personIconSrc }) => {
  const tooltipStyle = {
    position: "absolute",
    top: `${y + 30}px`,
    left: `${x}px`,
    padding: "10px",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    color: "white",
    borderRadius: "10px",
    fontSize: "14px",
    zIndex: 1000,
    pointerEvents: "none",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const personIconStyle = {
    width: "40px",
    height: "40px",
    marginBottom: "5px",
  };

  return (
    <div style={tooltipStyle}>
      <img src={personIconSrc} alt="Person Icon" style={personIconStyle} />
      <div>{text}</div>
    </div>
  );
};

interface TooltipState {
  text: string;
  x: number;
  y: number;
  personIconSrc: string;
}

const Home: React.FC = () => {
  const [tooltip, setTooltip] = useState<TooltipState | null>(null);
  let clickTimeout: NodeJS.Timeout | null = null;

  const gardenStyle = {
    backgroundImage: 'url("/sky.png")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "932px",
    width: "430px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "2rem",
    overflow: "hidden",
    flexDirection: "column",
    position: "relative",
  };

  const buttonStyle = {
    backgroundColor: "#f5c1d2",
    color: "white",
    border: "none",
    padding: "1rem 2rem",
    fontSize: "1.5rem",
    zIndex: 98,
    cursor: "pointer",
    borderRadius: "8px",
    marginTop: "20px",
    transition: "background-color 0.3s ease",
  };

  const soilStyle = {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "430px",
    height: "900px",
  };

  const titleStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "430px",
  };

  const handleClick = () => {
    window.location.href = "/events";
  };

  const handleSunflowerClick = () => {
    window.location.href = "/scrapbook";
  };

  const imageData = [
    { src: sixty, percentage: 60 },
    { src: twenty, percentage: 20 },
    { src: zero, percentage: 0 },
    { src: forty, percentage: 40 },
    { src: zero, percentage: 0 },
    { src: forty, percentage: 40 },
    { src: sixty, percentage: 60 },
    { src: zero, percentage: 0 },
    { src: hundred, percentage: 100 },
    { src: zero, percentage: 0 },
    { src: sixty, percentage: 60 },
    { src: twenty, percentage: 20 },
  ];

  // Update type for event
  const handleClickImage = (
    e: React.MouseEvent<HTMLImageElement>,
    percentage: number
  ) => {
    const { left, top } = e.target.getBoundingClientRect();

    if (clickTimeout) {
      clearTimeout(clickTimeout);
      window.location.href = "/profile";
    } else {
      clickTimeout = setTimeout(() => {
        setTooltip({
          text: `${percentage}%`,
          x: left + 20,
          y: top,
          personIconSrc: person2,
        });
        clickTimeout = null;
      }, 300);
    }
  };

  const sunflowerStyle = {
    position: "absolute",
    width: "300px",
    height: "300px",
    zIndex: 99,
    marginRight: 230,
  };

  const renderImages = (
    imageData: { src: string; percentage: number }[],
    marginBottom: number
  ) => {
    return imageData.map((image, index) => {
      const shiftX = 155 * index;
      return (
        <img
          key={index}
          src={image.src}
          alt={`${image.percentage}`}
          onClick={(e) => handleClickImage(e, image.percentage)}
          style={{
            position: "absolute",
            width: "60px",
            height: "60px",
            zIndex: index + 90,
            bottom: 0,
            marginBottom: marginBottom,
            marginRight: 230 - shiftX + "px",
          }}
        />
      );
    });
  };

  return (
    <div style={gardenStyle}>
      <img src={title} alt="Person Icon" style={titleStyle} />
      <button style={buttonStyle} onClick={handleClick}>
        Meetup Now
      </button>
      {renderImages(imageData.slice(0, 4), 230)}
      {renderImages(imageData.slice(4, 8), 155)}
      {renderImages(imageData.slice(8, 12), 75)}
      <img
        src={sunflower}
        alt="Person Icon"
        style={sunflowerStyle}
        onClick={handleSunflowerClick}
      />
      <img src={soil} alt="Person Icon" style={soilStyle} />
      {tooltip && (
        <Tooltip
          text={tooltip.text}
          x={tooltip.x}
          y={tooltip.y}
          personIconSrc={tooltip.personIconSrc}
        />
      )}
    </div>
  );
};

export default Home;
