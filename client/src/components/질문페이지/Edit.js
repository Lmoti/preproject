import styled from "styled-components";
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import BlueButton from "../UI/BlueButton";
import ReactMarkdown from "react-markdown";
import { useState } from "react";

function Edit({ data }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const editData = data.filter((data) => data.id === Number(id));
  const [questionTitle, setQuestionTitle] = useState(editData[0].title);
  const [questionBody, setQuestionBody] = useState(editData[0].body);
  const token = sessionStorage.getItem("jwtToken");
  const submitQuestion = () => {
    fetch(`http://13.125.253.157:8080/api/questions/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        authorization: `${token}`,
      },
      body: JSON.stringify({
        title: questionTitle,
        body: questionBody,
      }),
    });
  };

  return (
    <Container>
      <Whiteh1>새로고침을 절대 하지 마시오</Whiteh1>
      <QuestionTitleInput
        type="text"
        value={questionTitle}
        onChange={(e) => setQuestionTitle(e.target.value)}
        // placeholder="Title of your question"
      />
      <QuestionBodyTextarea
        // type="text"
        value={questionBody}
        onChange={(e) => setQuestionBody(e.target.value)}
        // placeholder="More info about your question."
      >
        {questionBody}
      </QuestionBodyTextarea>
      <BlueButton
        onClick={() => {
          submitQuestion();
          navigate(`/${id}`);
        }}
      >
        Post Question
      </BlueButton>

      <PreviewArea>
        <ReactMarkdown children={questionBody} />
      </PreviewArea>
    </Container>
  );
}

export default Edit;
const Container = styled.div`
  background-color: #333;
  padding: 30px 20px;
`;
const Whiteh1 = styled.h1`
  color: white;
`;
const QuestionTitleInput = styled.input`
  background: none;
  border: 1px solid #777;
  border-radius: 3px;
  display: block;
  width: 800px;
  box-sizing: border-box;
  padding: 20px;
  color: #fff;
`;

const QuestionBodyTextarea = styled.textarea`
  background: none;
  border: 1px solid #777;
  border-radius: 3px;
  display: block;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  height: 200px;
  margin-bottom: 20px;
  color: #fff;
  font-family: inherit;
`;
const PreviewArea = styled.div`
  padding: 20px;
  background-color: #666;
  border-radius: 5px;
  margin-bottom: 20px;
`;
