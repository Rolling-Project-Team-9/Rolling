import React from 'react';
import styled from 'styled-components';
import DESIGN_TOKEN from '../../styles/tokens';
import emptyAvatarImgSrc from '../../assets/avatar.png';

const { color } = DESIGN_TOKEN;
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

function Avatar({ size = 'medium', avatarImgSrc = emptyAvatarImgSrc, alt = '프로필 이미지' }) {
  return <Img size={size} src={avatarImgSrc} alt={alt} />;
}

export default Avatar;