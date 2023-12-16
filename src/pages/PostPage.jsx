import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getRecipient, getRecipientList } from '../api/users';
import useAsync from '../hooks/useAsync';
import CardList from '../components/card/CardList';
import HeaderService from '../components/HeaderService';

function PostPage() {
  const [isLoading, isError, getRecipientAsync] = useAsync(getRecipient);
  const [data, setData] = useState([]);
  const { id } = useParams();
  const { name, messageCount, recentMessages, topReactions } = data;

  useEffect(() => {
    const handleHeaderServiceLoad = async (recipientId) => {
      const result = await getRecipientAsync(recipientId);
      if (!result) return;
      const recipientData = result;
      if (recipientData) {
        setData(recipientData);
      }
    };

    handleHeaderServiceLoad(id);
  }, [id, getRecipientAsync]);

  return (
    <div>
      <HeaderService
        name={name}
        messageCount={messageCount}
        recentMessages={recentMessages}
        topReactions={topReactions}
        id={id}
      />
      <CardList recentMessages={recentMessages} />
    </div>
  );
}

export default PostPage;
