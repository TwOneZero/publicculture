import styled from 'styled-components';
import { BsFillArrowLeftCircleFill as LeftArrow } from 'react-icons/bs';
import { BsFillArrowRightCircleFill as RightArrow } from 'react-icons/bs';

export const Container = styled.div`
  width: 65%;
  margin: 50px auto 0;
  background: #fff;
  box-sizing: border-box;
`;

export const ContainerH1 = styled.h1`
  color: #000;
`;

export const Line = styled.div`
  border-bottom: 1px solid #000;
`;

export const TextContainer = styled.div`
  margin: 30px auto 0;
`;

export const Text = styled.h3``;

//캘린더 전체

export const Frame = styled.div`
  margin: 0 auto;
`;

//캘린더 헤더 부분

export const Header = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding: 10px 10px 5px 10px;
  background-color: #fff;
`;

export const MonthContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Month = styled.div`
  margin: 0 60px;
  font-size: 60px;
`;

export const MonthSub = styled.span`
  font-size: 30px;
`;

export const LeftArrows = styled(LeftArrow)`
  display: flex;
  cursor: pointer;
  margin: 25px 0 0 0;
  font-size: 30px;
`;

export const RightArrows = styled(RightArrow)`
  display: flex;
  cursor: pointer;
  font-size: 30px;
  margin: 25px 0 0 0;
`;

//캘린더 body부분

export const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

export const DayWeekContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const DayContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const DayWeek = styled.div`
  width: 14%;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 16px;
  border: 1px solid #ccc;
`;

export const SubContainer = styled.div`
  width: 14%;
  height: 177px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  font-size: 16px;
  border: 1px solid #ccc;
`;

//캘린더 날짜, 행사수 부분

export const TopContainer = styled.a`
  display: block;
  position: relative;
  margin-top: 10px;
  padding-top: 50px;
`;

export const Day = styled.span`
  margin: 0 40px 0 20px;
  position: absolute;
  left: -5px;
  top: 0;
  font-size: 30px;
  line-height: 1;
  color: ${({ isToday }) => (isToday ? '#fff' : '#000')};
`;

export const TodayCircle = styled.span`
  position: absolute;
  left: 6px;
  bottom: 8px;
  width: 50px;
  height: 50px;
  border-radius: ${({ isToday }) => (isToday ? '100%' : '0')};
  background: ${({ isToday }) => (isToday ? '#000' : '#fff')};
`;

export const AllEvent = styled.span`
  position: absolute;
  left: 50%;
  top: 4px;
  font-size: 20px;
  font-weight: bold;
  line-height: 1;
  -webkit-transform: translate(-50%, 0);
  transform: translate(-50%, 0);
`;
// 캘린더 장르 부분

export const BottomContainer = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  margin-top: 20px;
  margin-left: 20px;
`;
export const EventContainer = styled.li`
  float: left;
  width: 50%;
  color: #666;
  font-weight: bold;
  line-height: 1.6;
  font-size: 14px;
  &:nth-child(2n + 1) {
    clear: left;
  }
`;
export const Events = styled.a``;

export const AllContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  border: 1px solid #ccc;
  padding: 15px;
  background-color: #efefef;
  width: 65%;
  margin: 0 auto;
  box-sizing: border-box;
`;

export const SelectDay = styled.span`
  color: #a53e7d;
  font-size: 18px;
`;

export const TotalContainer = styled.div`
  display: flex;
  align-items: baseline;
  margin-left: 20px;
  font-size: 15px;
`;

export const Total = styled.span`
  margin-left: 10px;
  padding-left: 10px;
  font-size: 20px;
`;

export const ShowEventContainer = styled.div`
  width: 65%;
  margin: 60px auto 60px;
  box-sizing: border-box;
`;

export const ShowEventUl = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ShowEventLi = styled.li``;

export const ShowEventHeadContainer = styled.div`
  border: 1px solid #ccc;
  background-color: #efefef;
`;

export const ShowEventHead = styled.p`
  display: flex;
  align-items: center;
  width: 260px;
  height: 30px;
  padding-left: 25px;
  color: #101522;
  font-size: 20px;
  font-weight: bold;
`;

export const ShowEventMain = styled.div``;

export const ShowEventContentUl = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ShowEventContentLi = styled.li`
  display: flex;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #ccc;
`;

export const ShowEventContentTitle = styled.a`
  flex: 1;
  margin-right: 15px;
  font-size: 24px;
  font-weight: bold;
  font-family: 'NGBold', 'Malgun Gothic', Dotum, '돋움', AppleGothicNeoSD,
    'Apple SD 산돌고딕 Neo', '굴림', arial, sans-serif;
  word-wrap: break-word;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-decoration: none;
  color: #464646;
`;

export const ShowEventContentDate = styled.p`
  font-size: 20px;
  margin-left: 50px;
  line-height: 30px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ShowEventContentPlace = styled.p`
  width: 150px;
  margin-left: 50px;
  font-size: 20px;
  line-height: 30px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const ShowEventCodename = styled.p`
  width: 150px;
  font-size: 20px;
  line-height: 30px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ShowEventButton = styled.div`
  width: 150px;
  margin: 30px auto;
  background: #101522;
  padding: 12px 20px;
  color: #fff;
  font-size: 20px;
  outline: none;
  border: none;
  cursor: pointer;
  text-align: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #000;
    border: 1px solid #000;
  }
`;