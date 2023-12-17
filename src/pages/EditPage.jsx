import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getApi, deleteRecipient } from '../api/Api';
import CardList from '../components/Edit/EditCardList';
import HeaderService from '../components/HeaderService';
import Button from '../components/elements/Button/Button';
import DESIGN_TOKEN from '../styles/tokens';

const { typography } = DESIGN_TOKEN;

function EditPage() {
  const [data, setData] = useState([]);
  const [bgData, setBgData] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

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
    width: 192rem;
    height: 108rem;
    background-image: ${(props) => (props.$bgImg ? `url(${props.$bgImg})` : 'none')};
  `;

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
  const bgImg = bgData.backgroundImageURL;

  const handleDeleteRecipients = async () => {
    await deleteRecipient(id);
    navigate('/list');
  };

  return (
    <div>
      <HeaderService $id={id} />
      <Container $bgImg={bgImg}>
        <ContentWrapper>
          <ButtonWrapper>
            <Button type="button" variant="primary" width="92" height="large" onClick={handleDeleteRecipients}>
              삭제하기
            </Button>
          </ButtonWrapper>
        </ContentWrapper>
        <CardList results={results} />
      </Container>
    </div>
  );
}

export default EditPage;
