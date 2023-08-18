import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRandompost } from '../../../_actions/post_action';
import sggimg from '../../../assets/image/mainimg.png';
import InfoSection from '../InfoSection/InfoSection';
import { homeObjOne } from '../InfoSection/Data.js';
import Loading from '../Loading/Loading';

import {
  SliderDiv,
  Button,
  Container,
  SliderContainer,
  IMG,
  SgginfoDiv,
  SgginfoImg,
  IMGCover,
  ImgTitle,
  TitleBox,
  MainContainer,
} from './LandingElements';

const LandingPage = () => {
  const dispatch = useDispatch();
  const postState = useSelector((state) => state.post);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  const TOTAL_SLIDES = 5;

  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      setCurrentSlide(TOTAL_SLIDES - 4);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    dispatch(getRandompost()).then((res) => {
      if (res.payload.success) {
        console.log(res.payload);
      } else {
        console.log('post가 없습니다. 서버 에러');
      }
    });
  }, [dispatch]);

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);

  return (
    <>
      <MainContainer>
        <SgginfoDiv>
          <SgginfoImg src={sggimg} />

          <SliderDiv>
            <Button onClick={prevSlide}>&#60;</Button>
            <Container>
              <SliderContainer ref={slideRef}>
                {postState.posts ? (
                  postState.posts.map((src, idx) => (
                    <IMGCover key={idx}>
                      <a href={`/post/${src._id}`}>
                        <IMG img src={src.main_img}></IMG>
                      </a>
                      <TitleBox>
                        <ImgTitle>{src.title}</ImgTitle>
                      </TitleBox>
                    </IMGCover>
                  ))
                ) : (
                  <Loading />
                )}
              </SliderContainer>
            </Container>
            <Button onClick={nextSlide}>&#62;</Button>
          </SliderDiv>
        </SgginfoDiv>
      </MainContainer>

      <InfoSection {...homeObjOne} />
    </>
  );
};

export default LandingPage;
