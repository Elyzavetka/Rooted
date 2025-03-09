import { useState } from "react";
import EventItem from "../EventItem/EventItem";
import styles from "./EventList.module.css";
import cinemaImage from "../../assets/cinema.jpg";
import yogaClassImage from "../../assets/yoga_class.jpg";
import paintingMasterclassImage from "../../assets/painting_masterclass.jpg";
import fencing from "../../assets/fencing.jpg";
import guitar_masterclass from "../../assets/guitar_masterclass.jpg";
import live_music_festival from "../../assets/live_music_festival.jpg";

interface Event {
  image: string;
  title: string;
  location: string;
  description: string;
  longDescription: string;
  rating: number;
}

const events: Event[] = [
  {
    image: cinemaImage,
    title: "Cinema Screening",
    location: "London, UK",
    description:
      "Join us for an exciting cinema screening. We will be showing the latest blockbuster movie, followed by a discussion.",
    rating: 4,
    longDescription:
      "Join us for an exciting cinema screening. We will be showing the latest blockbuster movie, followed by a discussion with film experts. Snacks and drinks available.",
  },
  {
    image: yogaClassImage,
    title: "Yoga Class",
    location: "London, UK",
    description:
      "Relax and stretch with our certified yoga instructor. Suitable for all levels.",
    longDescription:
      "Join us for an exciting cinema screening. We will be showing the latest blockbuster movie, followed by a discussion with film experts. Snacks and drinks available.",
    rating: 5,
  },
  {
    image: paintingMasterclassImage,
    title: "Painting Masterclass",
    location: "London, UK",
    description:
      "Learn the basics of painting in this hands-on workshop led by a professional artist.",
    longDescription:
      "Join us for an exciting cinema screening. We will be showing the latest blockbuster movie, followed by a discussion with film experts. Snacks and drinks available.",
    rating: 3,
  },
  {
    image: fencing,
    title: "Fencing Tournament",
    location: "London, UK",
    description:
      "Test your skills in an exciting fencing tournament. All skill levels welcome.",
    longDescription:
      "Join us for an exciting cinema screening. We will be showing the latest blockbuster movie, followed by a discussion with film experts. Snacks and drinks available.",
    rating: 4,
  },
  {
    image: guitar_masterclass,
    title: "Guitar Masterclass",
    location: "London, UK",
    description:
      "Join our guitar masterclass for an in-depth look at music theory and technique. Limited spots available.",
    longDescription:
      "Join us for an exciting cinema screening. We will be showing the latest blockbuster movie, followed by a discussion with film experts. Snacks and drinks available.",
    rating: 5,
  },
  {
    image: live_music_festival,
    title: "Music Festival",
    location: "London, UK",
    description:
      "Experience the best live music acts at our annual festival. Enjoy a variety of genres and artists.",
    longDescription:
      "Join us for an exciting cinema screening. We will be showing the latest blockbuster movie, followed by a discussion with film experts. Snacks and drinks available.",
    rating: 4,
  },
];

const EventList = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const handleEventClick = (event: Event) => {
    setSelectedEvent(event);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
  };

  return (
    <div className={styles.eventList}>
      {events.map((event, index) => (
        <EventItem
          key={index}
          image={event.image}
          title={event.title}
          location={event.location}
          description={event.description}
          rating={event.rating}
          onClick={() => handleEventClick(event)}
        />
      ))}
      {selectedEvent && (
        <>
          <div className={styles.overlay} onClick={handleCloseModal}></div>
          <div className={styles.modal}>
            <img
              src={selectedEvent.image}
              alt={selectedEvent.title}
              className={styles.modalImage}
            />
            <h2>{selectedEvent.title}</h2>
            <p>{selectedEvent.longDescription}</p>
            <button
              onClick={() =>
                alert(
                  `You have successfully booked the event: ${selectedEvent.title}`
                )
              }
            >
              Book Now
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default EventList;
