import styled from "styled-components";
import IconGlobe from "./SVG/IconGlobe";
import { Link } from "react-router-dom";
function SideBar() {
  // (1) 포지션 속성 => z-index 대안으로 대신 줌
  // z-index 사용시 hover 사용이 안되는 버그가 일어납니다

  return (
    <SideBarCont>
      <div className="sidebar-container">
        <UlPanel className="sidebar">
          <Link to="/">
            <li className="panel">Home</li>
          </Link>
          <Link to="/">
            <li className="panel">Public</li>
          </Link>
          <Link to="/tags">
            <li className="panel">Tags</li>
          </Link>
          <Link to="/">
            <li className="panel">
              <IconGlobe />
              Question
            </li>
          </Link>
          <Link to="/users">
            <li className="panel">Users</li>
          </Link>
          <Link to="/">
            <li className="panel">Companies</li>
          </Link>
        </UlPanel>
      </div>
    </SideBarCont>
  );
}
export default SideBar;
const SideBarCont = styled.div`
  float: left;
  position: sticky;
  padding-right: 200px;
  background-color: #555;
  width: 100px;
  height: 100vh;
  padding-top: 30px;
  padding-left: 50px;
  left: 0;
  top: 0;
`;
const UlPanel = styled.ul`
  .sidebar {
    border: 0 none;
    box-shadow: none;
    margin: 0;
    background: inherit;
  }
  .panel {
    background-color: #555;
    border-bottom: solid 2px #555;
    color: #fff;
    font-size: 30px;
    height: 64px;
    width: fit-content;
    text-align: center;
    line-height: 64px;
    text-decoration: none;
    &:hover {
      background-color: rgba(5, 5, 5, 0.2);
      border-right: solid 10px orange;
      border-radius: 7px;
      border-bottom: none;
      padding: 5px;
    }
  }
  a {
    text-decoration-line: none;
  }
`;
