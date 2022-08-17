import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Auth from '../../../hoc/auth';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { getRandompost } from '../../../_actions/post_action';

const SliderDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const IMG = styled.img`
  margin: 50px;
  width: 25vw;
  height: 48vh;
`;

const Container = styled.div`
  width: 90%;
  overflow: hidden;
  display: flex;
  //flex-direction: center;
`;
const Button = styled.button`
  //all: unset;
  border: none;
  padding: 1%;
  background-color: transparent;
  //border-radius: 10px;
  font-size: 30px;
  &:hover {
    transition: all 0.3s ease-in-out;
    //background-color: coral;
    //color: #fff;
  }
`;
const SliderContainer = styled.div`
  width: 100%;
  display: flex;
`;

//import EventPage from '../EventPage/EventPage';

function LandingPage() {
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
  );
}

export default Auth(LandingPage, null);
