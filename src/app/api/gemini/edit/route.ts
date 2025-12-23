import { NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GENAI_API_KEY || process.env.GENERATE_API_KEY });

export async function POST(req: Request) {
  try {
    const { image, prompt } = await req.json();

    if (!image || !prompt) {
      return NextResponse.json({ error: 'Missing image or prompt' }, { status: 400 });
    }

    // remove data url prefix if present
    const cleanBase64 = (image as string).replace(/^data:image\/(png|jpeg|jpg|webp);base64,/, '');

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            inlineData: {
              data: cleanBase64,
              mimeType: 'image/png',
            },
          },
          { text: `Edit this image: ${prompt}. Return ONLY the image.` },
        ],
      },
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData && part.inlineData.data) {
        return NextResponse.json({ image: `data:image/png;base64,${part.inlineData.data}` });
      }
    }

    return NextResponse.json({ error: 'No image returned from model' }, { status: 500 });
  } catch (err: any) {
    console.error('Gemini API error:', err);
    return NextResponse.json({ error: String(err?.message || err) }, { status: 500 });
  }
}
