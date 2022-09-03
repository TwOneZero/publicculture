import styled, { css } from 'styled-components';
import {BsFillArrowLeftCircleFill as LeftArrow} from 'react-icons/bs';
import {BsFillArrowRightCircleFill as RightArrow} from 'react-icons/bs';

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

//캘린더 전체

export const Frame = styled.div`
    width: 1500px;
    // border: 1px solid lightgrey;
    margin: 0 auto 0;
    // box-shadow: 2px 2px 2px #eee;
`

//캘린더 헤더 부분

export const Header = styled.div`
    font-size: 18px;
    font-weight: bold;
    padding: 10px 10px 5px 10px;
    // display: flex;
    // justify-content: space-between;
    background-color: #fff;
`

export const Month_container = styled.div`
    display: flex;
    justify-content: center;
`

export const Month = styled.div`
    margin: 0 60px;
    font-size: 60px;
`

export const Month_sub = styled.span`
    font-size: 30px;
`

export const LeftArrows = styled(LeftArrow)`
    display: flex;
    cursor: pointer;
    margin: 25px 0 0 0;
    font-size: 30px;
    
`

export const RightArrows = styled(RightArrow)`
    display: flex;
    cursor: pointer;
    font-size: 30px;
    margin: 25px 0 0 0;
`

//캘린더 body부분

export const Body = styled.div`
    width: 100%;
    // padding: 0 1rem;
    display: flex;
    flex-direction: column;
    // border: 1px solid #000;
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
    border: 1px solid #ccc;
`

export const SubContainer = styled.div`
    width: 14%;
    height: 177px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    font-size: 16px;
    border: 1px solid #ccc;
    ${props =>
        props.isToday &&
        css`
        border: 1px solid #eee;
        `};

    ${props =>
        props.isSelected &&
        css`background-color: #eee;`
    };
`

//캘린더 날짜, 행사수 부분

export const TopContainer = styled.div`
    margin: 1rem;
`

export const Day = styled.span`
    font-size: 30px;
    line-height: 1;
`
// 캘린더 장르 부분

export const AllEvent = styled.span`
    width: 100px;
    font-size: 24px;
    text-align: center;
    line-height: 1;
    -webkit-transform: translate(-50%, 0);
    transform: translate(-50%, 0);
`

export const BottomContainer = styled.ul`
    padding-left: 1.8rem;
    list-style: none;

`
export const Events = styled.li`
    float: left;
    width: 50%;
    color: #666;
    font-size: 15px;
    line-height: 1.5rem;
`