import { useState } from "react";
import styled from "styled-components";

function Answer({ ans }) {
  const [isEdit, setIsEdit] = useState(false);
  const [editAnswer, setEditAnswer] = useState(ans.body);
  const [isComment, setIsComment] = useState(false);
  const [comment, setComment] = useState("");
  const token = sessionStorage.getItem("jwtToken");

  const deleteAnswer = (id) => {
    fetch(`http://13.125.253.157:8080/api/answers/${id}`, {
      method: "DELETE",
    });
  };

  const editAnswer1 = (id) => {
    fetch(`http://13.125.253.157:8080/api/answers/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        authorization: `${token}`,
      },
      body: JSON.stringify({
        body: editAnswer,
      }),
    });
  };
  const newComment = (id) => {
    fetch(`http://13.125.253.157:8080/api/comments/answers/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        authorization: `${token}`,
      },
      body: JSON.stringify({
        body: comment,
      }),
    });
  };
  return (
    <Contents>
      {!isEdit ? (
        <span>댓글 : {ans.body}</span>
      ) : (
        <AnswerEditTextarea
          value={editAnswer}
          onChange={(e) => setEditAnswer(e.target.value)}
        ></AnswerEditTextarea>
      )}

      <StyledButton
        onClick={() => {
          deleteAnswer(ans.id);
        }}
      >
        댓글삭제
      </StyledButton>

      {!isEdit ? (
        <StyledButton
          onClick={() => {
            setIsEdit(true);
          }}
        >
          댓글수정
        </StyledButton>
      ) : (
        <StyledButton
          onClick={() => {
            setIsEdit(false);
            editAnswer1(ans.id);
          }}
        >
          수정완료
        </StyledButton>
      )}
      {!isComment ? (
        <StyledButton
          onClick={() => {
            setIsComment(true);
          }}
        >
          답글달기
        </StyledButton>
      ) : (
        <>
          <AnswerEditTextarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></AnswerEditTextarea>
          <StyledButton
            onClick={() => {
              setIsComment(false);
              newComment(ans.id);
            }}
          >
            작성완료
          </StyledButton>
        </>
      )}
    </Contents>
  );
}

export default Answer;
const AnswerEditTextarea = styled.textarea`
  background: #fff;
  opacity: 0.4;
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

const StyledButton = styled.button`
  display: block;
  margin-right: 5px;
  background-color: #3e4a52;
  color: #9cc3db;
  padding: 4px;
  border-radius: 5px;
  font-size: 0.9rem;
`;
const Contents = styled.div`
  span {
    font-size: 2rem;
    display: block;
    font-weight: 300;
    margin-top: 4px;
  }
`;
