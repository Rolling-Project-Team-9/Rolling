const API_URL = 'https://rolling-api.vercel.app';
const TEAM_API_URL = `${API_URL}/2-9`;

export const TestData = async () => {
  const response = await fetch(`${TEAM_API_URL}/recipients/936/messages/`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  const result = data.results;
  return result;
};

export const ReactionData = async () => {
  const response = await fetch(`${TEAM_API_URL}/recipients/936/reactions/`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  const result = data.results;
  return result;
};

export const exData = async () => {
  const response = await fetch(`${TEAM_API_URL}/recipients/936/reactions/`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  return data;
};
