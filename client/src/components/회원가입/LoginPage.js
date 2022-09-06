import styled from "styled-components";
import { useRef } from "react";
import Logo from "../Logo";
import axios from "axios";
import setAuthorizationToken from "../utils/setAuthorizationToken";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  const email = useRef();
  const password = useRef();

  const handleLogin = async (e) => {
    e.preventDefault();
    const data = {
      email: email.current.value,
      password: password.current.value,
    };

    axios
      .post(
        "http://13.125.253.157:8080/api/members/login",
        JSON.stringify({
          email: email.current.value,
          password: password.current.value,
        })
      )
      .then((res) => {
        console.log(res);
        const token = res.headers.authorization;
        console.log(token);
        // sessionStorage.setItem("user_email", data.email);
        sessionStorage.setItem("jwtToken", token);
        setAuthorizationToken(token);
        // document.location.href = "/";
        navigate("/");
      });
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
            <label htmlFor="InputEmail">
              <b>Email</b>
            </label>
            <input ref={email} type="email" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="InputPassword">
              <b>Password</b>
            </label>
            <a href="#">Forgot password?</a>
            <input ref={password} type="password" className="inputForm" />
          </div>
          <button
            type="submit"
            className="btn btn-primary btn-block"
            onClick={handleLogin}
          >
            Log in
          </button>
          <div className="sign-up">
            Don't have an account? <a href="#">Create One</a>
          </div>
        </form>
      </div>
    </WrapPage>
  );
}

export default LoginPage;
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
