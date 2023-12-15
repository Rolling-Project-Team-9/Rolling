import React from 'react';
import { styled, css } from 'styled-components';
import DESIGN_TOKEN from '../../styles/tokens';

const { color, typography } = DESIGN_TOKEN;

function Input({ width, height, disabled, error }) {
  return (
    <Container width={width} height={height} disabled={disabled} error={error}>
      <input type="text" placeholder="PlaceHolder" />
      {error && <ErrorMessage>값을 입력해 주세요.</ErrorMessage>}
    </Container>
  );
}

export default Input;

const Container = styled.div`
  input {
    border-radius: 0.8rem;
    border: 1px solid ${color.gray[300]};
    background: ${color.white};
    ${({ width }) => (width ? `width: ${width / 10}rem;` : 'width: 100%;')};
    ${({ height }) => (height ? `height: ${height / 10}rem;` : 'height: 100%;')};
    padding: 1.2rem 1.6rem;

    &:hover,
    &:focus {
      border: 1px solid ${color.gray[500]};
      outline: none;
    }

    &:active {
      border: 1px solid ${color.gray[700]};
    }

    transition: background-color 0.2s ease;
    ${({ disabled }) => disabled &&
      css`
        border: 1px solid ${color.gray[300]};
        background-color: ${color.gray[300]};
        color: ${color.white};
        pointer-events: none;
      `}

    ${({ error }) => error &&
      css`
        border: 1px solid ${color.error};
        background-color: ${color.white};
        color: ${color.black};

        &:hover,
        &:focus {
          border: 1px solid ${color.error};
          outline: none;
        }

        &:active {
          border: 1px solid ${color.error};
        }
      `}
  }
`;

const ErrorMessage = styled.div`
  color: ${color.error};
  ${typography.font12Regular};
`;
