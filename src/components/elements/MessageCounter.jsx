import React from 'react';
import styled from 'styled-components';
import DESIGN_TOKEN from '../../styles/tokens';

const { color, typography } = DESIGN_TOKEN;

const Span = styled.span`
  color: ${({ $colorNum }) => $colorNum && color.gray[$colorNum]};
  ${({ $font }) => $font && typography[$font]}
`;

const BoldText = styled.span`
  font-weight: 700;
`;

function MessageCounter({ colorNum = 700, font = 'font16Regular', messageCount = 0 }) {
  return (
    <Span $font={font} $colorNum={colorNum}>
      <BoldText>{messageCount}</BoldText>
      명이 작성했어요!
    </Span>
  );
}

export default MessageCounter;
