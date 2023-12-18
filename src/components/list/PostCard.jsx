import React from 'react';
import styled from 'styled-components';
import pattern1 from '../../assets/icons/pattern_01.svg';
import pattern2 from '../../assets/icons/pattern_02.svg';
import pattern3 from '../../assets/icons/pattern_03.svg';
import pattern4 from '../../assets/icons/pattern_04.svg';
import DESIGN_TOKEN from '../../styles/tokens';
import Avatars from '../elements/Avatars';
import MessageCounter from '../elements/MessageCounter';
import RecipientName from '../elements/RecipientName';
import Emoji from '../elements/Emoji';

const { color, boxShadow, overlayBackDropColor } = DESIGN_TOKEN;

function Card({ name, backgroundColor, backgroundImgUrl, messageCount, recentMessages, topReactions, onClick }) {
  return (
    <CardContainer $backgroundColor={backgroundColor} $backgroundImgUrl={backgroundImgUrl} onClick={onClick}>
      {backgroundImgUrl && <CardOverlay />}
      <CardWrapper>
        {backgroundImgUrl ? (
          <SenderContainer $fontColor="white">
            <RecipientName font="font24Bold" name={name} />
            <Avatars recentMessages={recentMessages} messageCount={messageCount} />
            <MessageCounter font="font16Regular" messageCount={messageCount} />
          </SenderContainer>
        ) : (
          <SenderContainer>
            <RecipientName colorNum="900" font="font24Bold" name={name} />
            <Avatars recentMessages={recentMessages} messageCount={messageCount} />
            <MessageCounter font="font16Regular" colorNum="700" messageCount={messageCount} />
          </SenderContainer>
        )}
        <EmojiContainer>
          <Emoji reactions={topReactions} />
        </EmojiContainer>
      </CardWrapper>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  z-index: 0;
  cursor: pointer;
  position: relative;
  width: 27.5rem;
  height: 26rem;
  flex-shrink: 0;
  padding: 3rem 2.4rem 2rem;
  border-radius: 1.6rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: ${boxShadow.card};
  ${({ $backgroundColor, $backgroundImgUrl }) => {
    if ($backgroundImgUrl) {
      return `
        background-image: url(${$backgroundImgUrl});
        background-position: center;
        background-size: cover;
      `;
    }
    if ($backgroundColor === 'purple') {
      return `
        background: ${color.purple[200]};
        background-image: url(${pattern1});
        background-position: right bottom;
        background-repeat: no-repeat
      `;
    }
    if ($backgroundColor === 'beige') {
      return `
        background: ${color.beige[200]};
        background-image: url(${pattern2});
        background-position: right bottom;
        background-repeat: no-repeat
      `;
    }
    if ($backgroundColor === 'blue') {
      return `
        background: ${color.blue[200]};
        background-image: url(${pattern3});
        background-position: right bottom;
        background-repeat: no-repeat
      `;
    }
    return `
      background: ${color.green[200]};
      background-image: url(${pattern4});
      background-position: right bottom;
      background-repeat: no-repeat
    `;
  }};
`;

const CardOverlay = styled.div`
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  border-radius: 1.6rem;
  height: 26rem;
  flex-shrink: 0;
  background: ${overlayBackDropColor.card};
`;

const CardWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4.3rem;
`;

const SenderContainer = styled.div`
  display: flex;
  color: ${({ $fontColor }) => $fontColor && $fontColor};
  flex-direction: column;
  align-items: flex-start;
  gap: 1.2rem;
`;

const EmojiContainer = styled.div`
  display: flex;
  width: 22.7rem;
  border-top: 1px solid rgba(0, 0, 0, 0.12);
  padding-top: 1.6rem;
  flex-direction: row;
  align-items: flex-start;
  gap: 0.8rem;
`;

export default Card;
