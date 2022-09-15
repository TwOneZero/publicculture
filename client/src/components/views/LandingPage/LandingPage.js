import React, { useEffect, useState, useRef } from 'react';
import Auth from '../../../hoc/auth';
import { useDispatch } from 'react-redux';
import { getRandompost } from '../../../_actions/post_action';

import {
  SliderDiv,
  Button,
  Container,
  SliderContainer,
  IMG,
} from './LandingElements';
import InfoSection from '../InfoSection/InfoSection';
import { homeObjOne, homeObjTwo, homeObjThree } from '../InfoSection/Data.js';








const LandingPage = () => {
  const dispatch = useDispatch();
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  const TOTAL_SLIDES = 6;
  //const [images, setImage] = useState([]);
  const [posts, setPost] = useState([]);

  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      setCurrentSlide(TOTAL_SLIDES - 1);
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
      if (res.payload.posts) {
        // let imgSrc = res.payload.posts.map((post) => post.main_img);
        setPost(res.payload.posts.map((post) => post));
        console.log(res.payload)
      } else {
        console.log('error!!!!!!!!!!!!!!');
      }
    });
  }, [dispatch]);

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);

  return (
    <>
      <SliderDiv>
        <Button onClick={prevSlide}>&#60;</Button>
        <Container>
          <SliderContainer ref={slideRef}>
            {posts.map((src, idx) => (
              <a key={idx} href={`/post/${src._id}`}>
                <IMG src={src.main_img} />
              </a>
            ))}
          </SliderContainer>
        </Container>
        <Button onClick={nextSlide}>&#62;</Button>
      </SliderDiv>

      <InfoSection {...homeObjOne}/>
    </>
  );
}

export default Auth(LandingPage, null);
