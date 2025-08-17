import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { notificationAdded } from "./notificationsSlice";

export default function NotificationsList() {
  const notifications = useSelector((state) => state.notifications);
  const dispatch = useDispatch();

  return (
    <section className="notificationsList">
      <h2>Notifications</h2>
      <button
        className="button"
        onClick={() => dispatch(notificationAdded("New Notification!"))}
      >
        Refresh Notifications
      </button>
      {notifications.map((n) => (
        <div key={n.id}>{n.message}</div>
      ))}
    </section>
  );
}
