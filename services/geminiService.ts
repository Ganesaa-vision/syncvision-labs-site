import { ChatMessage } from '../types';

export const sendMessageToGemini = async (history: {role: string, text: string}[], message: string): Promise<string> => {
  // Mock implementation. Replace with actual API call when ready.
  console.log("Sending to Gemini:", message);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("This is a simulated response from the SyncVision AI Assistant. Actual integration requires an API key.");
    }, 1000);
  });
};
