import React, { useState } from 'react';
import styled from 'styled-components';
import EditCard from './EditCard';
import { deleteMessage } from '../../api/Api';

function CardList({ results }) {
  const [cards, setCards] = useState(results);

  const handleDeleteMessage = async (id) => {
    await deleteMessage(id);
    const updatedCards = cards.filter((card) => card.id !== id);
    setCards(updatedCards);
  };
  return (
    <Container>
      {cards?.map((item) => (
        <EditCard
          key={item.id}
          sender={item.sender}
          profileImageURL={item.profileImageURL}
          relationship={item.relationship}
          content={item.content}
          createdAt={item.createdAt}
          handleDeleteMessage={() => handleDeleteMessage(item.id)}
        />
      ))}
    </Container>
  );
}
export default CardList;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 2.4rem;
  column-gap: 2.8rem;
  width: 120rem;
  margin: 0 auto;
`;
