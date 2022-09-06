import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";
import Header1 from "../UI/Header1";
import BlueButton from "../UI/BlueButton";
import ReactMarkdown from "react-markdown";
import { useState, useEffect } from "react";
import TagInput from "../UI/TagInput";
import setAuthorizationToken from "../utils/setAuthorizationToken";

function NewEditor() {
  const [questionTitle, setQuestionTitle] = useState("");
  const [questionBody, setQuestionBody] = useState("");
  const token = sessionStorage.getItem("jwtToken");
  const [tags, setTags] = useState([]);
  const [tagData, setTagData] = useState([]);

  useEffect(() => {
    fetch(`http://13.125.253.157:8080/api/tags`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((data) => setTags(data.data))
      .catch((error) => console.log("error", error));
  }, []);
  console.log(tagData);
  const submitQuestion = () => {
    fetch("http://13.125.253.157:8080/api/questions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        authorization: `${token}`,
      },
      body: JSON.stringify({
        title: questionTitle,
        body: questionBody,
        tags: tagData,
      }),
    });
    // e.preventDefault();
    // axios.post("http://180.71.242.96:9090/api/questions", {
    //   body: JSON.stringify({
    //     title: title.current.value,
    //     body: body.current.value,
    //   }),
    // });
  };
  return (
    <Container>
      <Header1 style={{ marginBottom: "20px" }}>Ask a public questions</Header1>
      <QuestionTitleInput
        // ref={title}
        type="text"
        value={questionTitle}
        onChange={(e) => setQuestionTitle(e.target.value)}
        placeholder="Title of your question"
      ></QuestionTitleInput>
      <QuestionBodyTextarea
        // ref={body}
        type="text"
        value={questionBody}
        onChange={(e) => setQuestionBody(e.target.value)}
        placeholder="More info about your question."
      >
        {questionBody}
      </QuestionBodyTextarea>
      <Link to="/">
        <BlueButton
          onClick={() => {
            setAuthorizationToken(token);
            submitQuestion();
            console.log(token);
          }}
        >
          Post Question
        </BlueButton>
      </Link>
      <PreviewArea>
        <ReactMarkdown children={questionBody} />
      </PreviewArea>
      <TagInput
        tags={tags}
        tagData={tagData}
        setTagData={setTagData}
      ></TagInput>
    </Container>
  );
}

export default NewEditor;

const Container = styled.div`
  background-color: #333;
  padding: 30px 20px;
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
  padding: 10px 20px;
  background-color: #666;
  border-radius: 5px;
  margin-bottom: 20px;
`;
