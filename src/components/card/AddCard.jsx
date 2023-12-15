import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import DESIGN_TOKEN from '../../styles/tokens';
import Plusbutton from '../../assets/images/pulsbutton.png';

const { boxShadow } = DESIGN_TOKEN;

function AddCard() {
  const navigate = useNavigate();
  const onClick = () => navigate('/post');

  return (
    <Button type="button" onClick={onClick}>
      <PlusImg />
    </Button>
  );
}

const Button = styled.button`
  width: 38.4rem;
  height: 28rem;
  border-radius: 1.6rem;
  box-shadow: ${boxShadow.card};
  position: relative;
`;

const PlusImg = styled.div`
  background: url(${Plusbutton});
  background-size: cover;
  width: 5.6rem;
  height: 5.6rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default AddCard;
