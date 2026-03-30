import { GoogleGenAI } from "@google/genai";

export const generateMoodColor = async (mood: string): Promise<string | null> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [{ parts: [{ text: `Generate a single hex color code that perfectly represents the mood or concept: "${mood}". 
      Return ONLY the hex code (e.g., #FF5733). Do not include any other text or explanation.` }] }],
    });
    
    const text = response.text?.trim() || '';
    const hexMatch = text.match(/#[0-9A-Fa-f]{6}/);
    
    return hexMatch ? hexMatch[0] : null;
  } catch (error) {
    console.error("Error generating mood palette:", error);
    return null;
  }
};
