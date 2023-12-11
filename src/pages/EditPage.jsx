import React from 'react';
import Date from '../components/atoms/Date';
import RecipientName from '../components/atoms/RecipientName';

function EditPage() {
  return (
    <div>
      <Date />
      <Date modal="modal" />
      <RecipientName />
      <RecipientName cardList />
    </div>
  );
}

export default EditPage;
