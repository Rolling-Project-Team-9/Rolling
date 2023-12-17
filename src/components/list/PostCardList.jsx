import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import PostCard from './PostCard';

function PostCardList({ postList }) {
  const navigate = useNavigate();
  const handleClick = (key) => {
    navigate(`/post/${key}/`);
  };
  return (
    <Container>
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
            onClick={() => handleClick(item?.id)}
          />
        ))
      ) : (
        <h1>포스트가 없습니다</h1>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: inline-flex;
  position: relative;
  width: 119rem;
  right: 2rem;
  padding: 2rem;
  overflow: hidden;
  gap: 2rem;
`;

export default PostCardList;
