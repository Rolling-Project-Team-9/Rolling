import React, { useState, useEffect } from 'react';
import Card from '../components/card/Card';
import { getApi } from '../api/api';
import CardList from '../components/card/CardList';

function PostPage() {
  const [data, setData] = useState([]);
  const [id, setId] = useState(936);

  const { name, messageCount, recentMessages, topReactions } = data;

  useEffect(() => {
    const handleHeaderServiceLoad = async (recipientId) => {
      let result;
      try {
        result = await getApi('recipients/', `${recipientId}/`);
      } catch (error) {
        return;
      }
      const recipientData = result;
      if (recipientData) {
        setData(recipientData);
      }
    };

    handleHeaderServiceLoad(id);
  }, [id]);
  return (
    <div>
      PostIdPage
      <CardList recentMessages={recentMessages} />
    </div>
  );
}

export default PostPage;
