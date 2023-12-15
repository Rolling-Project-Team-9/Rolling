import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from './Card';
import { getApi } from '../../api/api';

const Container = styled.div``;

function CardList() {
  const [postList, setPostList] = useState([]);
  useEffect(() => {
    const getPostList = async () => {
      const { results } = await getApi();
      setPostList(results);
    };
    getPostList();
  }, []);

  return (
    <Card
      name={postList[2]?.name}
      backgroundColor={postList[2]?.backgroundColor}
      backgroundImgUrl={postList[2]?.backgroundImageURL}
      messageCount={postList[2]?.messageCount}
      recentMessages={postList[2]?.recentMessages}
      topReactions={postList[2]?.topReactions}
    />
  );
}

export default CardList;
