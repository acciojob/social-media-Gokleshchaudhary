import React from "react"; // ✅ Add this
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const UsersList = () => {
  const users = useSelector((state) => state.users);

  return (
    <section>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default UsersList;
