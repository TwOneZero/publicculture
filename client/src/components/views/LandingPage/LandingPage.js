import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import axios from "axios";
import Auth from "../../../hoc/auth";
import EventCard from "../EventCard/EventCard"
//import EventPage from '../EventPage/EventPage';

function LandingPage() {
  const params = useParams();
  const [postings, setPostings] = useState([]);
  useEffect(() => {
    axios.get(`/api/post`).then((res) => {
      //setPostings(response);
      console.log(res);
    });
  }, [params.id]);

  const navigate = useNavigate();
  const onClick = () => {
    axios.get("/api/users/logout").then((res) => {
      if (res.data.success) {
        navigate("/login");
      } else {
        alert("이미 로그아웃 되어있습니다.");
      }
    });
  };

  const MoveToLogin = () => {
    axios.get("api/users/auth").then((res) => {
      if (res.data.isAuth) {
        alert("이미 로그인 되어 있음");
      } else {
        navigate("/login");
      }
    });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      {postings.map((posting, index) => {
        return <EventCard {...posting} />;
      })}
      {/* <h2>시작 페이지</h2>
      <button onClick={MoveToLogin}>로그인하기</button>
      <button onClick={onClick}>logout</button>
      <EventPage /> */}
    </div>
  );
}

export default Auth(LandingPage, null);
