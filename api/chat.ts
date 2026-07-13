import { GoogleGenAI } from "@google/genai";

let aiClient: GoogleGenAI | null = null;

function getAI(): GoogleGenAI {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      throw new Error("GEMINI_API_KEY is not defined. Please configure it in your Secrets / settings.");
    }
    aiClient = new GoogleGenAI({
      apiKey: key,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return aiClient;
}

const SYSTEM_INSTRUCTION = `You are "Xen", the official, friendly, and expert AI Assistant for Xentriq Studio.
Your goal is to welcome visitors, answer questions briefly, and guide potential clients to start a project with us.

CRITICAL FORMATTING CONSTRAINTS:
1. Do NOT use asterisks (*) or hash symbols (#) under any circumstances. Never bold or italicize text. Avoid markdown completely.
2. Keep all responses extremely short, sweet, and direct (maximum 1 to 3 sentences).
3. Do not output numbered lists or bullet points using markdown symbols. Use simple paragraphs or direct text.

Key Information about Xentriq Studio:
- Brand Name: Xentriq Studio
- Founder: S.Eshak (S.Eshak is the founder of Xentriq Studio)
- Core Services: Custom software, high-performance web development, mobile apps, e-commerce, custom AI chatbots/agents, and creative UI/UX or motion graphics.
- Project Budgets: Our project ranges from INR 10,000 to INR 75,000 to suit custom needs.
- Contact: Potential clients can email us at admin@xentriqstudio.com or submit the contact form on the site.

Behavior Guidelines:
- Deliver warm, encouraging, yet very brief responses.
- If asked about who the founder, creator, owner, or starter of the studio is, always reply that S.Eshak is the founder of Xentriq Studio.
- If asked about budget, state that our project budgets typically range from INR 10,000 to INR 75,000.
- For queries about starting or contacting us, point them to admin@xentriqstudio.com.`;

export default async function handler(req: any, res: any) {
  // Support CORS if needed
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { messages } = req.body || {};
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Messages array is required." });
    }

    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({
        error: "Gemini API key is not configured. Please add your key in Settings > Secrets."
      });
    }

    const ai = getAI();

    const lastUserMessage = messages[messages.length - 1]?.content || "";
    const lowerText = lastUserMessage.toLowerCase().trim();
    const isFounderQuestion = 
      lowerText.includes("founder") || 
      lowerText.includes("founded") || 
      lowerText.includes("who started") || 
      lowerText.includes("who created") || 
      lowerText.includes("who made xentriq") || 
      lowerText.includes("who built xentriq") || 
      lowerText.includes("who is the owner") || 
      lowerText.includes("owner of xentriq") || 
      lowerText.includes("creator of xentriq") ||
      lowerText.includes("who is eshak") ||
      lowerText.includes("who is s.eshak") ||
      lowerText.includes("who is s. eshak");

    if (isFounderQuestion) {
      return res.json({ text: "S.Eshak is the founder of Xentriq Studio." });
    }

    const contents = messages.map((m: any) => ({
      role: m.role === 'user' ? 'user' : 'model',
      parts: [{ text: m.content }]
    }));

    let response;
    let lastError = null;
    const modelsToTry = ["gemini-2.5-flash", "gemini-1.5-flash", "gemini-3.5-flash", "gemini-3.1-flash-lite", "gemini-flash-latest"];

    for (const modelName of modelsToTry) {
      try {
        response = await ai.models.generateContent({
          model: modelName,
          contents: contents,
          config: {
            systemInstruction: SYSTEM_INSTRUCTION,
            temperature: 0.7,
          },
        });
        if (response && response.text) {
          break;
        }
      } catch (err: any) {
        console.error(`Model ${modelName} failed, trying next fallback. Error:`, err);
        lastError = err;
      }
    }

    if (!response || !response.text) {
      throw lastError || new Error("Failed to generate response from any model.");
    }

    res.json({ text: response.text });
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    res.status(500).json({ error: error.message || "An error occurred while generating response." });
  }
}
