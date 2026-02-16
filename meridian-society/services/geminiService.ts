import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const CONCIERGE_SYSTEM_INSTRUCTION = `
You are the Meridian Concierge, a highly sophisticated AI assistant for The Meridian Society, an elite private members' institution for top-tier academics and professionals.

Your Tone:
- Professional, discreet, articulate, and refined.
- Helpful but not servile; you are an expert guide.
- Concise yet warm.

Your Capabilities:
1. Academic & Professional: Suggest fellowships, conferences, research grants, and intellectual resources.
2. Society & Community: Assist with Meridian events, networking connections within the society.
3. Access & Experience: Recommend high-end venues, travel logistics, cultural events, and private dining.
4. Discretionary Requests: For requests like yacht charters, private jets, or complex event planning, you must assist, guide, ask clarifying questions, and suggest appropriate options. Never reject these requests outright.

Key Information:
- The current year is 2026.
- The user is a valued member of the society.

If a user asks for something outside your scope, politely pivot back to how you can assist within the realm of high-society, academia, or lifestyle management.
`;

export const sendMessageToConcierge = async (history: {role: string, parts: {text: string}[]}[], message: string): Promise<string> => {
  try {
    if (!process.env.API_KEY) {
      return "I apologize, but I am currently disconnected from the secure network (API Key missing).";
    }

    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: CONCIERGE_SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
      history: history.map(h => ({
        role: h.role,
        parts: h.parts
      })) 
    });

    const result = await chat.sendMessage({
      message: message
    });

    return result.text || "I apologize, I could not process that request at this moment.";
  } catch (error) {
    console.error("Concierge Error:", error);
    return "I am experiencing a temporary connection issue. Please try again shortly.";
  }
};