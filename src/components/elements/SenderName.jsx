import React from 'react';
import styled from 'styled-components';
import DESIGN_TOKEN from '../../styles/tokens';

const { color, typography } = DESIGN_TOKEN;

function SenderName({ colorNum, font }) {
  const name = '김동훈';
  const senderName = `From. ${name} `;
  return (
    <Wrapper font={font} colorNum={colorNum}>
      {senderName}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  color: ${color.black};
  ${({ font }) => font && typography[font]}
`;

export default SenderName;
