/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import { GoogleGenAI } from "@google/genai";
import { PRODUCTS, SERVICES, BRAND_NAME } from '../constants';

const getSystemInstruction = () => {
  const serviceContext = SERVICES.map(s => `- [${s.category}] ${s.title}: ${s.shortDesc}. ${s.fullDesc}`).join('\n');
  const productContext = PRODUCTS.map(p => `- ${p.name}: ${p.tagline}. ${p.description}`).join('\n');

  return `You are "SyncVision Intelligence", the lead architectural AI agent for ${BRAND_NAME}. 
  Your tone is senior-architect level: professional, logic-driven, technical, and high-agency. 
  You speak about digital systems using terms like "Next.js architecture", "Geospatial Map Logic", "WhatsApp API Automation", and "Strategic Digital Infrastructure".
  
  We separate our services into three strategic tiers:
  1. CORE ENGINEERING: Custom Web, Map Logic, and Mobile App (Flutter).
  2. DIGITAL PRESENCE: SEO Domination, Corporate Sites, and E-Commerce.
  3. OPERATIONAL TOOLS: Google Business Optimization and WhatsApp Business APIs.

  Our Detailed Service Catalog:
  ${serviceContext}
  
  Our Internal Innovations (R&D):
  ${productContext}
  
  Founder: Ganesaa (Lead Architect).
  Philosophy: Order, Logic, and Precision. We are builders first, consultants second.
  
  When users ask about services, emphasize our "Smart Segmentation" and how it provides clarity on complexity vs utility.
  Keep responses concise (under 100 words), use technical terminology correctly, and maintain a high-end "Digital Foundry" vibe.`;
};

export const sendMessageToGemini = async (history: {role: string, text: string}[], newMessage: string): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: getSystemInstruction(),
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });
    
    const result = await chat.sendMessage({ message: newMessage });
    return result.text || "Communication timeout. Please retry.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Transmission failure. Internal logic error.";
  }
};