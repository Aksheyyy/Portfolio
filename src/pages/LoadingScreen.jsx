import React from "react";
import Lottie from 'react-lottie';
import animationData from '../assets/Animation - 1733674897501 (1).json';

const LoadingScreen = () => {

  return (
    <div className="bg-black h-screen justify-center items-center">
      <Lottie options={{ animationData, loop: true, autoplay: true }}/>
    </div>
  );
};

export default LoadingScreen;
