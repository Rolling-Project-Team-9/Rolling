import React, { useEffect, useState } from 'react';
import CardList from '../components/list/CardList';
import { getRecipientList } from '../api/users';
import useAsync from '../hooks/useAsync';

function ListPage() {
  const [isLoading, isError, getRecipientListAsync] = useAsync(getRecipientList);
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const getPostList = async () => {
      const { results } = await getRecipientListAsync();
      setPostList(results);
    };
    getPostList();
  }, [getRecipientListAsync]);

  return (
    <div>
      <CardList postList={postList} />
    </div>
  );
}

export default ListPage;
