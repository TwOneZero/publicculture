import styled from 'styled-components';

export const Login_Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`

export const Login_page_container = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 10px;
    width: 500px;
    height: 500px;
  `;

export const Login_text = styled.div`
    margin: 70px 0;
    font-size: 24px;
    font-weight: 1000;
  `;

export const Login_form_container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 260px;
  `;

export const Input_Email = styled.input`
    width: 400px;
    height: 50px;
    border: 1px solid lightgrey;
    outline: none;
    margin-bottom: 10px;
    padding-left: 10px;
    &:focus {
      border: 1px solid grey;
    }
  `;

export const Input_PW = styled.input`
    width: 400px;
    height: 50px;
    border: 1px solid lightgrey;
    outline: none;
    margin-bottom: 10px;
    padding-left: 10px;
    &:focus{
      border: 1px solid grey;
    }
`;

export const Login_btn = styled.button`
    width: 413px;
    height: 50px;
    background-color: black;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 15px;
    &:hover {
      cursor: pointer;
    }
    margin-top: 5px;
  `;