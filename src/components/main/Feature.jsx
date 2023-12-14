import React from 'react';
import styled from 'styled-components';
import introducePoint1 from '../../assets/images/cardBundle.png';
import introducePoint2 from '../../assets/images/emojiBundle.png';
import PointCard from './PointCard';
import styles from '../../styles/tokens';

const { layout, color, typography } = styles;

const content1 = {
  point: 'Point. 01',
  title1: '누구나 손쉽게, 온라인 ',
  title2: '롤링 페이퍼를 만들 수 있어요',
  explain: '로그인 없이 자유롭게 만들어요.',
  image: introducePoint1,
};

const content2 = {
  point: 'Point. 02',
  title1: '서로에게 이모지로 감정을 ',
  title2: '표현해보세요',
  explain: '롤링 페이퍼에 이모지를 추가할 수 있어요.',
  image: introducePoint2,
};

function Feature() {
  return (
    <Container>
      <PointCard content={content1} />
      <PointCard content={content2} $isReverse />
      <MainButton>
        <MainButtonText>구경해보기</MainButtonText>
      </MainButton>
    </Container>
  );
}

export default Feature;

const Container = styled.div`
  margin-top: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${layout.breakpoint.pc}) {
    margin-top: 4.9rem;
  }
`;

const MainButton = styled.div`
  display: flex;
  width: 28rem;
  padding: 1.4rem 2.4rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 1.2rem;
  background: ${color.purple[600]};

  @media (max-width: ${layout.breakpoint.pc}) {
    width: calc(100vw - 4.9rem);
    bottom: 2.4rem;
  }

  @media (max-width: ${layout.breakpoint.mobile}) {
    width: calc(100vw - 4.9rem);
    bottom: 2.4rem;
  }
`;

const MainButtonText = styled.button`
  color: ${color.white};
  text-align: center;
  ${typography.font18Bold}
`;
