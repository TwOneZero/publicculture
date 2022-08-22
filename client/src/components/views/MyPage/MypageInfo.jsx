import React, { useEffect, useState } from "react";
import { auth } from "../../../_actions/user_action";
import { useDispatch } from "react-redux";
import {
  Mypage_container,
  Myprofile_info,
  Page_area_info,
  Nickname_container_info,
  Line_info,
  Nickname_info,
  EmailContainer,
  Email,
  Genre_container_info,
  Genre,
} from './MypageElements';


const MypageInfo = ({ nickname, about_me, genres }) => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    dispatch(auth()).then((res) => {
      setUserData(res.payload);
    });
  }, [setUserData, dispatch]);
  return (
    <>
      <Mypage_container>
        <Myprofile_info>My Profile</Myprofile_info>
        <Page_area_info>
          <Nickname_container_info>
            Nickname
            <Line_info></Line_info>
            {userData ? <Nickname_info>{userData.name}</Nickname_info> : ""}
          </Nickname_container_info>
          <EmailContainer>
            E-mail
            <Line_info></Line_info>
            {userData ? <Email>{userData.email}</Email> : ""}
          </EmailContainer>
          <Genre_container_info>
            Prefer Genre
            <Line_info></Line_info>
            {userData ? <Genre>{userData.genre}</Genre> : ""}
          </Genre_container_info>
        </Page_area_info>
      </Mypage_container>
    </>
  );
};

export default MypageInfo;
