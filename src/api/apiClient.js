const URL = import.meta.env.VITE_API_URL;

export async function apiFetch(endpoint, options = {}) {
  const { body, headers, ...rest } = options;

  const response = await fetch(`${URL}${endpoint}`, {
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
    ...rest,
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(`${data.message}`);
  }
  return data;
}