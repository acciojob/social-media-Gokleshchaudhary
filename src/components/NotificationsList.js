import React, { useState } from 'react';
import { notificationsState, fetchNotifications } from '../data/notifications';
import { useSyncExternalStore } from 'use-sync-external-store';

export default function NotificationsList() {
  const [fetched, setFetched] = useState(false);
  const notes = useSyncExternalStore(notificationsState.subscribe, notificationsState.get);

  const onRefresh = () => {
    setFetched(true);
    fetchNotifications();
  };

  return (
    <section className="notificationsList">
      <button className="button" onClick={onRefresh}>Refresh Notifications</button>
      {fetched && notes.map(n => <div key={n.id}>{n.message}</div>)}
    </section>
  );
}

