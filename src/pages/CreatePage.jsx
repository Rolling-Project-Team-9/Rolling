import React, { styled, css } from 'styled-components';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/elements/Button';
import checkIcon from '../assets/icons/check.svg';
import DESIGN_TOKEN from '../styles/tokens';

const { color, typography, layout } = DESIGN_TOKEN;
const COLOR_VALUES = ['beige', 'green', 'purple', 'blue'];
const IMAGE_VALUES = [
  'https://ymkimstorage.s3.ap-northeast-2.amazonaws.com/optionImage1.png',
  'https://ymkimstorage.s3.ap-northeast-2.amazonaws.com/optionImage2.png',
  'https://ymkimstorage.s3.ap-northeast-2.amazonaws.com/optionImage3.png',
  'https://ymkimstorage.s3.ap-northeast-2.amazonaws.com/optionImage4.png',
];

const VARIANT_STYLE = {
  color: css`
    background: ${({ value }) => COLOR_VALUES[value] && color[COLOR_VALUES[value]][200]};
  `,
  image: css`
    background: ${({ value }) => `url('${value}')`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  `,
};

function CreatePage() {
  const navigate = useNavigate();
  const nameInput = useRef();
  const [errorMessage, setErrorMessage] = useState(true);
  const [values, setValues] = useState({
    name: '',
    backgroundColor: 'beige',
    backgroundImage: null,
  });

  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleTabClick(index);
    }
  };

  const handleChangeValues = (e) => {
    setValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: [e.target.value],
    }));
    setErrorMessage(false);
  };

  const handleSubmit = () => {
    if (values.name.length < 1) {
      nameInput.current.focus();
      setErrorMessage(true);
      return;
    }
    /* eslint-disable no-alert */
    alert('생성완료');
    navigate('/post/{id}');
  };

  const TABS = [
    {
      label: '컬러',
      content: (
        <InputRadioGroup>
          {COLOR_VALUES.map((colors, index) => (
            <InputLabel htmlFor={`optionColor-${index}`} value={colors} key={colors} variant="color">
              <InputRadio
                type="radio"
                id={`optionColor-${index}`}
                name="backgroundColor"
                value={values.backgroundColor}
                onChange={handleChangeValues}
                defaultChecked={index === 0}
              />
            </InputLabel>
          ))}
          컬러
        </InputRadioGroup>
      ),
    },
    {
      label: '이미지',
      content: (
        <InputRadioGroup>
          {IMAGE_VALUES.map((image, index) => (
            <InputLabel htmlFor={`optionImage-${index}`} key={image} variant="image">
              <InputRadio
                type="radio"
                id={`optionImage-${index}`}
                name="backgroundImage"
                value={values.backgroundImage}
                onChange={handleChangeValues}
                defaultChecked={index === 0}
              />
            </InputLabel>
          ))}
          이미지
        </InputRadioGroup>
      ),
    },
  ];

  return (
    <Container>
      <form>
        <Recipient>
          <Title htmlFor="recipient">To.</Title>
          <InputText
            type="text"
            id="recipient"
            name="name"
            value={values.name}
            onChange={handleChangeValues}
            ref={nameInput}
            placeholder="받는 사람 이름을 입력해주세요."
            autoComplete="name"
          />
          <ErrorMessage style={{ display: errorMessage ? 'block' : 'none' }}>값을 입력해주세요.</ErrorMessage>
        </Recipient>
        <Title>배경화면을 선택해주세요.</Title>
        <Description>컬러를 선택하거나, 이미지를 선택할 수 있습니다.</Description>
        <TabList role="tablist">
          {TABS.map((item, index) => (
            <Tab
              role="tab"
              key={item.label}
              onClick={() => handleTabClick(index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              tabIndex={0}
            >
              <TabButton type="button" className={index === activeTab ? 'active' : ''}>
                {item.label}
              </TabButton>
            </Tab>
          ))}
        </TabList>
        <TabPanel role="tabpanel">{TABS[activeTab].content}</TabPanel>
        <Button type="submit" variant="primary" height="x-large" onClick={handleSubmit}>
          생성하기
        </Button>
      </form>
    </Container>
  );
}

const Container = styled.div`
  margin: 0 auto;
  padding: 5.7rem 2.4rem;
  max-width: ${layout.breakpoint.mobile};
`;

const Recipient = styled.div`
  margin-bottom: 5rem;
  label {
    margin-bottom: 1.2rem;
  }
`;

const Title = styled.label`
  display: block;
  margin-bottom: 0.4rem;
  ${typography.font24Bold}
`;

const Description = styled.p`
  margin-bottom: 2.4rem;
  color: ${color.gray[500]};
  ${typography.font16Regular};
`;

const InputText = styled.input`
  width: 100%;
  height: 5rem;
  padding: 1.2rem 1.6rem;
  border-radius: 0.8rem;
  border: 1px solid ${color.gray[300]};
  background: ${color.white};
  transition: background-color 0.2s ease;

  &:hover,
  &:focus {
    border: 1px solid ${color.gray[500]};
    outline: none;
  }
  &:active {
    border: 1px solid ${color.gray[700]};
  }
`;

const ErrorMessage = styled.span`
  margin-top: 0.8rem;
  color: ${color.error};
  ${typography.font15Regular};
`;

const TabList = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 24.4rem;
  margin-bottom: 4.5rem;
  border-radius: 0.6rem;
  background-color: ${color.gray[100]};
`;

const Tab = styled.li`
  flex: 1 1 0;
  button {
    &.active {
      border: 2px solid ${color.purple[600]};
      background-color: ${color.white};
      font-weight: 700;
      color: ${color.purple[600]};
    }
  }
`;

const TabButton = styled.button`
  width: 100%;
  height: 4rem;
  background-color: ${color.gray[100]};
  ${typography.font16Regular};
  border-radius: 0.6rem;
  color: ${color.gray[900]};
`;

const TabPanel = styled.div`
  margin-bottom: 6.9rem;
`;

const InputRadioGroup = styled.div`
  display: flex;
  gap: 1.6rem;
`;

const InputLabel = styled.label`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16.8rem;
  height: 16.8rem;
  border-radius: 1.2rem;
  border: 1px solid rgba(0, 0, 0, 0.08);
  cursor: pointer;
  ${({ variant }) => css`
    ${VARIANT_STYLE[variant]}
  `};
`;

const InputRadio = styled.input`
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  &:checked {
    display: block;
    width: 4.4rem;
    height: 4.4rem;
  }

  &:checked:after {
    content: '';
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4.4rem;
    height: 4.4rem;
    border-radius: 50%;
    cursor: pointer;
    background: ${color.gray[500]} url('${checkIcon}') no-repeat center/ 2.4rem 2.4rem;
  }
`;
export default CreatePage;
