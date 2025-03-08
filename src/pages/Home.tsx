import React, { useState } from "react";
import soil from "../assets/soil.png";
import title from "../assets/title.png";
import zero from "../assets/0.png";
import twenty from "../assets/20.png";
import forty from "../assets/40.png";
import sixty from "../assets/60.png";
import hundred from "../assets/100.png";
import person2 from "../assets/person2.png";

const Tooltip = ({ text, x, y, personIconSrc }) => {
  const tooltipStyle = {
    position: "absolute",
    top: `${y + 30}px`, // Position below the image
    left: `${x}px`,
    padding: "10px",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    color: "white",
    borderRadius: "10px",
    fontSize: "14px",
    zIndex: 1000,
    pointerEvents: "none", // Prevent the tooltip from blocking the click
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const personIconStyle = {
    width: "40px", // Set the size of the person icon
    height: "40px",
    marginBottom: "5px", // Add space between the icon and the text
  };

  return (
    <div style={tooltipStyle}>
      <img src={personIconSrc} alt="Person Icon" style={personIconStyle} />
      <div>{text}</div>
    </div>
  );
};

export default function Home() {
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
    zIndex: 99,
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

  const [tooltip, setTooltip] = useState(null);

  // This function will handle click to show/hide the tooltip
  const handleClickImage = (e, percentage) => {
    const { left, top } = e.target.getBoundingClientRect();
    if (tooltip && tooltip.text === `${percentage}%`) {
      // If the tooltip is already shown for this image, hide it
      setTooltip(null);
    } else {
      // Otherwise, show the tooltip for this image
      setTooltip({
        text: `${percentage}%`,
        x: left + 20, // Offset position slightly to the right of the plant image
        y: top,  // Position the tooltip based on the clicked image
        personIconSrc: person2, // Pass the person icon source
      });
    }
  };

  const renderImages = (imageData, marginBottom) => {
    return imageData.map((image, index) => {
      const shiftX = 155 * index; // Shift by 155px for each iteration
      return (
        <img
          key={index}
          src={image.src}
          alt={`${image.percentage}`}
          onClick={(e) => handleClickImage(e, image.percentage)} // Use onClick for tooltip toggle
          style={{
            position: "absolute",
            width: "60px",
            height: "60px",
            zIndex: index + 90,
            bottom: 0,
            marginBottom: marginBottom,
            marginRight: 230 - shiftX + "px", // Shift each subsequent image right
          }}
        />
      );
    });
  };

  return (
    <div style={gardenStyle}>
      <img src={title} style={titleStyle} />
      <button style={buttonStyle} onClick={handleClick}>
        Meetup Now
      </button>
      {renderImages(imageData.slice(0, 4), 230)} {/* First row */}
      {renderImages(imageData.slice(4, 8), 155)} {/* Second row */}
      {renderImages(imageData.slice(8, 12), 75)}  {/* Third row */}
      <img src={soil} style={soilStyle} />

      {/* Render Tooltip if it's not null */}
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
}
