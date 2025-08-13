import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { notificationsReceived } from './notificationsSlice';

export default function NotificationsList() {
  const dispatch = useDispatch();
  const notifications = useSelector(state => state.notifications);

  return (
    <section className="notificationsList">
      <button className="button" onClick={() => dispatch(notificationsReceived())}>
        Refresh Notifications
      </button>
      {notifications.map(n => (
        <div key={n.id}>{n.message}</div>
      ))}
    </section>
  );
}

