import styled, { css } from 'styled-components';

export const Container = styled.div`
    width: 1500px;
    margin: 50px auto 0;
    height: 50px;
    background: #fff;
`

export const ContainerH1 = styled.h1`
    color: #000;
`

export const Line = styled.div`
    border-bottom: 1px solid #000;
    width: 1500px;
`

export const TextContainer = styled.div`
    width: 1500px;
    margin: 30px auto 0;
`

export const Text = styled.h3`

`


export const Frame = styled.div`
    width: 1500px;
    height: 1001px;
    border: 1px solid lightgrey;
    margin: 0 auto 0;
    box-shadow: 2px 2px 2px #eee;
`

export const Header = styled.div`
    font-size: 18px;
    font-weight: bold;
    padding: 10px 10px 5px 10px;
    display: flex;
    justify-content: space-between;
    background-color: #fff;
`

export const Button = styled.div`
    cursor: pointer;
`

export const Body = styled.div`
    width: 100%;
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    border: 1px solid #000;
    box-sizing: border-box;
`

export const Day_week_container = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const Day_container = styled.div`
    display: flex;
    flex-wrap: wrap;

`

export const Day_week = styled.div`
    width: 14%;
    height: 46px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 16px;
    border: 1px solid #000;
`

export const TopContainer = styled.a`
    display: block;
    position: relative;

`

export const SubContainer = styled.div`
    width: 14%;
    height: 177px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 16px;
    border: 1px solid #000;
    ${props =>
        props.isToday &&
        css`
        border: 1px solid #eee;
        `};

    ${props =>
        props.isSelected &&
        css`
        background-color: #eee;
        `};
`

export const Day = styled.span`
    position: absolute;
    top: -73px;
    
    
    font-size: 30px;
    line-height: 1;
`


export const AllEvent = styled.span`
position: absolute;
width: 100px;
left: 85px;
top: -70px;
font-size: 24px;
text-align: center;
line-height: 1;
-webkit-transform: translate(-50%, 0);
transform: translate(-50%, 0);
`

export const BottomContainer = styled.ul`
    display: block;
    list-style: none;
    margin: 0;
    padding: 0;
    word-break: keep-all;
    text-decoration: none;
    font-weight: normal;
    text-indent: inital;
    word-wrap: break-word;
    line-height: 1.3;
    font-size: 14px;
`

export const Events = styled.li`
float: left;
width: 50%;
color: #666;
font-size: 14px;
padding: 0;


    &:nth-child(2n+1){
        clear: left;
    }
`