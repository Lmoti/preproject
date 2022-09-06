import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Question({ data, questionDelete }) {
  const navigate = useNavigate();

  return (
    <>
      <QuestionTitleArea>
        <Test>
          <QuestionStat>
            0<span>votes</span>
          </QuestionStat>
          <QuestionStat>
            {data.answers.length}
            <span>answer</span>
          </QuestionStat>
          <QuestionStat>
            {data.view}
            <span>views</span>
          </QuestionStat>
        </Test>
        <Test2>
          <h1
            onClick={() => {
              navigate(`/${data.id}`);
            }}
          >
            {data.title}
          </h1>
          <div>작성자 : {data.authorName}</div>
          <button
            onClick={() => {
              questionDelete(data.id);
            }}
          >
            ❌
          </button>
          <div>{data.body}</div>
          {data.tags.map((tag, i) => (
            <span key={i}>
              <Tag>{tag.name}</Tag>
            </span>
          ))}
        </Test2>
      </QuestionTitleArea>
    </>
  );
}
export default Question;
const QuestionStat = styled.div`
  text-align: center;
  display: inline-block;
  font-size: 1.2rem;
  color: #aaa;
  margin-top: 7px;
  span {
    font-size: 0.7rem;
    display: block;
    font-weight: 300;
    margin-top: 4px;
  }
`;
//dd
const QuestionTitleArea = styled.div`
  padding: 0 30px;
  text-decoration: none;
  color: #3ca4ff;
  font-size: 1.1rem;
  display: flex;
  margin-bottom: 5px;
`;

const Tag = styled.span`
  display: inline-block;
  margin-right: 5px;
  background-color: #3e4a52;
  color: #9cc3db;
  padding: 4px;
  border-radius: 5px;
  font-size: 0.9rem;
`;
const Test = styled.div`
  display: flex;
  flex-direction: column;
`;
const Test2 = styled.div`
  margin-left: 30px;
`;
