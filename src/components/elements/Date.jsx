import React from 'react';
import styled from 'styled-components';
import DESIGN_TOKEN from '../../styles/tokens';

const { color, typography } = DESIGN_TOKEN;

const Wrapper = styled.div`
  color: ${color.gray[400]};
  ${({ font }) => font && typography[font]}
`;

function Date({ font }) {
  const createdDate = '2023. 07. 08';
  return <Wrapper font={font}>{createdDate}</Wrapper>;
}
export default Date;
