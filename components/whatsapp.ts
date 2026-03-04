/**
 * Generates a highly optimized WhatsApp Click-to-Chat link.
 * 
 * @param phoneNumber - The destination phone number (e.g., "60123456789").
 * @param serviceName - The main service category (e.g., "Web Development").
 * @param packageLabel - (Optional) The specific package (e.g., "The Innovator Stack").
 * @param customMessage - (Optional) Override the default message template.
 * @returns A fully formatted and encoded WhatsApp URL.
 */
export const generateWhatsAppLink = (
  phoneNumber: string,
  serviceName: string,
  packageLabel?: string,
  customMessage?: string
): string => {
  // 1. Securely format the phone number (remove +, spaces, dashes)
  const cleanNumber = phoneNumber.replace(/[^\d]/g, '');
  
  // 2. Construct the message
  let text = customMessage || `Hi Ominos Tech, I am interested in your ${serviceName} services${packageLabel ? `, specifically the ${packageLabel}` : ''}. Can we discuss a quote?`;
  
  // 3. URL Encode the text to handle spaces and special characters safely
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(text)}`;
};