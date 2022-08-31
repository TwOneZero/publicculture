import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPostDateCount } from '../../../_actions/post_action';
import {
  Frame,
  Header,
  Button,
  Body,
  Day,
  Container,
  ContainerH1,
  Line,
  TextContainer,
  Text,
  Day_week,
  Day_container,
  Day_week_container,
  AllEvent,
  TopContainer,
  SubContainer,
  BottomContainer,
  Events,
  // TopContainer,
} from './CalenderElements';



function Calender() {
  const dispatch = useDispatch();
  const DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // 평소 매달의 일수
  const DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // 윤년 매달의 일수
  const DAYS_OF_THE_WEEK = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']; // 일주일 구성
  const MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']; // 월 구성

  const today = new Date();
  const [date, setDate] = useState(today);
  const [day, setDay] = useState(date.getDate());
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());
  const [startDay, setStartDay] = useState(getStartDayOfMonth(date));

  const [a, setA] = useState(0);
  const c = a+'건';
  const [b] = useState('공연전시 174');

  const testClick = () => {
    dispatch(getPostDateCount()).then((res) => {
      console.log(res.payload.count);
      setA(res.payload.count);
    })

  }

  useEffect(() => {
    setDay(date.getDate());
    setMonth(date.getMonth());
    setYear(date.getFullYear());
    setStartDay(getStartDayOfMonth(date));
  }, [date]);

  function getStartDayOfMonth(date) { // 한달의 시작일 받는 함수
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  }

  function isLeapYear(year) { // 윤년 알고리즘 윤년은 4와 400으로 나누어지지만 100으로는 나누어지면 안된다
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  const days = isLeapYear(date.getFullYear()) ? DAYS_LEAP : DAYS; // 윤년과 아닌년의 days 설정

  return (
    <>
      <button onClick={testClick}>클릭</button>
      <Container>
        <ContainerH1>문화캘린더</ContainerH1>
        <Line></Line>
      </Container>
      <TextContainer>
        <Text>다양한 문화정보를 요일별, 월별로 한눈에 확인하세요</Text>
      </TextContainer>



      <Frame>
        <Header>
          <Button onClick={() => setDate(new Date(year, month - 1, day))}>Prev</Button>
          <div>
            {MONTHS[month]} {year} {/* Aug 2022 표현 부분 */}
          </div>
          <Button onClick={() => setDate(new Date(year, month + 1, day))}>Next</Button>
        </Header>
        <Body>
          <Day_week_container>
            {DAYS_OF_THE_WEEK.map(d => (
              <Day_week key={d}>
                {<strong>{d}</strong>}
              </Day_week>
            ))}
          </Day_week_container>
          <Day_container>
            {Array(days[month] + (startDay))
              .fill(null)
              .map((_, index) => {
                const d = index - (startDay - 1);
                return (
                  <SubContainer>
                    <TopContainer>
                      <Day
                        key={index}
                        isToday={d === today.getDate()}
                        isSelected={d === day}
                        onClick={() => setDate(new Date(year, month, d))}
                      >
                        {d > 0 ? d : ''}

                      </Day>
                      <AllEvent>{d > 0 ? c : ''}</AllEvent>
                    </TopContainer>
                    <BottomContainer>
                      <Events>
                        {
                          d > 0 ? b : ''
                        }
                      </Events>
                      <Events>
                        {
                          d > 0 ? b : ''
                        }
                      </Events>
                      <Events>
                        {
                          d > 0 ? b : ''
                        }
                      </Events>
                      <Events>
                        {
                          d > 0 ? b : ''
                        }
                      </Events>
                    </BottomContainer>

                  </SubContainer>

                );
              })}
          </Day_container>


        </Body>
      </Frame>
    </>



  );

}

export default Calender