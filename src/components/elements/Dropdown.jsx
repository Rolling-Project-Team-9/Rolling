import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import DESIGN_TOKEN from '../../styles/tokens';
import upArrow from '../../assets/icons/arrow_up.svg';
import downArrow from '../../assets/icons/arrow_down.svg';

const { color } = DESIGN_TOKEN;

const Container = styled.div`
  position: relative;

  button {
    display: flex;
    position: relative;
    align-items: center;
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
      color: ${color.gray[400]};
    }

    img {
      position: absolute;
      right: 1rem;
    }
  }
`;

const Ul = styled.ul`
  list-style: none;
  border-radius: 0.8rem;
  border: 1px solid ${color.gray[300]};
  background: ${color.white};
  width: 32rem;
`;

const Li = styled.li`
  display: flex;
  width: 31.8rem;
  border-radius: 0.8rem;
  padding: 1.2rem 1.6rem;
  align-items: center;
  border: none;
  gap: 10px;

  &:hover {
    background: ${color.gray[100]};
  }
`;

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState('');
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [containerRef]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = (menuItem) => {
    setSelectedMenuItem(menuItem);
    setIsOpen(false);
  };

  return (
    <Container ref={containerRef}>
      <button type="button" onClick={toggleDropdown}>
        {selectedMenuItem || 'PlaceHolder'}
        <img src={isOpen ? upArrow : downArrow} alt="Arrow" />
      </button>
      {isOpen && (
        <Ul>
          <Li onClick={() => handleMenuItemClick('지인')}>지인</Li>
          <Li onClick={() => handleMenuItemClick('친구')}>친구</Li>
          <Li onClick={() => handleMenuItemClick('가족')}>가족</Li>
          <Li onClick={() => handleMenuItemClick('동료')}>동료</Li>
        </Ul>
      )}
    </Container>
  );
}
export default Dropdown;
