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

  if (!response.ok) {
    throw new Error(`API Error: ${response.status}`);
  }
  return response.json();
}