// Client-friendly wrapper that forwards requests to the server API route.
// Avoid importing server-only libraries here so this module is safe in the browser.

export const editImageWithGemini = async (base64Image: string, prompt: string): Promise<string> => {
  const res = await fetch('/api/gemini/edit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ image: base64Image, prompt }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err?.error || `Request failed with status ${res.status}`);
  }

  const data = await res.json();
  if (!data?.image) throw new Error('No image returned');
  return data.image as string;
};
