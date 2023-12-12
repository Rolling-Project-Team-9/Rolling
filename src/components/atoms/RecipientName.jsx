import React from 'react';
import styled from 'styled-components';
import DESIGN_TOKEN from '../../styles/tokens';

const { color, typography } = DESIGN_TOKEN;

const Wrapper = styled.div`
  color: ${({ colorNum }) => colorNum && color.gray[colorNum]};
  ${({ font }) => font && typography[font]}
`;

function RecipientName({ colorNum, font }) {
  const name = 'Ashley Kim';
  const recipientName = `To. ${name} `;
  return (
    <Wrapper font={font} colorNum={colorNum}>
      {recipientName}
    </Wrapper>
  );
}

export default RecipientName;
