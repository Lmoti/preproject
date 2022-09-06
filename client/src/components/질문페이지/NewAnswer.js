import styled from "styled-components";
import React from "react";
import BlueButton from "../UI/BlueButton";
import ReactMarkdown from "react-markdown";
import { useState } from "react";

// const Container = styled.div`
//   background-color: #333;
//   padding: 30px 20px;
// `;

function NewAnswer({ id }) {
  const [questionBody, setQuestionBody] = useState("");
  const token = sessionStorage.getItem("jwtToken");

  const submitQuestion = () => {
    fetch(`http://13.125.253.157:8080/api/answers/questions/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        authorization: `${token}`,
      },
      body: JSON.stringify({
        body: questionBody,
      }),
    });
  };

  return (
    <>
      <h1>댓글작성</h1>
      <QuestionBodyTextarea
        // type="text"
        value={questionBody}
        onChange={(e) => setQuestionBody(e.target.value)}
        placeholder="More info about your question."
      >
        {questionBody}
      </QuestionBodyTextarea>
      <BlueButton onClick={submitQuestion}>Post Answer</BlueButton>

      <PreviewArea>
        <ReactMarkdown children={questionBody} />
      </PreviewArea>
    </>
  );
}

export default NewAnswer;

const QuestionBodyTextarea = styled.textarea`
  background: none;
  border: 1px solid #777;
  border-radius: 3px;
  display: block;
  width: 800px;
  box-sizing: border-box;
  padding: 10px;
  height: 200px;
  margin-bottom: 20px;
  font-family: inherit;
`;
const PreviewArea = styled.div`
  padding: 20px;
  background-color: #666;
  border-radius: 5px;
  margin-bottom: 20px;
`;
