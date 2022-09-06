import { useState } from "react";
import QuestionComment from "./QuestionComment";
import styled from "styled-components";

const CommentEditTextarea = styled.textarea`
  background: none;
  border: 1px solid #777;
  border-radius: 3px;
  display: block;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  height: 200px;
  margin-bottom: 20px;
  font-family: inherit;
`;

function QuestionComments({ data, id }) {
  const [isComment, setIsComment] = useState(false);
  const [comment, setComment] = useState("");

  const newComment = (id) => {
    fetch(`http://13.125.253.157:8080/api/comments/questions/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        Authorization: `${sessionStorage.getItem("Authorization")}`,
      },
      body: JSON.stringify({
        body: comment,
      }),
    });
  };
  return (
    <div>
      <h1>질문 답글</h1>
      {!isComment ? (
        <button
          onClick={() => {
            setIsComment(true);
          }}
        >
          답글 달기
        </button>
      ) : (
        <>
          <CommentEditTextarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></CommentEditTextarea>
          <button
            onClick={() => {
              setIsComment(false);
              newComment(id);
            }}
          >
            작성 완료
          </button>
        </>
      )}
      {data.map((data) => (
        <div key={data.id}>
          <QuestionComment data={data} />
        </div>
      ))}
    </div>
  );
}

export default QuestionComments;
