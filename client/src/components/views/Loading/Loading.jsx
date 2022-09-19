// Loading.js
import React from 'react';
import { Background, LoadingText } from './LoadingElements';
import Spinner from '../../../assets/Spinner.gif';

const Loading = () => {
  return (
    <Background>
      <LoadingText>Loading...</LoadingText>
      <img src={Spinner} alt='Loading...' width='30%' />
    </Background>
  );
};

export default Loading;
