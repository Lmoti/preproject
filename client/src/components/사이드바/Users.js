import React, { useEffect, useState } from "react";
import User from "./User";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(`http://13.125.253.157:8080/api/members?page=1&size=10&tab=&search=`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((data) => setUsers(data.data))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div>
      <User users={users} />
    </div>
  );
};

export default Users;
