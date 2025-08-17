import React from "react";
import { useSelector } from "react-redux";

function NotificationsList() {
  const notifications = useSelector((state) => state.notifications);

  return (
    <section>
      <h2>Notifications</h2>
      <ul>
        {notifications.map((n, i) => (
          <li key={i}>{n.message}</li>
        ))}
      </ul>
    </section>
  );
}

export default NotificationsList;
