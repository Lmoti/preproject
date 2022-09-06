import { useState } from "react";
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

function QuestionComment({ data }) {
  const [isEdit, setIsEdit] = useState(false);
  const [editComment, setEditComment] = useState(data.body);

  const editComment1 = (id) => {
    fetch(`http://13.125.253.157:8080/api/comments/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
      Authorization: `${sessionStorage.getItem("Authorization")}`,
      body: JSON.stringify({
        body: editComment,
      }),
    });
  };

  const deleteComment = (id) => {
    fetch(`http://13.125.253.157:8080/api/comments/${id}`, {
      method: "DELETE",
    });
  };

  return (
    <>
      {!isEdit ? (
        <>
          <span>{data.body}</span>
          <button
            onClick={() => {
              setIsEdit(true);
            }}
          >
            답글 수정
          </button>
          <button
            onClick={() => {
              deleteComment(data.id);
            }}
          >
            답글 삭제
          </button>
        </>
      ) : (
        <>
          <CommentEditTextarea
            value={editComment}
            onChange={(e) => setEditComment(e.target.value)}
          ></CommentEditTextarea>
          <button
            onClick={() => {
              setIsEdit(false);
              editComment1(data.id);
            }}
          >
            수정 완료
          </button>
        </>
      )}
    </>
  );
}

export default QuestionComment;
