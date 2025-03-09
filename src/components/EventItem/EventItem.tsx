import styles from "./EventItem.module.css";

interface EventItemProps {
  image: string;
  title: string;
  location: string;
  description: string;
  rating: number;
}

const EventItem: React.FC<EventItemProps> = ({
  image,
  title,
  location,
  description,
  rating,
}) => {
  return (
    <div className={styles.eventItem}>
      <img src={image} alt="Event" className={styles.eventImage} />
      <div className={styles.eventDescription}>
        <h3 className={styles.eventTitle}>{title}</h3>
        <p className={styles.eventLocation}>{location}</p>
        <div className={styles.eventRating}>
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              className={index < rating ? styles.filledStar : styles.emptyStar}
            >
              ★
            </span>
          ))}
        </div>
        <p className={styles.eventDescription}>{description}</p>
      </div>
    </div>
  );
};

export default EventItem;
