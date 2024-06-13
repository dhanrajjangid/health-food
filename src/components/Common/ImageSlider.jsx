import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const ImageSliderContainer = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  overflow: hidden;
  border-radius: 15px;
  background-color: #f0f0f0; // Add a background color to avoid white gaps

  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
  }

  @media (max-width: 480px) {
    width: 100%;
    height: 200px;
  }
`;

const Slide = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute; // Position absolutely to keep all images in the same spot
  top: 0;
  left: 0;
  transition: opacity 0.5s ease-in-out;
  opacity: ${({ isActive }) => (isActive ? 1 : 0)}; // Use opacity to transition between images
`;

const Arrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 30px;
  color: white;
  cursor: pointer;
  z-index: 10;
  ${({ direction }) => (direction === 'left' ? 'left: 10px' : 'right: 10px')};
`;

const DotsContainer = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 5px;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({ active }) => (active ? 'white' : 'gray')};
  cursor: pointer;
`;

const ImageSlider = ({ images }) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  const selectSlide = (index) => {
    setCurrent(index);
  };

  return (
    <ImageSliderContainer>
      {images.map((image, index) => (
        <Slide key={index} src={image} isActive={index === current} />
      ))}
      <Arrow direction="left" onClick={prevSlide}><AiOutlineLeft /></Arrow>
      <Arrow direction="right" onClick={nextSlide}><AiOutlineRight /></Arrow>
      <DotsContainer>
        {images.map((_, index) => (
          <Dot key={index} active={index === current} onClick={() => selectSlide(index)} />
        ))}
      </DotsContainer>
    </ImageSliderContainer>
  );
};

export default ImageSlider;
