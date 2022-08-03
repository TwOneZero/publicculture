import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Auth from '../../../hoc/auth';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { getRandompost } from '../../../_actions/post_action';

const IMG = styled.img`
  width: 100%;
  height: 50vh;
  padding: 10%;
`;

const Container = styled.div`
  width: 50%;
  //overflow: hidden;
  display: flex;
  flex-direction: center;
`;
const Button = styled.button`
  all: unset;
  border: 1px solid coral;
  padding: 0.5em 2em;
  color: coral;
  border-radius: 10px;
  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: coral;
    color: #fff;
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
  
  const TOTAL_SLIDES = 19;
  //const images = [];
  //images.length = 20;
  const [images, setImage] = useState([]);

  const nextSlide = () => {
      if (currentSlide >= TOTAL_SLIDES) { 
        setCurrentSlide(0);
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

  useEffect(()=>{
    dispatch(getRandompost()).then((res) => {
      if (res.payload.posts) {
          //console.log(res.payload.posts)
          //console.log(res.payload.posts);
          //images.push(res.payload.posts[i].main_img);
          let imgSrc = res.payload.posts.map(post=>post.main_img)
          setImage(imgSrc)
          console.log(images);
      } else {
        console.log('error!!!!!!!!!!!!!!');
      }
    });
  },[])

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; 
  }, [currentSlide]);

return (
    <div>
    <Container>
      <SliderContainer ref={slideRef}>
      {images.map(src=><IMG src ={src}/>)}
      </SliderContainer>
    </Container>
    <div>
      <Button onClick={prevSlide}>Previous Slide</Button>
      <Button onClick={nextSlide}>Next Slide</Button>
    </div>
  </div>  
  );
}

export default Auth(LandingPage, null);
