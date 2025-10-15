export const apiRequest = async (url: string, options?: RequestInit) => {
  const response = await fetch(url, options);
  if (!response.ok) throw new Error(`API Error: ${response.status}`);
  return response.json();
};
