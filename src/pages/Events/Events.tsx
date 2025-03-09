import EventList from "../../components/EventsList/EventsList";
import styles from "./Events.module.css";

const EventListPage = () => {
  return (
    <div className={styles.eventListContainer}>
      <EventList />
    </div>
  );
};

export default EventListPage;
