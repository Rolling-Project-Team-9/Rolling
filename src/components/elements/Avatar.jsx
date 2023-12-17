import React from 'react';
import styled from 'styled-components';
import DESIGN_TOKEN from '../../styles/tokens';
import emptyAvatarImgSrc from '../../assets/images/avatar.png';

const { color } = DESIGN_TOKEN;

function Avatar({ size = 'medium', $avatarImgSrc = emptyAvatarImgSrc, alt = '프로필 이미지' }) {
  return <Img size={size} src={$avatarImgSrc} alt={alt} />;
}

const AVATAR_SIZE = {
  small: '2.8rem',
  medium: '5.6rem',
  large: '8rem',
};

const Img = styled.img`
  display: flex;
  width: ${({ size }) => AVATAR_SIZE[size] ?? AVATAR_SIZE.medium};
  height: ${({ size }) => AVATAR_SIZE[size] ?? AVATAR_SIZE.medium};
  align-items: center;
  flex-shrink: 0;
  border-radius: 10rem;
  border: 1px solid ${color.gray[200]};
  background: ${color.gray[300]};
`;

export default Avatar;
