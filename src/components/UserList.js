import React, { useEffect } from "react";

/* Importamos useContext para traer nuestras funciones */
import { useContext } from "react";

/* UserContext recordemos que engloba todo nuestras funciones asi que lo traemos */
import UserContext from "../context/User/UserContext";

const UserList = () => {
  const { users, getUsers, getProfile } = useContext(UserContext);

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className="list-group h-100">
      {users.map((user) => (
        <a
          key={user.id}
          onClick={() => getProfile(user.id)}
          className="list-group-item list-group-item-action d-flex flex-row justify-start
          align-items-center  "
          href="#!"
        >
          <img
            className="ing-fluid mr-4 rounded-circle"
            src={user.avatar}
            alt=""
          />
          <p>{`${user.first_name} ${user.last_name}`}</p>
        </a>
      ))}
    </div>
  );
};

export default UserList;
