// @ts-nocheck

import { useState } from "react";
import person2 from "../assets/person2.png";
import blossom from "../assets/blossom.png";
import { FaPlus, FaEdit, FaTimes } from "react-icons/fa"; // For the plus, edit, and x (close) icons
import { Switch } from "@mui/material"; // MUI Switch

export default function Profile() {
  // State to hold the tags for Interests and Hobbies
  const [interests, setInterests] = useState(["Music", "Tech", "Travel"]);
  const [hobbies, setHobbies] = useState(["Reading", "Photography", "Hiking"]);

  // State to track the connection status
  const [isLinkedInConnected, setLinkedInConnected] = useState(true);
  const [isInstagramConnected, setInstagramConnected] = useState(true);

  // Function to remove a tag
  const removeTag = (tag, type) => {
    if (type === "interest") {
      setInterests(interests.filter((item) => item !== tag));
    } else if (type === "hobby") {
      setHobbies(hobbies.filter((item) => item !== tag));
    }
  };

  return (
    <div style={styles.container}>
      {/* Profile Section */}
      <div style={styles.profileContainer}>
        <img src={person2} alt="Profile" style={styles.profileImage} />
        <h2 style={styles.profileName}>Jane Doe</h2>
      </div>

      {/* Divider Line Under Profile */}
      <hr style={styles.divider} />

      {/* Interests Section */}
      <section style={styles.section}>
        <div style={styles.sectionHeader}>
          <h3 style={styles.sectionTitle}>Interests</h3>
          <button style={styles.addButton}>
            <FaPlus />
          </button>
        </div>
        <div style={styles.tagsContainer}>
          {interests.map((tag, index) => (
            <span key={index} style={styles.tag}>
              {tag}
              <button
                style={styles.removeButton}
                onClick={() => removeTag(tag, "interest")}
              >
                <FaTimes />
              </button>
            </span>
          ))}
        </div>
      </section>

      {/* Hobbies Section */}
      <section style={styles.section}>
        <div style={styles.sectionHeader}>
          <h3 style={styles.sectionTitle}>Hobbies</h3>
          <button style={styles.addButton}>
            <FaPlus />
          </button>
        </div>
        <div style={styles.tagsContainer}>
          {hobbies.map((tag, index) => (
            <span key={index} style={styles.tag}>
              {tag}
              <button
                style={styles.removeButton}
                onClick={() => removeTag(tag, "hobby")}
              >
                <FaTimes />
              </button>
            </span>
          ))}
        </div>
      </section>

      {/* Socials Section */}
      <section style={styles.section}>
        <div style={styles.sectionHeader}>
          <h3 style={styles.sectionTitle}>Socials</h3>
          <button style={styles.editButton}>
            <FaEdit />
          </button>
        </div>
        <div style={styles.socialsContainer}>
          <div style={styles.socialLinkContainer}>
            <a
              href="https://www.linkedin.com/in/username"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.socialLink}
            >
              LinkedIn
            </a>
            <Switch
              checked={isLinkedInConnected}
              onChange={() => setLinkedInConnected(!isLinkedInConnected)}
              color="primary"
              inputProps={{ "aria-label": "LinkedIn connected" }}
            />
          </div>
          <div style={styles.socialLinkContainer}>
            <a
              href="https://www.instagram.com/username"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.socialLink}
            >
              Instagram
            </a>
            <Switch
              checked={isInstagramConnected}
              onChange={() => setInstagramConnected(!isInstagramConnected)}
              color="primary"
              inputProps={{ "aria-label": "Instagram connected" }}
            />
          </div>
        </div>
      </section>

      {/* Blossom Tree at the Center Bottom */}
      <div style={styles.blossomContainer}>
        <img src={blossom} alt="Blossom Tree" style={styles.blossomImage} />
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "932px",
    width: "430px",
    backgroundColor: "#74A37B",
    color: "white",
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    boxSizing: "border-box",
    position: "relative", // For absolute positioning of blossom tree
  },
  profileContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
  },
  profileImage: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    marginRight: "15px",
  },
  profileName: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  divider: {
    border: "none",
    borderTop: "1px solid white",
    margin: "10px 0",
  },
  section: {
    marginTop: "20px",
  },
  sectionHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: "20px",
    fontWeight: "bold",
  },
  addButton: {
    background: "transparent",
    border: "none",
    color: "white",
    fontSize: "20px",
    cursor: "pointer",
  },
  editButton: {
    background: "transparent",
    border: "none",
    color: "white",
    fontSize: "20px",
    cursor: "pointer",
  },
  tagsContainer: {
    marginTop: "10px",
    display: "flex",
    flexWrap: "wrap",
  },
  tag: {
    backgroundColor: "#5A8B56",
    padding: "5px 10px",
    margin: "5px",
    borderRadius: "20px",
    fontSize: "14px",
    display: "flex",
    alignItems: "center",
  },
  removeButton: {
    background: "transparent",
    border: "none",
    color: "white",
    fontSize: "14px",
    cursor: "pointer",
    marginLeft: "8px",
  },
  socialsContainer: {
    marginTop: "10px",
  },
  socialLinkContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "8px",
  },
  socialLink: {
    display: "block",
    color: "white",
    fontSize: "16px",
    textDecoration: "none",
    borderBottom: "1px solid white",
  },
  blossomContainer: {
    position: "absolute",
    bottom: "20px",
    left: "50%",
    transform: "translateX(-50%)", // Centering the blossom image horizontally
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  blossomImage: {
    width: "400px",
    height: "400px",
    borderRadius: "50%",
    bottom: 0,
    position: "absolute",
    margin: "-20px",
    padding: 0,
  },
};
