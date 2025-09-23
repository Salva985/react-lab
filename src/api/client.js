const BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://jsonplaceholder.typicode.com"

export async function client(endpoint, options = {}) {
  const res = await fetch(BASE_URL + endpoint, {
    headers: { "Content-Type": "application/json" },
    ...options,
  })

  if (!res.ok) throw new Error(`API error: ${res.status}`)

  try {
    return await res.json()
  } catch {
    return {}
  }
}