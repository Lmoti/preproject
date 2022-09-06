import React from "react";
import styled from "styled-components";

const IconBookmark = () => {
  return (
    <Container>
      <svg
        aria-hidden="true"
        className="svg-icon iconBookmark"
        width="18"
        height="18"
        viewBox="0 0 18 18"
      >
        <path d="M6 1a2 2 0 0 0-2 2v14l5-4 5 4V3a2 2 0 0 0-2-2H6Zm3.9 3.83h2.9l-2.35 1.7.9 2.77L9 7.59l-2.35 1.7.9-2.76-2.35-1.7h2.9L9 2.06l.9 2.77Z"></path>
      </svg>
    </Container>
  );
};

export default IconBookmark;

const Container = styled.div`
  fill: lightgray;
  margin-top: 1rem;
  cursor: pointer;
`;
