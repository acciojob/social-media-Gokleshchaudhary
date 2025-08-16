import { useSelector, useDispatch } from "react-redux";
import { notificationsReceived } from "./notificationsSlice";

const NotificationsList = () => {
  const notifications = useSelector((state) => state.notifications);
  const dispatch = useDispatch();

  return (
    <section className="notificationsList">
      <h2>Notifications</h2>
      <button
        className="button"
        onClick={() => dispatch(notificationsReceived())}
      >
        Refresh Notifications
      </button>
      {notifications.map((n) => (
        <div key={n.id}>{n.message}</div>
      ))}
    </section>
  );
};
export default NotificationsList;
