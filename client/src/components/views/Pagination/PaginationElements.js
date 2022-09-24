import styled from "styled-components";

export const PageUlContainer = styled.div`
  width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PageUl = styled.ul`
  float: left;
  list-style: none;
  text-align: center;
  border-radius: 3px;
  color: black;
  padding: 1px;
  border-top: 3px solid #186ead;
  border-bottom: 3px solid #186ead;
  background-color: #e0f2f7;
`;

export const PageLi = styled.li`
  display: inline-block;
  font-size: 17px;
  font-weight: 600;
  padding: 5px;
  border-radius: 5px;
  width: 25px;
  &:hover {
    cursor: pointer;
    color: white;
    background-color: #263a6c;
  }
  z-index: 1;
  &:focus::after {
    color: white;
    background-color: #263a6c;
  }
`;

export const PageSpan = styled.span`
  &:hover::after,
  &:focus::after {
    border-radius: 100%;
    color: white;
    background-color: #263a6c;
  }
`;
