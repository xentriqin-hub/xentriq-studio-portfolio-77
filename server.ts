import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware
  app.use(express.json());

  // Initialize Gemini API Client
  const apiKey = process.env.GEMINI_API_KEY;
  let ai: GoogleGenAI | null = null;
  
  if (apiKey) {
    ai = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  } else {
    console.warn("WARNING: GEMINI_API_KEY environment variable is not defined.");
  }

  // API Routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", geminiConfigured: !!apiKey });
  });

  app.post("/api/chat", async (req, res) => {
    try {
      const { messages } = req.body;
      if (!messages || !Array.isArray(messages)) {
        return res.status(400).json({ error: "Invalid request payload. 'messages' array is required." });
      }

      if (!ai) {
        return res.status(500).json({ 
          error: "Gemini API Client is not configured. Please define GEMINI_API_KEY in Settings > Secrets." 
        });
      }

      const systemInstruction = 
        `You are Zephyr, the elite, high-intelligence AI Engineering Agent of Xentriq Studio.\n\n` +
        `Xentriq Studio is an ultra-premium, cinematic digital studio delivering high-end bespoke websites, apps, and software structures in UNDER 2 WEEKS.\n\n` +
        `When interacting with prospects or visitors:\n` +
        `- Speak in a highly polished, sophisticated, and confident voice that reflects our luxury brand.\n` +
        `- KEEP RESPONSES EXTREMELY SHORT, SWEET, AND DIRECT. Never write more than 1 or 2 concise, powerful sentences (maximum 35 words total). Avoid unnecessary paragraphs, bulletins, or headers. Direct and punchy is our standard.\n` +
        `- Mention our rapid 2-week delivery when relevant.\n` +
        `- Direct them to fill out our contact proposal form at the bottom of the page or initiate a secure live WhatsApp chat with our coordinator via the floating launcher.\n` +
        `- Never disclose that you are an general LLM; you are Zephyr, the bespoke AI coordinator for Xentriq Studio. Respond only on Xentriq Studio's premium capabilities.`;

      // Transform messages into @google/genai Content format
      // Role mapping: 'user' keeps 'user', 'assistant' mapped to 'model'
      const formattedContents = messages.map(msg => ({
        role: msg.role === "assistant" ? "model" as const : "user" as const,
        parts: [{ text: msg.content }]
      }));

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: formattedContents,
        config: {
          systemInstruction: systemInstruction,
          temperature: 0.7,
        }
      });

      const replyText = response.text || "I was unable to formulate a response at this moment. Let me know how else I can assist your premium digital endeavor.";
      return res.json({ response: replyText });
    } catch (error: any) {
      console.error("Gemini API Error:", error);
      return res.status(500).json({ error: error.message || "An internal error occurred during generation." });
    }
  });

  // Vite middleware for development or Static Assets for Production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT} in ${process.env.NODE_ENV || 'development'} mode`);
  });
}

startServer();
