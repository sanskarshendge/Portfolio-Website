// src/lib/pinterest.js

export async function getPinterestBoards() {
  const token = import.meta.env.PINTEREST_ACCESS_TOKEN;

  const response = await fetch(
    "https://api.pinterest.com/v5/boards",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const data = await response.json();

  console.log(data);

  return data;
}