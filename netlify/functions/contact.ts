import { Handler } from '@netlify/functions';
import { MailService } from '@sendgrid/mail';
import { z } from 'zod';

const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

const mailService = new MailService();
if (process.env.SENDGRID_API_KEY) {
  mailService.setApiKey(process.env.SENDGRID_API_KEY);
}

export const handler: Handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method not allowed' }),
    };
  }

  try {
    const body = JSON.parse(event.body || '{}');
    const validatedData = contactSchema.parse(body);

    if (!process.env.SENDGRID_API_KEY) {
      console.warn('SENDGRID_API_KEY not found');
      return {
        statusCode: 201,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
        body: JSON.stringify({ 
          success: true, 
          message: "Thank you for your inquiry! We will contact you soon." 
        }),
      };
    }

    const emailContent = `
      New Contact Form Submission from Covenant Advanced Technologies Website
      
      Name: ${validatedData.firstName} ${validatedData.lastName}
      Email: ${validatedData.email}
      Phone: ${validatedData.phone || 'Not provided'}
      Service Interest: ${validatedData.service || 'Not specified'}
      
      Message:
      ${validatedData.message}
      
      ---
      This email was sent from the Covenant Advanced Technologies contact form.
    `;

    await mailService.send({
      to: 'gstephin87@gmail.com',
      from: 'noreply@covenanttech.com',
      subject: `New Contact Form Submission - ${validatedData.firstName} ${validatedData.lastName}`,
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
              <td style="padding: 8px; color: #666;">${validatedData.firstName} ${validatedData.lastName}</td>
            </tr>
            <tr style="background-color: #f9f9f9;">
              <td style="padding: 8px; font-weight: bold; color: #333;">Email:</td>
              <td style="padding: 8px; color: #666;">${validatedData.email}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #333;">Phone:</td>
              <td style="padding: 8px; color: #666;">${validatedData.phone || 'Not provided'}</td>
            </tr>
            <tr style="background-color: #f9f9f9;">
              <td style="padding: 8px; font-weight: bold; color: #333;">Service Interest:</td>
              <td style="padding: 8px; color: #666;">${validatedData.service || 'Not specified'}</td>
            </tr>
          </table>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #333; margin-bottom: 10px;">Message:</h3>
            <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #3B82F6; color: #666;">
              ${validatedData.message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">
          <p style="color: #999; font-size: 12px; text-align: center;">
            This email was sent from the Covenant Advanced Technologies contact form.
          </p>
        </div>
      `,
    });

    return {
      statusCode: 201,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: JSON.stringify({ 
        success: true, 
        message: "Thank you for your inquiry! We will contact you soon." 
      }),
    };
  } catch (error) {
    console.error('Contact form error:', error);
    
    if (error instanceof z.ZodError) {
      return {
        statusCode: 400,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
        body: JSON.stringify({ 
          success: false, 
          message: "Please check your input and try again.",
          errors: error.issues 
        }),
      };
    }

    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: JSON.stringify({ 
        success: false, 
        message: "Something went wrong. Please try again later." 
      }),
    };
  }
};