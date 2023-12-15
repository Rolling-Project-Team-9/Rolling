import React, { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import DESIGN_TOKEN from '../../styles/tokens';
import Avatar from '../elements/Avatar';
import SenderName from '../elements/SenderName';
import Badge from '../elements/Badge';
import Button from '../elements/Button/Button';
import Date from '../elements/Date';
import ICONS from '../elements/Button/Icons';

const { color, boxShadow } = DESIGN_TOKEN;

function Card() {
  const [hasButton, setHasButton] = useState(false);
  const location = useLocation();

  const handleButtonDisplay = useCallback(() => {
    setHasButton(location.pathname === '/post/id/edit');
  }, [location.pathname]);

  useEffect(() => {
    handleButtonDisplay();
  }, [handleButtonDisplay]);

  return (
    <Container>
      <Wrapper>
        <Profile>
          <Avatar />
          <SenderProfile>
            <SenderName />
            <Badge />
          </SenderProfile>
        </Profile>
        {hasButton && <Button icon={ICONS.delete} variant="outlined" width="40" height="delete" type="button" />}
      </Wrapper>
      <Outlined />
      <TextFeild>
        이것은 한글입니다, 안녕하세요 반갑습니다 잘부탁드려요 이것은 한글입니다, 안녕하세요 반갑습니다
        잘부탁드려요이것은 한글입니다, 안녕하세요 반갑습니다 잘부탁드려요이것은 한글입니다, 안녕하세요 반갑습니다
        잘부탁드려요이것은 한글입니다, 안녕하세요 반갑습니다 잘부탁드려요이것은 한글입니다, 안녕하세요 반갑습니다
        잘부탁드려요이것은 한글입니다, 안녕하세요 반갑습니다 잘부탁드려요이것은 한글입니다, 안녕하세요 반갑습니다
        잘부탁드려요이것은 한글입니다, 안녕하세요 반갑습니다 잘부탁드려요이것은 한글입니다, 안녕하세요 반갑습니다
        잘부탁드려요이것은 한글입니다, 안녕하세요 반갑습니다 잘부탁드려요이것은 한글입니다, 안녕하세요 반갑습니다
      </TextFeild>
      <DateContainer>
        <Date font="font12Regular" />
      </DateContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 38.4rem;
  height: 28rem;
  border-radius: 1.6rem;
  box-shadow: ${boxShadow.card};
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  margin: 2.8rem 2.4rem 0;
  padding-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Profile = styled.div`
  display: flex;
  gap: 1.4rem;
`;

const SenderProfile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

const Outlined = styled.div`
  width: 33.6rem;
  height: 0.1rem;
  background: ${color.gray[200]};
  margin: 0 2.4rem;
`;

const TextFeild = styled.div`
  width: 33.6rem;
  height: 10rem;
  margin: auto 2.4rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`;

const DateContainer = styled.div`
  margin: 1.6rem 27.6rem 2.4rem 2.4rem;
`;

export default Card;
