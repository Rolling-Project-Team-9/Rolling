import React from 'react';
import styled from 'styled-components';
import Button from '../elements/Button/Button';
import styles from '../../styles/tokens';
import Badge from '../elements/Badge';

const { color, layout, boxShadow, typography } = styles;

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

const Gosegu =
  'https://i.namu.wiki/i/-bbcIaMQWmX2tRIbd1DwoIy2gXNWZIePFA9hf1F4nK0pyFK4n0QzEG_OGIL8PrQjKcqIuxhmdWBMP3akFaD0qAMy9CuW9krBlDTTaOmefoaA4gEIRAfWMXpbRYv80P60TrAclekEMSy4hgkRgpC8Iw.webp';

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

const ContentsCreatedAt = styled.div`
  p {
    ${typography.font14Regular};
    color: ${color.gray[400]};
  }
`;

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

function Modal() {
  const selectRelationship = '친구';
  const sender = '고세구';
  const createdDate = '2023.12.14';
  const message =
    '이파리들~ 하이빵가루~! 세구에요!! ^ㅁ^ 제가 처음으로 부른 노래가 1000만 조회수를 달성하다니... 진짜! 너무 놀랍고 신기하고 기뻐요!!! 헤헤 팬서비스를 들으면 오디션 초기당시가 생각나서 마음이 뭉클해져요! 오랜 기간 저 세구를 믿고 응원해주신 여러분들! 그리고 또 새로 만나게된 유입 이파리분들 !! 너무 감사드리고 앞으로의 여정도 많은 미래가 기다리고 있겠지만 그게 어떠한 미래이든 같이 나아가봐요! 나 혼자는 너무나도 약한 사람이지만 이파리들과 함께인 난 이 순간 세상에서 제일 강한 아이돌이다 !!!! 너무 든든하고 고마워요 ! 지금까지 그래왔듯 앞으로도 노래가사처럼 굳세고 열정있는 세구로 살아가고 싶어요 ㅎㅎ 과분한 사랑에 이를 다 보답해줄 팬서비스는 이 세상에 존재 할 수 없겠지만 늘 노력하고 더 성장하는 아이돌 고세구로 남아 용기를 잔뜩 드릴게요 !! 그럼... 마지막으로... 좋아하게 돼서 나를 바라봐줘 !!! >ㅁ< 약속이야 !!!! - 지금 이 순간 너무 행복한 세구가 -';
  return (
    <Container>
      <Wrapper>
        <ContentsProfile>
          <img src={Gosegu} alt="세구" />
          <p>From.</p>
          <h1>{sender}</h1>
          <Badge selectRelationship={selectRelationship}>{selectRelationship}</Badge>
        </ContentsProfile>
        <ContentsCreatedAt>{createdDate}</ContentsCreatedAt>
      </Wrapper>
      <BlankDiv />
      <ContentsMessage>{message}</ContentsMessage>
      <ButtonWrapper>
        <Button type="button" width="120" height="large" variant="primary">
          확인
        </Button>
      </ButtonWrapper>
    </Container>
  );
}

export default Modal;
