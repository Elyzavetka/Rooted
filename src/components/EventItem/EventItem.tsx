import styles from "./EventItem.module.css";

interface EventItemProps {
  image: string;
  title: string;
  location: string;
  description: string;
  rating: number;
  onClick: () => void;
}

const EventItem = ({
  image,
  title,
  location,
  description,
  rating,
  onClick,
}: EventItemProps) => {
  return (
    <div className={styles.eventItem} onClick={onClick}>
      <img src={image} alt={title} className={styles.eventImage} />
      <div className={styles.eventContent}>
        <h2 className={styles.eventTitle}>{title}</h2>
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
