import React from 'react';
import styled from 'styled-components';
import Option from '../components/create/Option';
import Input from '../components/elements/Input';
import Button from '../components/elements/Button/Button';
import DESIGN_TOKEN from '../styles/tokens';

const { color, typography } = DESIGN_TOKEN;

function CreatePage() {
  return (
    <div>
      <InputContainer>
        <Bold>To.</Bold>
        <Input width="720" height="50" />
      </InputContainer>
      <TitleContainer>
        <Bold>배경화면을 선택해 주세요.</Bold>
        <Choice>컬러를 선택하거나, 이미지를 선택할 수 있습니다.</Choice>
      </TitleContainer>
      <Option />
      <Button variant="primary" width="720" height="x-large" type="button">
        생성하기
      </Button>
    </div>
  );
}

const Bold = styled.div`
  ${typography.font24Bold}
`;

const Choice = styled.div`
  color: ${color.gray[500]};
  ${typography.font16Regular};
`;

const InputContainer = styled.div``;
const TitleContainer = styled.div``;

export default CreatePage;
