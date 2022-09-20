import styled, { keyframes } from "styled-components";

export const SidebarContainer = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  display: flex;
  z-index: 2;
  width: 100%;
  height: 100%;
  color: white;
  position: fixed;
  background: rgba(0, 0, 0, 0.3);
`;

export const SidebarOpen = keyframes`
  0% { transform: translateX(-250px); }
  100% { transform: translateX(0px); }
`;

export const SidebarMain = styled.div`
  position: absolute;
  font-weight: bold;
  animation: ${SidebarOpen} 0.2s ease-in-out;
  width: 265px;
  height: 100%;
  background: rgb(0, 0, 0);
`;

export const SidebarButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 50px;
  align-items: center;
  margin-right: 20px;
`;

export const LocationTitle = styled.div`
  font-weight: bold;
  margin-left: 30px;
  font-size: 20px;
`;

export const LocationList = styled.ul`
  padding-left: 0px;
`;

export const LocationDiv = styled.div`
  padding-left: 30px;
`;

export const LocationItem = styled.button`
  margin: 5px 20px;
  list-style: circle;
  cursor: pointer;
  background-color: transparent;
  color: white;
  font-size: 1.1em;
  font-weight: bold;
  border: none;
<<<<<<< HEAD

  &:hover {
    background-color: rgb(50, 50, 50);
  }
=======
  &:hover {
    background-color: white;
    color: rgb(50, 50, 50);
  }
  width: 70%;
>>>>>>> upstream/main
`;
