import styled from "styled-components";
// import BlueButton from "../UI/BlueButton";
// import { Link } from "react-router-dom";
import NewEditor from "./NewEditor";
// import EditorBox from "./EditorBox";
function AskPage() {
  const Container = styled.div`
    padding: 30px 20px;
  `;
  // const QuestionTitleInput = styled.input`
  //   background: none;
  //   border: 1px solid #777;
  //   border-radius: 3px;
  //   display: block;
  //   width: 100%;
  //   box-sizing: border-box;
  //   padding: 20px;
  //   color: #fff;
  // `;

  // const QuestionBodyTextarea = styled.textarea`
  //   background: none;
  //   border: 1px solid #777;
  //   border-radius: 3px;
  //   display: block;
  //   width: 100%;
  //   box-sizing: border-box;
  //   padding: 10px;
  //   height: 200px;
  //   margin-bottom: 20px;
  //   color: #fff;
  // `;

  return (
    <Container>
      {/* <Header1 style={{ marginBottom: "20px" }}>Ask a public questions</Header1> */}
      {/* <QuestionTitleInput type="text" placeholder="Title of your question" />
      <QuestionBodyTextarea placeholder="More info about your question."></QuestionBodyTextarea> */}

      <NewEditor />
      {/* <EditorBox /> */}
    </Container>
  );
}

export default AskPage;
