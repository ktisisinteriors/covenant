import { MailService } from '@sendgrid/mail';

if (!process.env.SENDGRID_API_KEY) {
  throw new Error("SENDGRID_API_KEY environment variable must be set");
}

const mailService = new MailService();
mailService.setApiKey(process.env.SENDGRID_API_KEY);

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
}

export async function sendContactFormEmail(formData: ContactFormData): Promise<boolean> {
  try {
    const emailContent = `
      New Contact Form Submission from Covenant Advanced Technologies Website
      
      Name: ${formData.firstName} ${formData.lastName}
      Email: ${formData.email}
      Phone: ${formData.phone || 'Not provided'}
      Service Interest: ${formData.service || 'Not specified'}
      
      Message:
      ${formData.message}
      
      ---
      This email was sent from the Covenant Advanced Technologies contact form.
    `;

    await mailService.send({
      to: 'gstephin87@gmail.com',
      from: 'noreply@covenanttech.com', // You'll need to verify this sender email in SendGrid
      subject: `New Contact Form Submission - ${formData.firstName} ${formData.lastName}`,
      text: emailContent,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3B82F6; border-bottom: 2px solid #3B82F6; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <p style="color: #666;">From Covenant Advanced Technologies Website</p>
          
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #333;">Name:</td>
              <td style="padding: 8px; color: #666;">${formData.firstName} ${formData.lastName}</td>
            </tr>
            <tr style="background-color: #f9f9f9;">
              <td style="padding: 8px; font-weight: bold; color: #333;">Email:</td>
              <td style="padding: 8px; color: #666;">${formData.email}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #333;">Phone:</td>
              <td style="padding: 8px; color: #666;">${formData.phone || 'Not provided'}</td>
            </tr>
            <tr style="background-color: #f9f9f9;">
              <td style="padding: 8px; font-weight: bold; color: #333;">Service Interest:</td>
              <td style="padding: 8px; color: #666;">${formData.service || 'Not specified'}</td>
            </tr>
          </table>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #333; margin-bottom: 10px;">Message:</h3>
            <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #3B82F6; color: #666;">
              ${formData.message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">
          <p style="color: #999; font-size: 12px; text-align: center;">
            This email was sent from the Covenant Advanced Technologies contact form.
          </p>
        </div>
      `,
    });
    
    return true;
  } catch (error) {
    console.error('SendGrid email error:', error);
    return false;
  }
}