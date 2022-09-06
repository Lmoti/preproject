import styled from "styled-components";
import { Link } from "react-router-dom";
import { useRef } from "react";
// import axios from "axios";
import Logo from "../Logo";

function SignUpPage() {
  const display_name = useRef();
  const email = useRef();
  const password = useRef();
  const handleLogin = async (e) => {
    e.preventDefault();
    const data = {
      display_name: display_name.current.value,
      email: email.current.value,
      password: password.current.value,
    };

    const response = await fetch("http://13.125.253.157:8080/api/members", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
        "Content-Length": 95,
        Host: "localhost:3001",
        Authorization: `${sessionStorage.getItem("Authorization")}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => alert("데이터를 잘 보냈습니다."))
      .catch((err) => console.log(err));
  };

  return (
    <WrapPage>
      <div className="wrap">
        <form>
          <div>
            <LogoDiv>
              <Logo />
            </LogoDiv>
          </div>
          <div className="Wrapper">
            <label htmlFor="InputName">
              <b>DisplayName</b>
            </label>
            <input ref={display_name} type="name" className="form-control" />
            <label htmlFor="InputName">
              <b>Email</b>
            </label>
            <input ref={email} type="email" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="InputPassword">
              <b>Password</b>
            </label>
            <input ref={password} type="password" className="inputForm" />
          </div>
          <Link to="/">
            <button
              type="submit"
              className="btn btn-primary btn-block"
              onClick={handleLogin}
            >
              Sign up
            </button>
          </Link>
          <div className="sign-up">
            Don't have an account? <a href="#">Create One</a>
          </div>
        </form>
      </div>
    </WrapPage>
  );
}

export default SignUpPage;
const WrapPage = styled.div`
  html,
  body {
    height: 100%;
  }
  .wrapper {
    width: 500px;
    height: 50%;
    border: 0px solid #000;
    overflow: hidden;
    margin: 50px auto;
    padding: 10px;
  }

  form {
    width: 250px;
    height: 40%;
    margin: 10px auto;
    background-color: #666;
    border: 2px solid #e6e6e6;
    border-radius: 20px;
    padding: 40px 50px;
  }
  label {
    font-size: 22px;
  }
  .card-title {
    order: 0px solid #000;
    margin-bottom: 5px;
  }
  input {
    display: block;
    padding: 10px 10px;
    border-radius: 5px;
    border-color: #3897f0;
    width: 200px;
    margin: 5px 5px;
  }
  .btn {
    width: 100%;
    background-color: #3897f0;
    border: 1px solid #3897f0;
    padding: 5px 12px;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    border-radius: 3px;
  }

  .login-form {
    width: 330px;
    margin: 20px;
  }

  .sign-up {
    text-align: center;
    padding: 20px 0 0;
  }
`;
const LogoDiv = styled.div`
  svg {
    width: 3rem;
    height: 3rem;
    padding: 20px 20px;
    margin-left: 80px;
  }
`;
