import React, { useState, useLocation, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import DESIGN_TOKEN from '../../styles/tokens';
import Avatar from '../elements/Avatar';
import SenderName from '../elements/SenderName';
import Badge from '../elements/Badge';
import Button from '../elements/Button';
import Date from '../elements/Date';
import Icons from '../../constants/Icons';

const { color, boxShadow } = DESIGN_TOKEN;

const { deleted } = Icons;

function Card({ sender, profileImageURL, relationship, content, createdAt }) {
  const [hasButton, setHasButton] = useState(false);
  const [disabled, setDisabled] = useState(false);

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
          <Avatar $avatarImgSrc={profileImageURL} />
          <SenderProfile>
            <SenderName name={sender} />
            <Badge relationship={relationship} />
          </SenderProfile>
        </Profile>
        {hasButton && (
          <Button
            type="button"
            icon={disabled ? deleted.white : deleted.black}
            variant="outlined"
            width="40"
            height="large"
            disabled={disabled}
          />
        )}
      </Wrapper>
      <Outlined />
      <TextField>{content}</TextField>
      <DateContainer>
        <Date font="font12Regular" createdAt={createdAt} />
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

const TextField = styled.div`
  width: 33.6rem;
  height: 10.6rem;
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
