import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import getApi from '../api/api';
import DESIGN_TOKEN from '../styles/tokens';
import MessageCardList from '../components/post/MessageCardList';
import HeaderService from '../components/HeaderService';
import Modal from '../components/post/Modal';

const { color } = DESIGN_TOKEN;

function PostPage() {
  const [isLoading, isError, getRecipientAsync] = useAsync(getRecipient);
  const [data, setData] = useState([]);
  const [bgData, setBgData] = useState([]);
  const [id, setId] = useState(1264);

  useEffect(() => {
    const handleHeaderServiceLoad = async (recipientId) => {
      let result;
      try {
        result = await getApi('recipients/', `${recipientId}/`, 'messages/');
      } catch (error) {
        return;
      }
      const recipientData = result;
      if (recipientData) {
        setData(recipientData);
      }
    };

    const handlePostBackground = async (recipientId) => {
      let result;
      try {
        result = await getApi('recipients/', `${recipientId}/`);
      } catch (error) {
        return;
      }
      const recipientData = result;
      if (recipientData) {
        setBgData(recipientData);
      }
    };

    handleHeaderServiceLoad(id);
    handlePostBackground(id);
  }, [id]);

  const { results } = data;
  const bgColor = bgData.backgroundColor;

  return (
    <div>
      <HeaderService />
      <Wrapper $bgColor={bgColor}>
        <MessageCardList results={results} />
      </Wrapper>
      <Modal results={results} />
    </div>
  );
}

export default PostPage;

const Wrapper = styled.div`
  background-color: ${(props) => (props.$bgColor ? color[props.$bgColor][200] : color.white)};
  width: 192rem;
  height: 108rem;
`;
