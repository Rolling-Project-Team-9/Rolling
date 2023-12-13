import React from 'react';
import { css, styled } from 'styled-components';
import addBlack from '../../assets/icons/add-24-black.svg';
import addWhite from '../../assets/icons/add-24-white.svg';
import deletedBlack from '../../assets/icons/deleted_black.svg';
import deletedWhite from '../../assets/icons/deleted_white.svg';
import plusIcon from '../../assets/icons/plus.svg';
import shareIcon from '../../assets/icons/share-24.svg';
import checkIcon from '../../assets/icons/check.svg';
import editIcon from '../../assets/icons/edit.svg';
import DESIGN_TOKEN from '../../styles/tokens';

const { color, typography } = DESIGN_TOKEN;

const SIZE = {
  small: '2.8rem',
  medium: '3.6rem',
  large: '4rem',
  'x-large': '5.6rem',
};

const HEIGHT = {
  small: css`
    padding: 0.2rem 1.6rem;
    height: ${SIZE.small};
    ${typography.font14Regular}
  `,

  medium: css`
    padding: 0.6rem 1.6rem;
    height: ${SIZE.medium};
    font-size: 1.6rem;
    line-height: 2.6rem;
    letter-spacing: -0.016rem;
    font-weight: 500;
  `,

  large: css`
    padding: 0.8rem 1.6rem;
    height: ${SIZE.large};
    ${typography.font16Regular}
  `,

  'x-large': css`
    border-radius: 1.2rem;
    padding: 1.4rem 1.6rem;
    height: ${SIZE['x-large']};
    ${typography.font18Bold}
  `,
};

const VARIANT = {
  primary: css`
    background-color: ${color.purple[600]};
    color: ${color.white};
    &:hover {
      &:enabled {
        background-color: ${color.purple[900]};
      }
    }
    &:active,
    &:focus {
      background-color: ${color.purple[900]};
    }
  `,
  secondary: css`
    background-color: ${color.white};
    color: ${color.purple[600]};
    &:enabled {
      border: 1px solid ${color.purple[600]};
      &:hover,
      &:active {
        background-color: ${color.purple[100]};
      }
    }
    &:focus {
      border: 1px solid ${color.purple[800]};
    }
  `,
  outlined: css`
    border: 1px solid ${color.gray[300]};
    background-color: ${color.white};
    color: ${color.gray[900]};
    &:enabled {
      &:hover,
      &:active {
        background-color: ${color.gray[100]};
      }
      &:focus {
        border: 1px solid ${color.gray[500]};
      }
    }
  `,
};

const Container = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  border-radius: 0.6rem;
  ${({ width }) => (width ? `width: ${width / 10}rem;` : 'width: 100%;')};
  ${({ height }) => css`
    ${HEIGHT[height]}
  `};
  ${({ variant }) => css`
    ${VARIANT[variant]}
  `}

  transition: background-color 0.2s ease;
  ${({ disabled }) =>
    disabled &&
    css`
      border: 1px solid ${color.gray[300]};
      background-color: ${color.gray[300]};
      color: ${color.white};
      pointer-events: none;
    `}
`;

const IconAdd = styled.img`
  ${({ width }) => width}
  ${({ height }) => height}
`;

function Button({ children, variant, width, height, disabled, icon, onClick }) {
  const iconAdd = disabled ? addWhite : addBlack;

  return (
    <Container width={width} height={height} variant={variant} disabled={disabled} icon={icon} onClick={onClick}>
      {icon && <IconAdd src={iconAdd} alt="이모티콘 추가하기" heights={height} />}
      {children}
    </Container>
  );
}

export default Button;
