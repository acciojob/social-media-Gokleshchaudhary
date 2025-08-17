import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function UsersList() {
  const users = useSelector((state) => state.users);
  return (
    <section>
      <h2>Users</h2>
      <ul>
        {users.map((u) => (
          <li key={u.id}>
            <Link to={`/users/${u.id}`}>{u.name}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
