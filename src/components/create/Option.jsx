import React, { useState } from 'react';
import styled from 'styled-components';
import DESIGN_TOKEN from '../../styles/tokens';
import Enabled from '../../assets/images/Enabled.png';
import testimg1 from '../../assets/images/testimg1.png';
import testimg2 from '../../assets/images/testimg2.png';
import testimg3 from '../../assets/images/testimg3.png';
import testimg4 from '../../assets/images/testimg4.png';

const { color } = DESIGN_TOKEN;

const Container = styled.div`
  width: 10rem;
  display: flex;
  gap: 1rem;

  button {
    background-color: green;
    border: 1px solid yellow;
    border-radius: 0.5rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  gap: 1.6rem;
`;

const SelectedColor = styled.div`
  position: relative;
  width: 16.8rem;
  height: 16.8rem;
  border-radius: 1.2rem;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background: ${({ bg }) => color[bg][200]};
  cursor: pointer;

  &:hover {
    border: 3px solid ${({ bg }) => color[bg][300]};
  }
`;

const SelectedImg = styled.div`
  position: relative;
  width: 16.8rem;
  height: 16.8rem;
  border-radius: 1.2rem;
  background: ${({ bg }) => `url(${bg})`};
  background-size: cover;
  cursor: pointer;
`;

const CheckImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 4.4rem;
  height: 4.4rem;
  display: ${({ isSelected }) => (isSelected ? 'block' : 'none')};
`;

function Option() {
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedImg, setSelectedImg] = useState(null);
  const [isColor, setIsColor] = useState(true);

  const handleClick = (i) => {
    setSelectedColor(i);
    setSelectedImg(i);
  };

  const handleButtonClick = (isColorSelected) => {
    setIsColor(isColorSelected);
    setSelectedColor(0);
    setSelectedImg(null);
  };

  const items = ['orange', 'purple', 'blue', 'green'];
  const bgColor = items.map((bg, index) => (
    <SelectedColor key={items.index} bg={bg} isSelected={index === selectedColor} onClick={() => handleClick(index)}>
      <CheckImg src={Enabled} isSelected={index === selectedColor} alt="선택 이미지" />
    </SelectedColor>
  ));

  const testimg = [testimg1, testimg2, testimg3, testimg4];
  const bgImg = testimg.map((bg, index) => (
    <SelectedImg key={items.index} bg={bg} isSelected={index === selectedImg} onClick={() => handleClick(index)}>
      <CheckImg src={Enabled} isSelected={index === selectedImg} alt="선택 이미지" />
    </SelectedImg>
  ));

  return (
    <>
      <Container>
        <button type="button" onClick={() => handleButtonClick(true)}>
          컬러
        </button>
        <button type="button" onClick={() => handleButtonClick(false)}>
          이미지
        </button>
      </Container>
      <Wrapper>{isColor ? bgColor : bgImg}</Wrapper>
    </>
  );
}

export default Option;
