import React from "react";
import hh from "../assets/huddlehive.png";
import uni from "../assets/uni.png";
import highschool from "../assets/highschool.png";
import choir from "../assets/choir.png";
import bootcamp from "../assets/bootcamp.png";
import yoga from "../assets/yoga.png";
import studyabroad from "../assets/studyabroad.png";
import work from "../assets/work.png";

const Gardens = () => {
  // Inline CSS styles
  const styles = {
    container: {
      width: "430px",
      height: "932px",
      backgroundColor: "#74A37B",
      display: "flex",
      flexDirection: "column", // Stack the title and grid vertically
      alignItems: "center",
      padding: "20px",
      position: "relative",
    },
    title: {
      fontFamily: "'League Spartan', sans-serif", // Spartan font
      fontSize: "32px",
      color: "black",
      marginBottom: "20px", // Space between title and grid
    },
    background: {
      width: "100%",
      height: "100%",
      display: "grid", // Using grid for layout
      gridTemplateColumns: "repeat(2, 1fr)", // 2 columns
      gridTemplateRows: "repeat(4, 1fr)", // 4 rows
      gap: "20px",
      overflowY: "auto", // Scrollable grid
      padding: "10px", // Padding inside the grid
    },
    icon: {
      display: "block",
      width: "100%", // Make icons fill their grid cell
      height: "100%",
      textAlign: "center",
      borderRadius: "10px", // Button-like rounded corners
      backgroundColor: "#74A37B",
    },
    img: {
      width: "100%",
      height: "100%",
      objectFit: "contain", // Maintain aspect ratio
      cursor: "pointer",
      borderRadius: "5px", // Rounded corners for the image itself
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>My Gardens</h1>
      <div style={styles.background}>
        <a href="/garden/huddle-hive" className="icon" id="icon1" style={styles.icon}>
          <img src={hh} alt="Icon 1" style={styles.img} />
        </a>
        <a href="#" className="icon" id="icon2" style={styles.icon}>
          <img src={highschool} alt="Icon 2" style={styles.img} />
        </a>
        <a href="#" className="icon" id="icon3" style={styles.icon}>
          <img src={choir} alt="Icon 3" style={styles.img} />
        </a>
        <a href="#" className="icon" id="icon4" style={styles.icon}>
          <img src={uni} alt="Icon 4" style={styles.img} />
        </a>
        <a href="#" className="icon" id="icon5" style={styles.icon}>
          <img src={bootcamp} alt="Icon 5" style={styles.img} />
        </a>
        <a href="#" className="icon" id="icon6" style={styles.icon}>
          <img src={yoga} alt="Icon 6" style={styles.img} />
        </a>
        <a href="#" className="icon" id="icon7" style={styles.icon}>
          <img src={studyabroad} alt="Icon 7" style={styles.img} />
        </a>
        <a href="#" className="icon" id="icon8" style={styles.icon}>
          <img src={work} alt="Icon 8" style={styles.img} />
        </a>
      </div>
    </div>
  );
};

export default Gardens;
