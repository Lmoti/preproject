import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useParams, useNavigate } from "react-router-dom";
import Answers from "./질문페이지/Answers";
import NewAnswer from "./질문페이지/NewAnswer";
import QuestionComments from "./질문페이지/QuestionComments";
import styled from "styled-components";
// Questions 컴포넌트에서 QuestionRow 컴포넌트로 분화시켰습니다!

function QuestionRow() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [dataDetail, setDataDetail] = useState([]);

  useEffect(() => {
    fetch(`http://13.125.253.157:8080/api/questions/${id}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((data) => setDataDetail([data]))
      .catch((error) => console.log("error", error));
  }, [id]);

  return (
    <div>
      <Test2>
        {dataDetail.map((data) => (
          <div key={data.id}>
            <div>{data.title}</div>
            <div className="authorName">작성자 : {data.authorName}</div>
            <ReactMarkdown
              children={data.body}
              remarkPlugins={[remarkGfm]}
            ></ReactMarkdown>

            <button
              onClick={() => {
                navigate(`/edit/${id}`);
              }}
            >
              수정
            </button>
            <QuestionComments data={data.comments} id={data.id} />
            <Answers dataAnswer={data.answers} id={id} />
          </div>
        ))}
      </Test2>
      <NewAnswer id={id} />
    </div>
  );
}
export default QuestionRow;
const Test2 = styled.div`
  margin: 30px 20px 30px 20px;
  padding: 10px;
  font-size: 2rem;
  button {
    display: block;
    margin: 5px;
    background-color: #3e4a52;
    color: #9cc3db;
    padding: 4px;
    border-radius: 5px;
    font-size: 0.9rem;
  }
`;
