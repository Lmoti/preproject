import axios from "axios";
import { confirmAlert } from "react-confirm-alert";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function LogoutBtn() {
  const navigate = useNavigate();
  const logout = (e) => {
    e.preventDefault();

    const jwtToken = sessionStorage.getItem("jwtToken");
    sessionStorage.removeItem("jwtToken");

    const instance = axios.create({
      baseURL: "http://13.125.253.157:8080/api",
    });
    instance.defaults.headers.common["Authorization"] = jwtToken;
    instance
      .options("/members/logout")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    navigate("/");
  };

  return (
    <BlueButton>
      <button onClick={logout}>Logout</button>
    </BlueButton>
  );
}

export default LogoutBtn;
const BlueButton = styled.div`
  display: inline-block;
  background-color: #378ad3;
  margin-right: 40px;
  border: 0;
  margin-top: 20px;
  border-radius: 5px;
  padding: 12px 10px;
  s &:hover {
    background-color: skyblue;
  }
`;
