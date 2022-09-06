import React from "react";
import styled from "styled-components";

const User = ({ users }) => {
  return (
    <Container>
      {users.map((user) => (
        <div key={user.id}>
          <Container2>{user.email}</Container2>
          <div>{user.display_name}</div>
          <div>reputation : {user.reputation}</div>
          <div>title : {user.title}</div>
        </div>
      ))}
    </Container>
  );
};

export default User;
const Container = styled.div`
  margin-top: 20px;
`;
const Container2 = styled.div`
  margin-top: 20px;
`;
