const API_URL = 'https://rolling-api.vercel.app';
const TEAM_API_URL = `${API_URL}/2-9`;

// GET
export const getApi = async (type = 'recipients/', messages = '') => {
  try {
    const response = await fetch(`${TEAM_API_URL}/${type}${id}${messages}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

// POST
export const postApi = async (messages = '', data) => {
  try {
    const response = await fetch(`${TEAM_API_URL}/recipients/${id}${messages}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const postData = await response.json();
    return postData;
  } catch (error) {
    console.error('Error posting data:', error);
    throw error;
  }
};

// DELETE
export const deleteApi = async () => {
  try {
    const response = await fetch(`${TEAM_API_URL}/messages/${messageId}/`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error deleting data:', error);
    throw error;
  }
};
