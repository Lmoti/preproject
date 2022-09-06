import "./App.css";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Questions from "./components/Questions";
import LoginPage from "./components/회원가입/LoginPage";
import SideBar from "./components/SideBar";
import AskPage from "./components/질문페이지/AskPage";
import QuestionRow from "./components/QuestionRow";
import Edit from "./components/질문페이지/Edit";
import SignUpPage from "./components/회원가입/SignUpPage";
import Users from "./components/사이드바/Users";
import Tags from "./components/사이드바/Tags";

function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(3);
  const [totalDataLength, setTotalDataLength] = useState(0);
  const [filter, setFilter] = useState("");
  const [searchContent, setSearchContent] = useState("");
  const [sort, setSort] = useState("");
  // useEffect(() => {
  //   if (sessionStorage.getItem("user_email") === null) {
  //     console.log("로그인X");
  //   } else {
  //     console.log("로그인O");
  //   }
  // });

  // 프록시 활용
  // package.json에 "proxy": "http://localhost:9090" 추가
  // const responseHandler = ({ data }) => {
  //   setData([...data]);
  //   return data;
  // };
  // const onProxyHandler = () => {
  //   axios.get("/api/questions").then(responseHandler);
  // };
  useEffect(() => {
    fetch(
      `http://13.125.253.157:8080/api/questions?page=${page}&size=${size}&filters=${filter}&title=${searchContent}&body=${searchContent}&sort=${sort}`
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((data) => {
        setData([...data.data]);
        setTotalDataLength(data.pageInfo.totalElements);
      })
      .catch((error) => console.log("error", error));
  }, [page, size, filter, searchContent, sort]);

  const questionDelete = (id) => {
    fetch(`http://13.125.253.157:8080/api/questions/${id}`, {
      method: "DELETE",
    });
  };

  const handlePageChange = (page) => {
    setPage(page);
  };

  const GlobalStyles = createGlobalStyle`
    ${reset}
    body{
      background: #2d2d2d;
      color:#fff;
      font-family: Roboto,  sans-serif;
    }
    b,strong{
      font-weight:700;
    }
    p{
      font-size: 1.3rem;
    margin-bottom: 10px;
    }
    blockquote{
      background-color:rgba(0,0,0.1);
      padding: 15px;
      border-radius: 4px;
    }
    h1,h2{
      margin-top: 10px;
      margin-bottom: 20px;
    }
    h1{
      font-size:1.8rem;
    }
    h2{
      font-size:1.6rem;
    }

  `;
  return (
    <div>
      <GlobalStyles />
      <Header
        searchContent={searchContent}
        setSearchContent={setSearchContent}
      ></Header>
      <Main>
        <SideBar></SideBar>
        <Routes>
          <Route path="/ask" element={<AskPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/signup" element={<SignUpPage />}></Route>
          <Route path="/users" element={<Users />}></Route>
          <Route path="/tags" element={<Tags />}></Route>
          <Route
            path="/"
            element={
              <Questions
                data={data}
                questionDelete={questionDelete}
                page={page}
                size={size}
                handlePageChange={handlePageChange}
                totalDataLength={totalDataLength}
                setFilter={setFilter}
                setSort={setSort}
              />
            }
          ></Route>
          <Route path="/:id" element={<QuestionRow />}></Route>
          <Route path="/edit/:id" element={<Edit data={data} />}></Route>
          {/* <Route path="/counter" element={<Counter data={data} />}></Route> */}
        </Routes>
      </Main>
      {/* 프록시 테스트용 버튼
      <button onClick={onProxyHandler}>데이터 조회</button> */}

      <Footer></Footer>
    </div>
  );
}

export default App;
const Main = styled.div`
  display: flex;
`;
