import React from 'react';
import styled from 'styled-components';
import PostCard from './PostCard';

const Container = styled.div`
  display: inline-flex;
  width: 116rem;
  padding: 2rem;
  padding-left: 0;
  overflow: hidden;
  gap: 2rem;
`;

function PostCardList({ postList }) {
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
          />
        ))
      ) : (
        <h1>포스트가 없습니다</h1>
      )}
    </Container>
  );
}

export default PostCardList;
