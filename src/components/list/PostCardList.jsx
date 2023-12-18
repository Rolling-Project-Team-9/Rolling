import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ICONS from '../elements/Button/Icons';
import PostCard from './PostCard';

const { left, right } = ICONS.arrow;

function PostCardList({ postList }) {
  const [cardScroll, setCardScroll] = useState(0);
  const [isLastCard, setIsLastCard] = useState(false);

  const count = postList.length;

  const navigate = useNavigate();
  const handleCardClick = (key) => {
    navigate(`/post/${key}/`);
  };

  const handleLeftClick = () => {
    setCardScroll(cardScroll + 29.5);
    setIsLastCard(false);
  };

  const handleRightClick = () => {
    setCardScroll(cardScroll - 29.5);
    if (cardScroll === -29.5 * (count - 5)) setIsLastCard(true);
  };

  return (
    <Container>
      {count > 4 && cardScroll !== 0 && (
        <LeftButton onClick={handleLeftClick}>
          <img src={left.src} alt={left.alt} />
        </LeftButton>
      )}
      <Wrapper>
        <CardContainer style={{ transform: `translateX(${cardScroll}rem)` }}>
          {postList ? (
            postList.map((item) => (
              <PostCard
                key={item?.id}
                name={item?.name}
                backgroundColor={item?.backgroundColor}
                backgroundImgUrl={item?.backgroundImageURL}
                messageCount={item?.messageCount}
                recentMessages={item?.recentMessages}
                topReactions={item?.topReactions}
                onClick={() => handleCardClick(item?.id)}
              />
            ))
          ) : (
            <h1>포스트가 없습니다</h1>
          )}
        </CardContainer>
      </Wrapper>
      {!isLastCard && count > 4 && (
        <RightButton onClick={handleRightClick}>
          <img src={right.src} alt={right.alt} />
        </RightButton>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  position: relative;
  padding: 0 4rem;
  gap: 2rem;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;

  width: 118rem;
  right: 6rem;
  padding: 2rem;
  gap: 2rem;
  overflow: hidden;
`;

const CardContainer = styled.div`
  width: 100%;
  transition-duration: 0.3s;
  display: flex;
  gap: 2rem;

  transition: transform 0.3s;
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #dadcdf;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  z-index: 1;
  width: 4rem;
  height: 4rem;
  flex-shrink: 0;
  backdrop-filter: blur(2px);
`;

const LeftButton = styled(Button)`
  left: -2rem;
`;

const RightButton = styled(Button)`
  right: 8rem;
`;

export default PostCardList;
