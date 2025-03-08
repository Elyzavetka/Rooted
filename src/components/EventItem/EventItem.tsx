import styles from "./EventItem.module.css";

const EventItem = () => {
  return (
    <div className={styles.eventItem}>
      {/* <img src={image} alt="Event" className={styles.eventImage} />
      <div className={styles.eventDescription}>{description}</div> */}
      <p>Event Item</p>
    </div>
  );
};

export default EventItem;
