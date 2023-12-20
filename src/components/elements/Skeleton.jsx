import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import DESIGN_TOKEN from '../../styles/tokens';

function Skeleton({ type }) {
  return <SkeletonBox type={type} />;
}

export default Skeleton;

const { color } = DESIGN_TOKEN;

const SKELETON_TYPE = {
  header: css`
    width: 100vw;
    height: 6.4rem;
  `,
  postTitle: css`
    width: 27rem;
    height: 3.6rem;
  `,
  postCard: css`
    width: 27.5rem;
    height: 26rem;
    border-radius: 1.6rem;
  `,
  messageCard: css`
    width: 38.4rem;
    height: 28rem;
    border-radius: 1.6rem;
  `,
  button: css`
    width: 100%;
    height: 5.6rem;
    border-radius: 1.2rem;
  `,
};

const loading = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100vw);
  }
`;

const SkeletonBox = styled.div`
  background-color: ${color.gray[200]};
  overflow: hidden;
  ${({ type }) => css`
    ${SKELETON_TYPE[type]}
  `};
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 10rem;
    height: 100%;
    background: linear-gradient(to right, ${color.gray[200]} 15%, ${color.gray[300]} 35% 55%, ${color.gray[200]} 80%);
    animation: ${loading} 2s infinite linear;
  }
`;
