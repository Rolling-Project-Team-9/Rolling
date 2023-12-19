const API_URL = 'https://rolling-api.vercel.app';
const TEAM_API_URL = `${API_URL}/2-9`;

export const ENDPOINT = {
  RECIPIENTS: 'recipients/',
  MESSAGES: 'messages/',
  REACTIONS: 'reactions/',
  BACKGROUND_IMAGE: 'background-images/',
  PROFILE_IMAGE: 'profile-images/',
};

export const getApi = async (endPoint = ENDPOINT.RECIPIENTS, sort = '') => {
  const query = `?sort=${sort}`;
  const response = await fetch(`${TEAM_API_URL}/${endPoint}${sort && query}`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const body = await response.json();
  return body;
};

export const postApi = async (postData, endPoint = ENDPOINT.RECIPIENTS) => {
  const response = await fetch(`${TEAM_API_URL}/${endPoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postData),
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const body = await response.json();
  return body;
};

export const putApi = async (putData, endPoint = ENDPOINT.RECIPIENTS) => {
  const response = await fetch(`${TEAM_API_URL}/${endPoint}`, {
    method: 'PUT',
    body: JSON.stringify(putData),
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const body = await response.json();
  return body;
};

export const deleteApi = async (endPoint = ENDPOINT.RECIPIENTS) => {
  try {
    const response = await fetch(`${TEAM_API_URL}/${endPoint}`, { method: 'DELETE' });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const body = await response.text();

    if (body) {
      return JSON.parse(body);
    }

    return null;
  } catch (error) {
    console.error('Error deleting data:', error);
    throw error;
  }
};

export const pathApi = async (updateData, endPoint = ENDPOINT.MESSAGES) => {
  const response = await fetch(`${TEAM_API_URL}/${endPoint}`, {
    method: 'POST',
    body: JSON.stringify(updateData),
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const body = await response.json();
  return body;
};