export async function getPinterestPins() {
  const token = import.meta.env.PINTEREST_ACCESS_TOKEN;

  const response = await fetch(
    "https://api-sandbox.pinterest.com/v5/boards",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.json();
}