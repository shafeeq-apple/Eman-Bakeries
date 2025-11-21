import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const getApiKey = (): string | undefined => {
  return process.env.API_KEY;
};

export const generateBakingAdvice = async (prompt: string): Promise<string> => {
  const apiKey = getApiKey();
  
  if (!apiKey) {
    console.warn("API Key missing for Gemini Service");
    return "I'm sorry, I cannot access my baking knowledge at the moment. Please ensure the API Key is configured.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    
    // Using the specific model required by instructions for basic text tasks
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: `You are the Head Chef at Eman Bakeries, a luxury industrial bakery brand. 
        Your tone is professional, warm, and premium (similar to a Bentley concierge but for bread). 
        You answer questions about baking, bread pairings, and Eman's products (Pita, Croissants, Sweets).
        Keep answers concise (under 100 words) and elegant.
        Do not mention competitors.
        If asked about ingredients, emphasize "premium sourced grains" and "authentic methods".`,
      }
    });

    return response.text || "I apologize, I am currently kneading dough and cannot answer right now.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "An unexpected error occurred in the kitchen. Please try again later.";
  }
};