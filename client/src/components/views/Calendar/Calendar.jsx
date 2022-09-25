import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPostDateCount, getPostbyDay } from '../../../_actions/post_action';
import DayPosts from './DayPosts';
import {
  Frame,
  Header,
  RightArrows,
  LeftArrows,
  Body,
  Day,
  Container,
  ContainerH1,
  Line,
  TextContainer,
  Text,
  DayWeek,
  DayContainer,
  DayWeekContainer,
  AllEvent,
  TodayCircle,
  TopContainer,
  SubContainer,
  BottomContainer,
  Events,
  Month,
  MonthSub,
  MonthContainer,
  EventContainer,
  AllContainer,
  SelectDay,
  TotalContainer,
  Total,
  ShowEventContainer,
  ShowEventHeadContainer,
  ShowEventHead,
  ShowEventMain,
  ShowEventContentUl,
  ShowEventButton,
} from './CalendarElements';

const Calendar = () => {
  const dispatch = useDispatch();
  const DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // 평소 매달의 일수
  const DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // 윤년 매달의 일수
  const DAYS_OF_THE_WEEK = ['일', '월', '화', '수', '목', '금', '토']; // 일주일 구성
  const MONTHS = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
  ]; // 월 구성

  const codenames = [
    '뮤지컬',
    '전시/미술',
    '연극',
    '콘서트',
    '클래식',
    '무용',
    '문화교양',
    '국악',
    '축제',
    '기타',
  ];

  //날짜 데이터
  const today = new Date();
  const [date, setDate] = useState(today);
  const [day, setDay] = useState(date.getDate());
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());
  const [startDay, setStartDay] = useState(getStartDayOfMonth(date));

  //달 행사
  const [todayEvent, setTodayEvent] = useState([]);
  //일 행사
  const postState = useSelector((state) => state.post);

  const [isShowMore, setIsShowMore] = useState(false); // 더보기 열고 닫는 스위치
  const postsLimit = useRef(6); //6

  const posting = useMemo(() => {
    // 조건에 따라 게시글을 보여주는 함수
    const shortPost = postState.dayPosts?.posts.slice(0, postsLimit.current); // 원본에서

    if (postState.dayPosts?.posts.length > postsLimit.current) {
      // 원본이 길면 (원본 글자수 > 제한된 갯수)
      if (isShowMore) {
        return postState.dayPosts?.posts;
      } // 더보기가 true 면 원본 바로 리턴
      return shortPost; // (더보기가 false면) 짧은 버전 리턴해주자
    }
    return postState.dayPosts?.posts; // 그렇지않으면 (짧은 글에는) 쓴글 그대로 리턴!
  }, [isShowMore, postsLimit, postState.dayPosts]);

  useEffect(() => {
    setDay(date.getDate());
    setMonth(date.getMonth());
    setYear(date.getFullYear());
    setStartDay(getStartDayOfMonth(date));
    dispatch(getPostDateCount(month)).then((res) => {
      setTodayEvent(res.payload.posts);
    });
  }, [date, dispatch, month]);

  useEffect(() => {
    if (todayEvent) {
      dispatch(getPostbyDay(month, day));
    }
  }, [dispatch, todayEvent, month, day]);

  function getStartDayOfMonth(date) {
    // 한달의 시작일 받는 함수
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  }

  function isLeapYear(year) {
    // 윤년 알고리즘 윤년은 4와 400으로 나누어지지만 100으로는 나누어지면 안된다
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }
  const days = isLeapYear(date.getFullYear()) ? DAYS_LEAP : DAYS; // 윤년과 아닌년의 days 설정

  const onClickDayPosts = (e) => {
    const day = e.target.id;
    dispatch(getPostbyDay(month, day)).then((res) => {
      console.log(res.payload);
    });
    setDay(day);
  };

  const onClickArrow = (year, month, direct) => {
    if (month + direct === today.getMonth()) {
      setDate(new Date(year, month + direct, new Date().getDate()));
    } else {
      setDate(new Date(year, month + direct, 1));
    }
  };

  return (
    <>
      <Container>
        <ContainerH1>문화캘린더</ContainerH1>
        <Line></Line>

        <TextContainer>
          <Text>다양한 문화정보를 요일별, 월별로 한눈에 확인하세요</Text>
        </TextContainer>

        <Frame>
          <Header>
            <MonthContainer>
              <LeftArrows
                onClick={() => {
                  onClickArrow(year, month, -1);
                }}
              >
                Prev
              </LeftArrows>
              <Month>
                {' '}
                {/* Aug 2022 표현 부분 */}
                {MONTHS[month]}
                <MonthSub>월</MonthSub>
              </Month>
              <RightArrows
                onClick={() => {
                  onClickArrow(year, month, 1);
                }}
              >
                Next
              </RightArrows>
            </MonthContainer>
          </Header>
          <Body>
            <DayWeekContainer>
              {DAYS_OF_THE_WEEK.map((d) => (
                <DayWeek key={d}>{<strong>{d}</strong>}</DayWeek>
              ))}
            </DayWeekContainer>
            <DayContainer>
              {Array(days[month] + startDay)
                .fill(null)
                .map((_, index) => {
                  const d = index - (startDay - 1);
                  const test = todayEvent.filter(
                    (event) => d === Number(event.end_date.slice(8, 10))
                  );

                  return (
                    <SubContainer key={index} id={d} onClick={onClickDayPosts}>
                      <TopContainer id={d}>
                        <TodayCircle
                          id={d}
                          isToday={
                            year === today.getFullYear() &&
                            month === today.getMonth() &&
                            d === today.getDate()
                          }
                        />
                        <Day
                          id={d}
                          key={index}
                          isToday={
                            year === today.getFullYear() &&
                            month === today.getMonth() &&
                            d === today.getDate()
                          }
                          onClick={() => setDate(new Date(year, month, d))}
                        >
                          {d > 0 ? d : ''}
                        </Day>

                        <AllEvent id={d}>
                          {d > 0 ? test.length + '건' : ''}
                        </AllEvent>
                      </TopContainer>
                      <BottomContainer id={d}>
                        {codenames.map((genre, idx) => {
                          let cnt = test.filter(
                            (post) => post.codename.startsWith(genre) === true
                          ).length;
                          if (d > 0 && cnt > 0) {
                            return (
                              <EventContainer key={idx}>
                                <Events id={d} key={idx}>
                                  {genre + ' ' + cnt}
                                </Events>
                              </EventContainer>
                            );
                          }
                        })}
                      </BottomContainer>
                    </SubContainer>
                  );
                })}
            </DayContainer>
          </Body>
        </Frame>
      </Container>
      <AllContainer>
        <SelectDay>
          2022년 {month + 1}월 {day}일
        </SelectDay>
        <TotalContainer>
          <Total>총 {postState.dayPosts?.posts.length}건</Total>
        </TotalContainer>
      </AllContainer>
      <ShowEventContainer>
        <ShowEventHeadContainer>
          <ShowEventHead>
            2022년 {month + 1}월 {day}일 전체 행사
          </ShowEventHead>
        </ShowEventHeadContainer>
        <ShowEventMain>
          <ShowEventContentUl>
            {postState.dayPosts?.posts ? <DayPosts posts={posting} /> : null}
            {postState.dayPosts?.posts.length > postsLimit.current &&
            isShowMore ? (
              ''
            ) : (
              <ShowEventButton
                onClick={() => {
                  setIsShowMore((prev) => !prev);
                }}
              >
                더보기
              </ShowEventButton>
            )}
          </ShowEventContentUl>
        </ShowEventMain>
      </ShowEventContainer>
    </>
  );
};

export default Calendar;
