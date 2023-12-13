import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ReactionData } from '../../api/api';
import styles from '../../styles/tokens';

const { color } = styles;

const Emojidiv = styled.div`
  display: inline-flex;
  margin-right: 0.8rem;
  padding: 0.8rem 1.2rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 32px;
  background: rgba(0, 0, 0, 0.54);
`;

const EmojiStyle = styled.p`
  color: ${(props) => props.textColor};
  font-family: Pretendard;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.1rem;
`;

const EmojiCount = styled.p`
  color: ${(props) => props.textColor};
  font-family: Pretendard;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2rem;
`;

function Emoji() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await ReactionData();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {data.map((item) => (
        <Emojidiv key={item.id}>
          <EmojiStyle textColor={color.black}>{item.emoji}</EmojiStyle>
          <EmojiCount textColor={color.white}>{item.count}</EmojiCount>
        </Emojidiv>
      ))}
    </>
  );
}

export default Emoji;
