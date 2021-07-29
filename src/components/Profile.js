import React from "react";
import UserContext from "../context/User/UserContext";
import { useContext } from "react";

const Profile = () => {
  const { selectedUser } = useContext(UserContext);
  return (
    <div>
      {selectedUser ? (
        <div className="card card-body text-center">
          <img className="card-img-top rounded-circle m-auto img-fluid" style={{width: 180}} src={selectedUser.avatar} alt="" />
          <h1>{`${selectedUser.first_name} ${selectedUser.last_name}`}</h1>
          <h3>email:{ selectedUser.email}</h3>
        </div>
      ) : (
        <h1>No user Selected</h1>
      )}
    </div>
  );
};

export default Profile;
