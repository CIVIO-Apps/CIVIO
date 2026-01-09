
import { GoogleGenAI } from "@google/genai";

// Always use const ai = new GoogleGenAI({apiKey: process.env.API_KEY});
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const askCivioAssistant = async (query: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: query,
      config: {
        systemInstruction: `Tu es l'assistant intelligent de l'application CIVIO. 
        Ton rôle est d'aider les citoyens à naviguer dans les services municipaux.
        Sois poli, concis et encourageant.
        Si l'utilisateur pose une question sur une démarche administrative, donne-lui les étapes clés.
        Si l'utilisateur veut signaler un problème, explique-lui d'aller dans la section "J'agis".
        Réponds toujours en français.`,
        temperature: 0.7,
      },
    });
    // The response.text property (not a method, so do not call text())
    return response.text || "Désolé, je n'ai pas pu traiter votre demande pour le moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Une erreur est survenue lors de la communication avec l'assistant.";
  }
};
