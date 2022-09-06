import styled from "styled-components";
import { Link } from "react-router-dom";
import Question from "./Question";
// 페이지네이션
import "../Paging.css";
import Pagination from "react-js-pagination";

function Questions({
  data,
  questionDelete,
  page,
  handlePageChange,
  size,
  totalDataLength,
  setFilter,
  setSort,
}) {
  return (
    <>
      <QuestionRow>
        <h1>Top Questions</h1>
        <div id="filter">
          <BlueButton
            onClick={() => {
              setFilter("NoAnswers");
            }}
          >
            NoAnswer
          </BlueButton>
          <BlueButton
            onClick={() => {
              setFilter("NoAcceptedAnswers");
            }}
          >
            NoAcceptedAnswer
          </BlueButton>
          <BlueButton
            onClick={() => {
              setSort("MostViewed");
            }}
          >
            MostViewed
          </BlueButton>
          <BlueButton
            onClick={() => {
              setFilter("");
              setSort("");
            }}
          >
            filter취소
          </BlueButton>
        </div>
        <Link to="/ask">
          <BlueButton>Ask Questions</BlueButton>
        </Link>
        {data.map((data) => (
          <QuestionDiv key={data.id}>
            <div className="wrapper">
              <QuestionTitleArea>
                <div>
                  <Question data={data} questionDelete={questionDelete} />
                </div>

                <WhoAndWhen>
                  asked 2 mins ago
                  <UserLink>user</UserLink>
                </WhoAndWhen>
              </QuestionTitleArea>
            </div>
          </QuestionDiv>
        ))}
        <Pagination
          activePage={page}
          itemsCountPerPage={size}
          totalItemsCount={totalDataLength}
          pageRangeDisplayed={5}
          prevPageText={"‹"}
          nextPageText={"›"}
          onChange={handlePageChange}
        />
      </QuestionRow>
    </>
  );
}

export default Questions;
const QuestionDiv = styled.div`
  display: block;
  width: 100%;
  .wrapper {
    background-color: rgba(255, 255, 255, 0.1);
    padding: 15px 15px 10px;
    display: grid;
    /* grid-template-columns: repeat(3, minmax(min-content, 60px)) 1fr; */
    border-top: 1px solid #555;
  }
`;
const QuestionRow = styled.div`
  width: 100vw;
  margin-left: 5px;
  margin-right: 5px;
`;
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
const QuestionTitleArea = styled.div`
  padding: 0 30px;
  text-decoration: none;
  color: #3ca4ff;
  font-size: 1.1rem;
  display: block;
  margin-bottom: 5px;
`;

const QuestionLink = styled.a`
  text-decoration: none;
  color: #3ca4ff;
  font-size: 1.1rem;
  display: block;
  margin-bottom: 5px;
`;

const WhoAndWhen = styled.div`
  display: inline-block;
  color: #aaa;
  font-size: 0.8rem;
  float: right;
  padding: 10px 0;
`;
const UserLink = styled.a`
  color: #3ca4ff;
`;
const BlueButton = styled.button`
  margin: 10px;
  background-color: #378ad3;
  color: #fff;
  border: 0;
  border-radius: 5px;
  padding: 12px 10px;
  text-decoration: none;
  &:hover {
    background-color: skyblue;
  }
  #filter {
    background-color: #f5cac2;
    margin: 10px;
    color: #fff;
    border: 0;
    border-radius: 5px;
    padding: 12px 10px;
    text-decoration: none;
    &:hover {
      background-color: skyblue;
    }
  }
`;
