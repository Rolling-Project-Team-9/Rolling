import React, { useState } from 'react';
import styled from 'styled-components';
import DESIGN_TOKEN from '../../styles/tokens';

const { color } = DESIGN_TOKEN;

const Select = styled.select`
  width: 100%;
  border-radius: 0.8rem;
  border: 1px solid ${color.gray[300]};
  background: ${color.white};
  width: 32rem;
  padding: 1.2rem 1.6rem;

  &:hover,
  &:focus {
    border: 1px solid ${color.gray[500]};
    outline: none;
  }

  &:active {
    border: 1px solid ${color.gray[700]};
  }

  &:disabled {
    border: 1px solid ${color.gray[300]};
    background: ${color.gray[100]};
  }

  option {
    background: ${color.white};
  }
`;

function Dropdown() {
  const selectList = ['친구', '지인', '동료', '가족'];
  const [selected, setSelected] = useState('');

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  return (
    <Select onChange={handleSelect} value={selected}>
      {selectList.map((item) => (
        <option value={item} key={item}>
          {item}
        </option>
      ))}
    </Select>
  );
}

export default Dropdown;
