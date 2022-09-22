import styled, { css } from 'styled-components';
import {BsFillArrowLeftCircleFill as LeftArrow} from 'react-icons/bs';
import {BsFillArrowRightCircleFill as RightArrow} from 'react-icons/bs';

export const Container = styled.div`
    width: 1300px;
    margin: 50px auto 0;
    background: #fff;
    box-sizing: border-box;
`

export const ContainerH1 = styled.h1`
    color: #000;
    
`

export const Line = styled.div`
    border-bottom: 1px solid #000;
`

export const TextContainer = styled.div`
    margin: 30px auto 0;
`

export const Text = styled.h3`

`

//캘린더 전체

export const Frame = styled.div`
    margin: 0 auto;
`

//캘린더 헤더 부분

export const Header = styled.div`
    font-size: 18px;
    font-weight: bold;
    padding: 10px 10px 5px 10px;
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
    display: flex;
    flex-direction: column;
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
    height: 32px;
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
    cursor: pointer;
    font-size: 16px;
    border: 1px solid #ccc;
    /* ${props =>
        props.isToday &&
        css`
        border: 1px solid #eee;
        `}; */

    /* ${props =>
        props.isSelected &&
        css`background-color: #eee;`
    }; */
`

//캘린더 날짜, 행사수 부분

export const TopContainer = styled.a`
    /* margin: 1rem; */
    /* margin-top: 1rem;
    margin-bottom: 1rem;
    display: flex;
    text-align: center; */
    display: block;
    position: relative;
    margin-top: 10px;
    padding-top: 50px;

`

export const Day = styled.span`
   
    margin: 0 40px 0 20px;
    
    width: 50px;
    height: 50px;
    
    
    border-radius : ${({ isToday}) => (isToday ? '100%' : '0')};
    background: ${({ isToday}) => (isToday ? '#000' : '#fff')};
    color: ${({ isToday}) => (isToday ? '#fff' : '#000')}; 

    position: absolute;
    left: 0;
    top: 0;
    font-size: 30px;
    line-height: 1;

    
`



export const AllEvent = styled.span`
    /* margin-left: 50px;
    width: 100px;
    font-size: 24px;
    text-align: center;
    line-height: 1;
    -webkit-transform: translate(-50%, 0);
    transform: translate(-50%, 0); */
    position: absolute;
    left: 50%;
    top: 4px;
    font-size: 20px;
    font-weight: bold;
    line-height: 1;
    -webkit-transform: translate(-50%, 0);
    transform: translate(-50%, 0);
`
// 캘린더 장르 부분

export const BottomContainer = styled.ul`
    margin: 0;
    padding: 0;
    /* padding-left: 1.8rem; */
    list-style: none;
    /* justify-content: center; */
    /* margin: 0 10px; */
    margin-top: 20px;
    margin-left: 20px;
    /* vertical-align: middle; */
`
export const EventContainer = styled.li`
    float: left;
    width: 50%;
    color: #666;
    font-weight: bold;
    line-height: 1.6;
    font-size: 14px;
    &:nth-child(2n+1){
        clear: left;
    }
`
export const Events = styled.a`
    
`

export const AllContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: baseline;
    border: 1px solid #ccc;
    padding: 15px;
    background-color: #efefef;
    width: 1300px;
    margin: 0 auto;
    box-sizing: border-box;
`

export const SelectDay = styled.span`
    color: #a53e7d;
    font-size: 18px;
`

export const TotalContainer = styled.div`
    display: flex;
    align-items: baseline;
    margin-left: 20px;
    font-size: 15px;
    
`

export const Total = styled.span`
    /* position: relative; */
    margin-left: 10px;
    padding-left: 10px;
    font-size: 20px;
`

export const ShowEventContainer = styled.div`
    width: 1300px;
    margin: 60px auto 0;
    box-sizing: border-box;
`

export const ShowEventUl = styled.ul`
    list-style: none;
    padding: 0;
`

export const ShowEventLi = styled.li`
`

export const ShowEventHeadContainer = styled.div`
    border: 1px solid #ccc;
    background-color: #efefef;
`

export const ShowEventHead = styled.p`
    display: flex;
    align-items: center;
    /* position: relative; */
    width: 260px;
    height: 48px;
    padding-left: 25px;
    color: #000;
    font-size: 18px;
`

export const ShowEventMain = styled.div`

`

export const ShowEventContentUl = styled.ul`
    list-style: none;
    padding: 0;
`

export const ShowEventContentLi = styled.li`
    display: flex;
    align-items: center;
    padding: 15px;
    border-bottom: 1px solid #ccc;
`

export const ShowEventContentTitle = styled.a`
    flex: 1;
    margin-right: 15px;
    font-size: 24px;
    font-family: 'NGBold','Malgun Gothic',Dotum,'돋움',AppleGothicNeoSD,'Apple SD 산돌고딕 Neo','굴림',arial,sans-serif;
    white-space: nowrap;
    word-wrap: break-word;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
`

export const ShowEventContentDate = styled.p`
    font-size: 20px;
    line-height: 30px;
`

export const ShowEventContentPlace = styled.p`
    width: 200px;
    margin-left: 100px;
    font-size: 20px;
    line-height: 30px;
`
export const ShowEventCodename = styled.p`
    width: 200px;
    font-size: 20px;
    line-height: 30px;
`