import React from 'react';
import Date from '../components/atoms/Date';
import RecipientName from '../components/atoms/RecipientName';

function MainPage() {
  return (
    <div>
      <Date font="font28Bold" colorNum="800" />
      <RecipientName font="font28Bold" />
    </div>
  );
}

export default MainPage;
