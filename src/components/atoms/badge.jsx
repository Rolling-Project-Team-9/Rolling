import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import TestData from '../../api/api';
import styles from '../../styles/tokens';

const { color } = styles;

const BadgeDiv = styled.div`
  width: 4.2rem;
  height: 2rem;
  padding: 0px 0.8rem;
  border-radius: 0.4rem;
  display: flex;
  align-items: center;
  grid-area: badge;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 150%;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.textColor};
`;

function Badge() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await TestData();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {data.map((item) => {
        let backgroundColor = '';
        let textColor = '';

        switch (item.relationship) {
          case '동료':
            backgroundColor = color.purple[100];
            textColor = color.purple[600];
            break;
          case '지인':
            backgroundColor = color.orange[100];
            textColor = color.orange[500];
            break;
          case '친구':
            backgroundColor = color.blue[100];
            textColor = color.blue[500];
            break;
          case '가족':
            backgroundColor = color.green[100];
            textColor = color.green[500];
            break;
          default:
            backgroundColor = '';
            textColor = '';
        }

        return (
          <BadgeDiv key={item.id} backgroundColor={backgroundColor} textColor={textColor}>
            {item.relationship}
          </BadgeDiv>
        );
      })}
    </>
  );
}

export default Badge;
