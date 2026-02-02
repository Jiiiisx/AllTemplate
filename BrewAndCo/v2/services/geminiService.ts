
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getCoffeeAdvice = async (userPrompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userPrompt,
      config: {
        systemInstruction: "You are the expert Head Roaster and Sommelier at 'Brew & Co.'. Your tone is sophisticated, minimalist, and deeply knowledgeable about artisanal coffee. You help customers choose the right beans, explain brewing methods like V60, Chemex, and AeroPress with scientific precision, and share stories about origin farms. Keep responses concise and inspiring.",
        maxOutputTokens: 500,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm sorry, I'm having a bit of trouble connecting to my brewing database. Please try again in a moment.";
  }
};
