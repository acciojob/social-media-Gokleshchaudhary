import React, { useState } from "react";

const NotificationsList = () => {
  const [notifications, setNotifications] = useState([]);

  const refresh = () => {
    setNotifications([
      { id: 1, message: "New comment on your post" },
      { id: 2, message: "New like on your post" },
    ]);
  };

  return (
    <section className="notificationsList">
      <h2>Notifications</h2>
      <button className="button" onClick={refresh}>
        Refresh Notifications
      </button>
      {notifications.map((n) => (
        <div key={n.id}>{n.message}</div>
      ))}
    </section>
  );
};

export default NotificationsList;
