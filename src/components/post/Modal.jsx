import React from 'react';
import styled from 'styled-components';
import DESIGN_TOKEN from '../../styles/tokens';
import Button from '../elements/Button/Button';
import Badge from '../elements/Badge';
import Date from '../elements/Date';

const { color, layout, boxShadow, typography } = DESIGN_TOKEN;

function Modal({ results }) {
  return (
    <div>
      {results?.map((item) => (
        <Container key={item.id}>
          <Wrapper>
            <ContentsProfile>
              <img src={item.profileImageURL} alt="프로필 이미지" />
              <p>From.</p>
              <h1>{item.sender}</h1>
              <Badge relationship={item.relationship}>{item.relationship}</Badge>
            </ContentsProfile>
            <DateContainer>
              <Date font="font14Regular" createdAt={item.createdAt} />
            </DateContainer>
          </Wrapper>
          <BlankDiv />
          <ContentsMessage>{item.content}</ContentsMessage>
          <ButtonWrapper>
            <Button type="button" width="120" height="large" variant="primary">
              확인
            </Button>
          </ButtonWrapper>
        </Container>
      ))}
    </div>
  );
}

export default Modal;

const Container = styled.div`
  width: 60rem;
  height: 48rem;
  padding: 4rem;
  border-radius: 1.6rem;
  box-shadow: ${boxShadow.card};
  background-color: ${color.white};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: ${layout.breakpoint.mobile}) {
    width: 36rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ContentsProfile = styled.div`
  display: grid;
  grid-template: auto auto / auto 1.6rem auto auto;
  grid-template-areas: 'img . from who' 'img . badge .';
  row-gap: 0.6rem;

  img {
    width: 5.6rem;
    height: 5.6rem;
    grid-area: img;
    border-radius: 10rem;
    object-fit: cover;
  }

  p {
    grid-area: from;
    ${typography.font20Bold};
  }

  h1 {
    grid-area: who;
    margin-left: 0.8rem;
    ${typography.font20Bold};
  }
`;

const DateContainer = styled.div``;

const BlankDiv = styled.div`
  width: 52rem;
  height: 0.1rem;
  margin-top: 2rem;
  margin-bottom: 1.6rem;
  background-color: ${color.gray[200]};

  @media (max-width: ${layout.breakpoint.mobile}) {
    width: 100%;
  }
`;

const ContentsMessage = styled.p`
  width: 50rem;
  height: 24rem;
  ${typography.font18Regular};
  color: #5a5a5a;
  padding-right: 1rem;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0.8rem;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 0.8rem;
    background-color: ${color.gray[300]};
  }

  @media (max-width: ${layout.breakpoint.mobile}) {
    width: 100%;
  }
`;

const ButtonWrapper = styled.div`
  width: 100%;
  padding-top: 1rem;
  display: flex;
  justify-content: center;
`;
