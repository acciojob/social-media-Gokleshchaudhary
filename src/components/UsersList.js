import React from 'react';
import { usersState } from '../data/users';
import { useSyncExternalStore } from 'use-sync-external-store';
import { Link } from 'react-router-dom';

export default function UsersList() {
  const users = useSyncExternalStore(usersState.subscribe, usersState.get);
  return (
    <ul>
      {users.map(u => (
        <li key={u.id}>
          <a href={`/users/${u.id}`}>{u.name}</a>
        </li>
      ))}
    </ul>
  );
}

