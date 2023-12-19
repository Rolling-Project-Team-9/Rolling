import React from 'react';
import styled from 'styled-components';
import Card from './Card';

function CardList({ recentMessages }) {
  return (
    <Container>
      {recentMessages?.map((item) => (
        <Card
          key={item.id}
          sender={item.sender}
          profileImageURL={item.profileImageURL}
          relationship={item.relationship}
          content={item.content}
          createdAt={item.createdAt}
          fontFamily={item.font}
        />
      ))}
    </Container>
  );
}
export default CardList;

const Container = styled.div``;
