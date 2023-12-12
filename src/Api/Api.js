const API_URL = 'https://rolling-api.vercel.app';
const TEAM_API_URL = `${API_URL}/2-9`;

const TestData = async () => {
  const response = await fetch(`${TEAM_API_URL}/recipients/936/messages/`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  const result = data.results;
  return result;
};

export default TestData;
