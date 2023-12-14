import React from 'react';
import styled from 'styled-components';
import DESIGN_TOKEN from '../../styles/tokens';

const { color, typography } = DESIGN_TOKEN;

const SendersSpan = styled.span`
  color: ${({ colorNum }) => colorNum && color.gray[colorNum]};
  ${({ font }) => font && typography[font]}
`;

const BoldText = styled.span`
  font-weight: 700;
`;

function SendersCounter({ font = 'font16Regular', colorNum = 700, sendersCount = 4 }) {
  return (
    <SendersSpan font={font} colorNum={colorNum}>
      <BoldText>{sendersCount}</BoldText>
      명이 작성했어요!
    </SendersSpan>
  );
}

export default SendersCounter;
