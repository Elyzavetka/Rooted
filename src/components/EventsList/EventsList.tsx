import EventItem from "../EventItem/EventItem";
import cinemaImage from "../../assets/cinema.jpg";
import yogaClassImage from "../../assets/yoga_class.jpg";
import paintingMasterclassImage from "../../assets/painting_masterclass.jpg";
import fencing from "../../assets/fencing.jpg";
import guitar_masterclass from "../../assets/guitar_masterclass.jpg";
import live_music_festival from "../../assets/live_music_festival.jpg";
import styles from "./EventList.module.css";

const events = [
  {
    image: cinemaImage,
    title: "Cinema Screening",
    location: "Soho, London, UK",
    description:
      "Join us for an exciting cinema screening. We will be showing the latest blockbuster movie, followed by a discussion.",
    rating: 4,
  },
  {
    image: yogaClassImage,
    title: "Yoga Class",
    location: "Covent Garden, London, UK",
    description:
      "Relax and stretch with our certified yoga instructor. Suitable for all levels.",
    rating: 5,
  },
  {
    image: paintingMasterclassImage,
    title: "Painting Masterclass",
    location: "Shoreditch, London, UK",
    description:
      "Learn the basics of painting in this hands-on workshop led by a professional artist.",
    rating: 3,
  },
  {
    image: fencing,
    title: "Fencing Tournament",
    location: "Hackney, London, UK",
    description:
      "Test your skills in an exciting fencing tournament. All skill levels welcome.",
    rating: 4,
  },
  {
    image: guitar_masterclass,
    title: "Guitar Masterclass",
    location: "Camden, London, UK",
    description:
      "Join our guitar masterclass for an in-depth look at music theory and technique. Limited spots available.",
    rating: 5,
  },
  {
    image: live_music_festival,
    title: "Live Music Festival",
    location: "Notting Hill, London, UK",
    description:
      "Experience the best live music acts at our annual festival. Enjoy a variety of genres and artists.",
    rating: 4,
  },
];

const EventList = () => {
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
        />
      ))}
    </div>
  );
};

export default EventList;
