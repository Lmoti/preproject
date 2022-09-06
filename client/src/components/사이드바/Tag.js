import React from "react";
import styled from "styled-components";

const Tag = ({ tags }) => {
  return (
    <Container>
      {tags.map((tag) => (
        <div key={tag.id}>
          <Container2>{tag.name}</Container2>
          <div>information : {tag.information}</div>
        </div>
      ))}
    </Container>
  );
};

export default Tag;
const Container = styled.div`
  margin-top: 20px;
`;
const Container2 = styled.div`
  margin-top: 20px;
`;
