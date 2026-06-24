import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

// Helper to send email to admin@xentriqstudio.com
async function sendContactEmail(data: {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  projectType: string;
  budget: string;
  message?: string;
}) {
  const host = process.env.SMTP_HOST || 'smtp.gmail.com';
  const port = parseInt(process.env.SMTP_PORT || '587', 10);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const receiver = process.env.CONTACT_RECEIVER_EMAIL || 'admin@xentriqstudio.com';

  console.log("=========================================");
  console.log("🆕 NEW PROJECT INQUIRY RECEIVED!");
  console.log(`From: ${data.name} (${data.email})`);
  console.log(`Company: ${data.company || 'N/A'}`);
  console.log(`Phone: ${data.phone || 'N/A'}`);
  console.log(`Project Type: ${data.projectType}`);
  console.log(`Target Budget: ${data.budget}`);
  console.log(`Message: ${data.message || 'No message provided'}`);
  console.log("=========================================");

  if (!user || !pass) {
    console.warn("⚠️ SMTP credentials not fully configured (SMTP_USER/SMTP_PASS missing). Skipped mailing.");
    return { success: false, reason: "SMTP credentials not specified in secrets configuration" };
  }

  const transporter = nodemailer.createTransport({
    host: host,
    port: port,
    secure: port === 465,
    auth: {
      user: user,
      pass: pass,
    },
  });

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>New Project Proposal - Xentriq Studio</title>
      <style>
        body {
          background-color: #030303;
          color: #f3f3f3;
          font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
          margin: 0;
          padding: 40px 20px;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          background-color: #070707;
          border: 1px solid #7B2FF7;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 30px rgba(123, 47, 247, 0.1);
        }
        .header {
          background-color: #000;
          padding: 30px;
          text-align: center;
          border-bottom: 1px solid rgba(123, 47, 247, 0.2);
        }
        .brand {
          font-size: 20px;
          font-weight: 300;
          letter-spacing: 0.4em;
          color: #fff;
          text-transform: uppercase;
          margin: 0;
        }
        .brand span {
          color: #7B2FF7;
          font-weight: 600;
        }
        .content {
          padding: 30px;
        }
        h1 {
          font-size: 18px;
          color: #7B2FF7;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          margin-top: 0;
          margin-bottom: 25px;
          border-left: 2px solid #7B2FF7;
          padding-left: 10px;
        }
        .field-group {
          margin-bottom: 18px;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          padding-bottom: 10px;
        }
        .label {
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: #999;
          margin-bottom: 4px;
        }
        .value {
          font-size: 14px;
          color: #fff;
          line-height: 1.5;
        }
        .tag {
          display: inline-block;
          padding: 4px 10px;
          background-color: rgba(123, 47, 247, 0.1);
          color: #7B2FF7;
          border: 1px solid rgba(123, 47, 247, 0.3);
          font-size: 11px;
          border-radius: 4px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
        .footer {
          background-color: #000;
          padding: 20px;
          text-align: center;
          font-size: 10px;
          color: #555;
          letter-spacing: 0.1em;
          border-top: 1px solid rgba(123, 47, 247, 0.1);
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2 class="brand">XENTRIQ<span>STUDIO</span></h2>
        </div>
        <div class="content">
          <h1>New Project Proposal Received</h1>
          
          <div class="field-group">
            <div class="label">Client Name</div>
            <div class="value">${data.name}</div>
          </div>
          
          <div class="field-group">
            <div class="label">Email Address</div>
            <div class="value"><a href="mailto:${data.email}" style="color: #7B2FF7; text-decoration: none;">${data.email}</a></div>
          </div>

          <div class="field-group">
            <div class="label">Company / Organization</div>
            <div class="value">${data.company || "<em>Not Specified</em>"}</div>
          </div>

          <div class="field-group">
            <div class="label">Phone Number</div>
            <div class="value">${data.phone || "<em>Not Specified</em>"}</div>
          </div>

          <div class="field-group">
            <div class="label">Project Type</div>
            <div class="value"><span class="tag">${data.projectType}</span></div>
          </div>

          <div class="field-group">
            <div class="label">Target Budget Bracket</div>
            <div class="value" style="color: #F3F3F3; font-weight: bold;">${data.budget}</div>
          </div>

          <div class="field-group" style="border-bottom: none; padding-bottom: 0;">
            <div class="label">Briefing / Message</div>
            <div class="value" style="background-color: #090909; padding: 12px; border-radius: 4px; border: 1px solid rgba(255,255,255,0.02); white-space: pre-wrap;">${data.message || 'No additional project briefing supplied.'}</div>
          </div>
        </div>
        <div class="footer">
          XENTRIQ STUDIO AUTOMATION PIPELINE • Bespoke High-End Experience Builders
        </div>
      </div>
    </body>
    </html>
  `;

  const info = await transporter.sendMail({
    from: `"Xentriq Studio Portal" <${user}>`,
    to: receiver,
    replyTo: data.email,
    subject: `💼 New Project Proposal: ${data.projectType} - ${data.name}`,
    html: htmlContent,
    text: `New Project Proposal Info:\n\nName: ${data.name}\nEmail: ${data.email}\nCompany: ${data.company || ''}\nPhone: ${data.phone || ''}\nProject Type: ${data.projectType}\nBudget: ${data.budget}\nMessage: ${data.message || ''}\n`,
  });

  return { success: true, messageId: info.messageId };
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware
  app.use(express.json());

  // Static SEO crawler indices
  app.get("/sitemap.xml", (req, res) => {
    res.header("Content-Type", "application/xml");
    res.send(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://xentriqstudio.com/</loc>
    <lastmod>2026-06-22</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://xentriqstudio.com/privacy</loc>
    <lastmod>2026-06-22</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>https://xentriqstudio.com/terms</loc>
    <lastmod>2026-06-22</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
</urlset>`);
  });

  app.get("/robots.txt", (req, res) => {
    res.header("Content-Type", "text/plain");
    res.send(`User-agent: *
Allow: /
Disallow: /api/
Sitemap: https://xentriqstudio.com/sitemap.xml`);
  });

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

  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, company, phone, projectType, budget, message } = req.body;
      if (!name || !email || !projectType || !budget) {
        return res.status(400).json({ error: "Missing required contact details (name, email, projectType, budget)." });
      }

      const result = await sendContactEmail({
        name,
        email,
        company,
        phone,
        projectType,
        budget,
        message
      });

      return res.json({ 
        success: true, 
        message: "Your prestige proposal has reached Xentriq Studio pipelines.",
        emailDispatched: result.success,
        reason: result.reason || undefined
      });
    } catch (error: any) {
      console.error("Failed to process proposal contact inquiry:", error);
      return res.status(500).json({ error: error.message || "Bespoke pipeline connection error." });
    }
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
