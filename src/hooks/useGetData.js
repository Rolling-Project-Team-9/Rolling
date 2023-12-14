import api from '../api/api';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function useGetData(type, path, limit, offset) {
  const [data, setData] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    (async function () {
      try {
        const result = await api(type, 'GET', path, null, limit, offset);

        if (['RECIPIENTS_ID', 'BACKGROUND_IMGS', 'PROFILE_IMGS', 'MESSAGES'].includes(type)) return setData(result);

        const { results } = result;
        return setData(results);
      } catch (error) {
        return navigate('/notFound');
      }
    })();
  }, []);

  return data;
}

export default useGetData;
