import React from 'react';
import styled from 'styled-components';
import DESIGN_TOKEN from '../../styles/tokens';

const { color, typography } = DESIGN_TOKEN;

const Container = styled.div`
  input {
    border-radius: 0.8rem;
    border: 1px solid ${({ error }) => (error ? `${color.error}` : `${color.gray[300]}`)};
    background: ${color.white};
    width: 32rem;
    padding: 1.2rem 1.6rem;

    &:hover,
    &:focus {
      border: 1px solid ${color.gray[500]};
      outline: none;
    }

    &:disabled {
      border: 1px solid ${color.gray[300]};
      background: ${color.gray[100]};
    }

    /* ${(error) => error && `
      border: 1px solid ${color.error};
    `} */
  }

  p {
    display: none;
    color: ${color.error};
    ${typography.font12Regular};
  }
`;

function TextFieldInput() {
  return (
    <Container>
      <input type="text" placeholder="PlaceHolder" />
      <p>값을 입력해 주세요.</p>
    </Container>
  );
}

export default TextFieldInput;
