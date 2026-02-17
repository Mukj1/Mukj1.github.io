import { GoogleGenAI } from "@google/genai";
import { PROFILE, RESEARCH_DATA, LOG_DATA } from '../constants';

const API_KEY = process.env.API_KEY || '';

let ai: GoogleGenAI | null = null;

if (API_KEY) {
  ai = new GoogleGenAI({ apiKey: API_KEY });
}

// System instruction context for the AI
const SYSTEM_INSTRUCTION = `
You are an AI assistant for ${PROFILE.name}'s personal portfolio website.
Your goal is to answer visitor questions about ${PROFILE.name} based on the following data:

Bio: ${PROFILE.bio}
Current Role: ${PROFILE.title} at ${PROFILE.affiliation}
Skills: ${JSON.stringify(PROFILE)}

Research Papers:
${RESEARCH_DATA.map(p => `- ${p.title} (${p.year}): ${p.abstract}`).join('\n')}

Recent Logs/Blog Posts:
${LOG_DATA.map(l => `- [${l.date}] ${l.title}: ${l.summary}`).join('\n')}

Guidelines:
- Be polite, professional, yet approachable.
- Keep answers concise (under 3 sentences unless asked for detail).
- If asked about something not in the data, politely say you don't know but can forward a message (simulated).
- You are representing a Senior Research Engineer, so maintain a knowledgeable tone.
`;

export const sendMessageToGemini = async (userMessage: string, history: {role: 'user' | 'model', content: string}[] = []) => {
  if (!ai) {
    // Fallback if no API key is present
    return "I'm currently in static mode (no API key configured). Please add an API Key to enable the live chat agent.";
  }

  try {
    const model = 'gemini-3-flash-preview';
    
    // Construct the prompt with history
    const contents = [
      ...history.map(h => ({ role: h.role, parts: [{ text: h.content }] })),
      { role: 'user', parts: [{ text: userMessage }] }
    ];

    const response = await ai.models.generateContent({
      model: model,
      contents: contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });

    return response.text || "I couldn't generate a response at the moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I encountered an error while processing your request.";
  }
};