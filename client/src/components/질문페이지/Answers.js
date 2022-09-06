import Answer from "./Answer";
import styled from "styled-components";
import AnswerComments from "./AnswerComments";

function Answers({ dataAnswer }) {
  return (
    <StyledDiv>
      {dataAnswer.map((ans) => {
        return (
          <StyledAns key={ans.id}>
            <Answer ans={ans} />
            <AnswerComments comments={ans.comments} />
          </StyledAns>
        );
      })}
    </StyledDiv>
  );
}

export default Answers;

const StyledDiv = styled.div`
  background-color: #5555;
  width: 750px;
  min-height: 500px;
  height: min-content;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 10px 10px 42px 0px rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: space-evenly;
`;
const StyledAns = styled.div`
  background-color: #5555;
  height: min-content;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 10px 10px 42px 0px rgba(0, 0, 0, 0.75);
  display: flex;
  margin: 5px;
  width: 100%;
  color: #ffffff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
`;
