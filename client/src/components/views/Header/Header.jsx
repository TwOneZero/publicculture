import React from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";

const Menu_container = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-left: auto;
  margin-right: 50px;
  margin-top: 10px;
`;

const Header_container = styled.div`
  display: flex;
  flex-direction: column;
  //justify-content: center;
  align-items: center;
  height: 200px;
  background-color: #ffcb6b;
`;

const Header_logo = styled.div`
  font-family: "YUniverse-B";
  color: #faebd7;
  font-size: 60px;
  margin: 15px 5px;
  cursor: pointer;
  text-shadow: 1px 1px 1px #000;
`;

const Login_btn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffcb6b;
  width: 70px;
  height: 50px;
  border-radius: 0px 0px 100px 100px;
  border: 2px solid #faebd7;
  background-color: #faebd7;
  font-size: 17px;
  font-family: "YUniverse-B";
  text-shadow: 1px 1px 1px gray;
  margin-left: 2px;
  cursor: pointer;
`;

const Mypage_btn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffcb6b;
  width: 70px;
  height: 50px;
  border-radius: 0px 0px 100px 100px;
  border: 2px solid #faebd7;
  background-color: #faebd7;
  font-size: 17px;
  font-family: "YUniverse-B";
  text-shadow: 1px 1px 1px gray;
  margin-left: 2px;
  cursor: pointer;
`;

const Newposting_btn = styled.div`
  display: flex;
  align-items: center;
  color: #ffcb6b;
  width: 70px;
  height: 50px;
  border-radius: 0px 0px 100px 100px;
  border: 2px solid #faebd7;
  background-color: #faebd7;
  font-size: 17px;
  font-family: "YUniverse-B";
  text-shadow: 1px 1px 1px gray;
  margin-left: 2px;
  text-align: center;
  cursor: pointer;
`;

function Header() {
  const navigate = useNavigate();
  const onLogoCliked = () => {
    navigate("/");
  };

  const onLoginbtnCliked = () => {
    navigate("/login");
  };

  return (
    <Header_container>
      <Menu_container>
        <Newposting_btn>New Post</Newposting_btn>
        <Mypage_btn>My page</Mypage_btn>

        <Login_btn onClick={onLoginbtnCliked}>Login</Login_btn>
      </Menu_container>

      <Header_logo type="button" onClick={onLogoCliked}>
        Public Culture
      </Header_logo>
    </Header_container>
  );
}

export default Header;
