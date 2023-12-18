import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import Button from './elements/Button';

const LogoIcon = styled.img`
  width: 107px;
  height: 30px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 124.8rem;
  width: 100%;
  padding: 0 2.4rem;
  height: 64px;
  margin: 0 auto;
  padding-top: 1.1rem;
  padding-bottom: 1.1rem;
`;
const HorizontalDivider = styled.div`
  height: 0.1rem;
  background-color: #ededed;
`;

function GNB() {
  const [hasButton, setHasButton] = useState(false);
  const navigate = useNavigate();
  const onClick = () => navigate('/post');
  const location = useLocation();

  const handleButtonDisplay = useCallback(() => {
    if (location.pathname === '/' || location.pathname === '/list') {
      setHasButton(true);
      return;
    }
    setHasButton(false);
  }, [location.pathname]);

  useEffect(() => {
    handleButtonDisplay();
  }, [handleButtonDisplay]);

  return (
    <>
      <Container>
        <Link to="/">
          <LogoIcon src={logo} alt="logo" />
        </Link>
        {hasButton && (
          <Button variant="outlined" width="157" height="large" type="button" onClick={onClick}>
            롤링 페이퍼 만들기
          </Button>
        )}
      </Container>
      <HorizontalDivider />
    </>
  );
}

export default GNB;
