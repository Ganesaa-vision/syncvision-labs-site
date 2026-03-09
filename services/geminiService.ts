interface HistoryItem {
  role: string;
  text: string;
}

export const sendMessageToGemini = async (history: HistoryItem[], message: string): Promise<string> => {
  // Simulate AI response for now since backend/API key might not be set up
  // In a real app, this would call your backend API which calls Google Gemini
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("I am Omino Tech's automated architect. I can help you design a custom web solution or answer questions about our engineering protocols. What is your objective today?");
    }, 1000);
  });
};