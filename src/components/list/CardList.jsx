import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from './Card';
import { getApi } from '../../api/api';

const Container = styled.div`
  display: inline-flex;
  width: 116rem;
  padding: 2rem;
  padding-left: 0;
  overflow: scroll;
  gap: 2rem;
`;

function CardList({ postList }) {
  return (
    <Container>
      {postList ? (
        postList.map((item) => (
          <Card
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

export default CardList;
