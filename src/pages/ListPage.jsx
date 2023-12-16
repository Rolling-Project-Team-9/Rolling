import React, { useEffect, useState } from 'react';
import CardList from '../components/list/CardList';
import { getApi } from '../api/api';

function ListPage() {
  const [postList, setPostList] = useState([]);
  useEffect(() => {
    const getPostList = async () => {
      const { results } = await getApi();
      setPostList(results);
    };
    getPostList();
  }, []);

  return (
    <div>
      <CardList postList={postList} />
    </div>
  );
}

export default ListPage;
