import React from 'react';
import { styled, css } from 'styled-components';
import DESIGN_TOKEN from '../../styles/tokens';

const { color, typography } = DESIGN_TOKEN;

const Container = styled.div`
  input {
    border-radius: 0.8rem;
    border: 1px solid ${color.gray[300]};
    background: ${color.white};
    width: 32rem;
    padding: 1.2rem 1.6rem;

    &:hover,
    &:focus {
      border: 1px solid ${color.gray[500]};
      outline: none;
    }

    &:active {
      border: 1px solid ${color.gray[700]};
    }

    &:disabled {
      border: 1px solid ${color.gray[300]};
      background: ${color.gray[100]};
    }

    /* ${(error) => error && css`
        border: 1px solid ${color.error};

        &:hover,
        &:focus {
          border: 1px solid ${color.error};
          outline: none;
        }

        &:active {
          border: 1px solid ${color.error};
        }
      `} */
  }
`;

const ErrorMessage = styled.div`
  color: ${color.error};
  ${typography.font12Regular};
`;

function TextFieldInput({ error }) {
  return (
    <Container>
      <input type="text" placeholder="PlaceHolder" disabled />
      {error && <ErrorMessage>값을 입력해 주세요.</ErrorMessage>}
    </Container>
  );
}

export default TextFieldInput;
