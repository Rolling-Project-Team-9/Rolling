import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getRecipientMessages, getRecipient } from '../api/users';
import { deleteRecipient } from '../api/delete';
import useAsync from '../hooks/useAsync';
import CardList from '../components/Edit/EditCardList';
import HeaderService from '../components/HeaderService';
import Button from '../components/elements/Button/Button';
import DESIGN_TOKEN from '../styles/tokens';

const { typography } = DESIGN_TOKEN;

function EditPage() {
  const [isLoadingMessages, isErrorMessages, getRecipientMessageAsync] = useAsync(getRecipientMessages);
  const [isLoadingRecipient, isErrorRecipient, getRecipientAsync] = useAsync(getRecipient);
  const [data, setData] = useState([]);
  const [bgData, setBgData] = useState([]);
  const { id } = useParams();
  const { name, messageCount, recentMessages, topReactions } = bgData;
  const navigate = useNavigate();

  useEffect(() => {
    const handleHeaderServiceLoad = async (recipientId) => {
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

    handleHeaderServiceLoad(id);
    handlePostBackground(id);
  }, [id, getRecipientMessageAsync, getRecipientAsync]);
  const { results } = data;
  const bgImg = bgData.backgroundImageURL;

  const handleDeleteRecipients = async () => {
    await deleteRecipient(id);
    navigate('/list');
  };

  return (
    <div>
      <HeaderService
        name={name}
        messageCount={messageCount}
        recentMessages={recentMessages}
        topReactions={topReactions}
        id={id}
      />
      <Container $bgImg={bgImg}>
        <ContentWrapper>
          <ButtonWrapper>
            <Button type="button" variant="primary" width="92" height="large" onClick={handleDeleteRecipients}>
              삭제하기
            </Button>
          </ButtonWrapper>
        </ContentWrapper>
        <CardList results={data && results} />
      </Container>
    </div>
  );
}

export default EditPage;

const ContentWrapper = styled.div`
  width: 120rem;
  margin: 0 auto;
  padding-top: 6.3rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1.1rem;
  ${typography.font16Regular};
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-image: ${(props) => (props.$bgImg ? `url(${props.$bgImg})` : 'none')};
  background-repeat: no-repeat;
  background-size: cover;
`;
