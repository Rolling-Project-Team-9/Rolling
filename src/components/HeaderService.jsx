import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import DESIGN_TOKEN from '../styles/tokens';
import Avatars from './elements/Avatars';
import SendersCounter from './elements/MessageCounter';
import Emoji from './elements/Emoji';
import Button from './elements/Button/Button';
import Icons from './elements/Button/Icons';
import RecipientName from './elements/RecipientName';
import { getApi } from '../api/api';

const { color, boxShadow } = DESIGN_TOKEN;
const { add, share, arrowDown } = Icons;

function HeaderService() {
  const [disabled, setDisabled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  const [reactions, setReactions] = useState([]);
  const [id, setId] = useState(936);
  const { name, messageCount, recentMessages, topReactions } = data;
  const { results } = reactions;

  const handleArrowButtonClick = () => {
    if (!isOpen) {
      setIsOpen(true);
      return;
    }
    setIsOpen(false);
  };
  const handleAddReactionClick = () => {};

  useEffect(() => {
    const handleHeaderServiceLoad = async (recipientId) => {
      let result;
      try {
        result = await getApi('recipients/', `${recipientId}/`);
      } catch (error) {
        return;
      }
      const recipientData = result;
      if (recipientData) {
        setData(recipientData);
      }
    };
    const handleReactionsLoad = async (recipientId) => {
      let result;
      try {
        result = await getApi('recipients/', `${recipientId}/`, 'reactions/');
      } catch (error) {
        return;
      }
      const reactionData = result;
      if (reactionData) {
        setReactions(reactionData);
      }
    };

    handleHeaderServiceLoad(id);
    handleReactionsLoad(id);
  }, [id]);

  return (
    <>
      <Container>
        <RecipientName font="font28Bold" name={name} />
        <Wrapper>
          <Senders>
            <Avatars left="28" recentMessages={recentMessages} sendersCount={messageCount} />
            <SendersCounter font="font18Regular" sendersCount={messageCount} />
            <ColumnDivider />
          </Senders>
          <Reactions>
            <Emojis>
              <Emoji reactions={topReactions} />
            </Emojis>
            <Button width="36" height="medium" icon={arrowDown} onClick={handleArrowButtonClick} />
            {isOpen && (
              <EmojiExpanded>
                <Emoji reactions={results} />
              </EmojiExpanded>
            )}
          </Reactions>
          <Button
            variant="outlined"
            width="90"
            height="medium"
            icon={add}
            disabled={disabled}
            onClick={handleAddReactionClick}
          >
            추가
          </Button>
          <ColumnDivider />
          <Button variant="outlined" width="56" height="medium" icon={share} />
        </Wrapper>
      </Container>
      <HorizontalDivider />
    </>
  );
}

export default HeaderService;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 124.8rem;
  width: 100%;
  padding: 0 2.4rem;
  height: 64px;
  margin: 0 auto;
  padding-top: 1.3rem;
  padding-bottom: 1.3rem;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const HorizontalDivider = styled.div`
  height: 0.1rem;
  background-color: #ededed;
`;

const ColumnDivider = styled.div`
  height: 2.8rem;
  width: 0.1rem;
  background-color: ${color.gray[200]};
  margin: 0 1.3rem;
`;
const Senders = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1.5rem;
`;

const Emojis = styled.div`
  display: flex;
  gap: 0.8rem;
`;

const Reactions = styled.div`
  display: flex;
  align-items: center;
  margin-right: 0.8rem;
  position: relative;
`;
const EmojiExpanded = styled.span`
  background: ${color.white};
  padding: 2.4rem;
  position: absolute;
  right: 0;
  top: 4.3rem;
  display: grid;
  grid-template-columns: repeat(4, 5.6rem);
  grid-template-rows: repeat(auto-fit, 3.8rem);
  gap: 1rem 0.8rem;
  border-radius: 0.8rem;
  border: 1px solid #b6b6b6;
  box-shadow: ${boxShadow.card};
`;
