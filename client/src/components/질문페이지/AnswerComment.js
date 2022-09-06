import React, { useState } from "react";
import styled from "styled-components";

const AnswerComment = ({ data }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editComment, setEditComment] = useState(data.body);
  const token = sessionStorage.getItem("jwtToken");
  const deleteComment = (id) => {
    fetch(`http://13.125.253.157:8080/api/comments/${id}`, {
      method: "DELETE",
    });
  };

  const editComment1 = (id) => {
    fetch(`http://13.125.253.157:8080/api/comments/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: `${token}`,
      },
      body: JSON.stringify({
        body: editComment,
      }),
    });
  };

  return (
    <div>
      <span>댓글 답글 : </span>

      {!isEdit ? (
        <span>{data.body}</span>
      ) : (
        <AnswerEditTextarea
          value={editComment}
          onChange={(e) => setEditComment(e.target.value)}
        ></AnswerEditTextarea>
      )}

      {!isEdit ? (
        <StyledButton
          onClick={() => {
            setIsEdit(true);
          }}
        >
          답글 수정
        </StyledButton>
      ) : (
        <StyledButton
          onClick={() => {
            setIsEdit(false);
            editComment1(data.id);
          }}
        >
          수정 완료
        </StyledButton>
      )}
      <StyledButton
        onClick={() => {
          deleteComment(data.id);
        }}
      >
        답글 삭제
      </StyledButton>
    </div>
  );
};

export default AnswerComment;
const AnswerEditTextarea = styled.textarea`
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
const StyledButton = styled.button`
  display: block;
  margin-right: 5px;
  background-color: #3e4a52;
  color: #9cc3db;
  padding: 4px;
  border-radius: 5px;
  font-size: 0.9rem;
`;
