// EmailJS Configuration
export const emailjsConfig = {
  serviceId: 'service_3o3h87v',
  templateId: 'template_pc30hx8',
  publicKey: 'P46sCK11mvcaepbfA',
};

// Template parameters interface for type safety
export interface EmailTemplateParams extends Record<string, unknown> {
  user_name: string;
  user_email: string;
  message: string;
  to_name: string;
  from_email: string;
  reply_to: string;
  date: string;
  time: string;
}

// Email service utility
export const sendEmail = async (templateParams: EmailTemplateParams) => {
  try {
    const emailjs = await import('@emailjs/browser');
    
    const result = await emailjs.default.send(
      emailjsConfig.serviceId,
      emailjsConfig.templateId,
      templateParams,
      emailjsConfig.publicKey
    );
    
    return result;
  } catch (error) {
    console.error('EmailJS Error:', error);
    throw error;
  }
};
