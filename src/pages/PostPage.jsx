import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { getRecipientMessages, getRecipient, getMessage } from '../api/users';
import useAsync from '../hooks/useAsync';
import DESIGN_TOKEN from '../styles/tokens';
import MessageCardList from '../components/post/MessageCardList';
import HeaderService from '../components/HeaderService';

const { color } = DESIGN_TOKEN;

function PostPage() {
  const [isLoadingMessages, isErrorMessages, getRecipientMessageAsync] = useAsync(getRecipientMessages);
  const [isLoadingRecipient, isErrorRecipient, getRecipientAsync] = useAsync(getRecipient);
  const [data, setData] = useState([]);
  const [bgData, setBgData] = useState([]);
  const { id } = useParams();
  const { name, messageCount, recentMessages, topReactions } = bgData;

  useEffect(() => {
    const handlePostInfo = async (recipientId) => {
      const result = await getRecipientMessageAsync(recipientId);
      if (!result) return;
      const recipientData = result;
      if (recipientData) {
        setData(recipientData);
      }
    };

    const handlePostBackground = async (recipientId) => {
      const result = await getRecipientAsync(recipientId);
      if (!result) return;
      const recipientData = result;
      if (recipientData) {
        setBgData(recipientData);
      }
    };

    handlePostInfo(id);
    handlePostBackground(id);
  }, [id, getRecipientMessageAsync, getRecipientAsync]);
  const { results } = data;
  const bgColor = bgData.backgroundColor;
  const bgImg = bgData.backgroundImageURL;

  return (
    <div>
      <HeaderService
        name={name}
        messageCount={messageCount}
        recentMessages={recentMessages}
        topReactions={topReactions}
        id={id}
      />
      <Wrapper $bgImg={bgImg} $bgColor={bgColor}>
        <MessageCardList results={data && results} />
      </Wrapper>
    </div>
  );
}

export default PostPage;

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${(props) => {
    if (props.$bgImg) {
      return `url(${props.$bgImg})`;
    }
    if (props.$bgColor) {
      return color[props.$bgColor][200];
    }
    return color.white;
  }};
  background-repeat: no-repeat;
  background-size: cover;
`;
