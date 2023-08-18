import styled, { keyframes } from 'styled-components';

export const SidebarContainer = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  display: flex;
  flex-direction: row;
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

export const Sidepart = styled.div`
  width: 100%;
  height: 100%;
`;

export const SidebarButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 50px;
  align-items: center;
  margin-right: 20px;
`;

export const SidebarcloseBtn = styled.button`
  cursor: pointer;
  margin-right: 5px;
  margin-top: 10px;
  background-color: transparent;
  color: white;
  font-size: 25px;
  border: none;
`;

export const LocationTitle = styled.div`
  font-weight: bold;
  margin: 20px 0px 0px 30px;
  font-size: 20px;
`;

export const LocationList = styled.ul`
  padding-left: 0px;
  width: 300px;
`;

export const LocationDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-left: 10px;
`;

export const LocationItem = styled.button`
  margin: 5px 5px; /* Adjust margin for spacing */
  list-style: circle;
  cursor: pointer;
  background-color: transparent;
  color: white;
  font-size: 1.1em;
  font-weight: bold;
  border: none;
  &:hover {
    background-color: #e0f2f7;
    color: rgb(50, 50, 50);
  }
  width: 100px; /* Adjust width as needed */
  white-space: normal;
  word-wrap: break-word;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: auto;
`;
