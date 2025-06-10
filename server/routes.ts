import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactInquirySchema } from "@shared/schema";
import { sendContactFormEmail } from "./email";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactInquirySchema.parse(req.body);
      const inquiry = await storage.createContactInquiry(validatedData);
      
      // Send email notification
      const emailSent = await sendContactFormEmail(validatedData);
      if (!emailSent) {
        console.warn('Failed to send email notification for contact form submission');
      }
      
      res.status(201).json({ 
        success: true, 
        message: "Thank you for your inquiry! We will contact you soon.",
        id: inquiry.id 
      });
    } catch (error) {
      if (error instanceof Error && 'issues' in error) {
        // Zod validation error
        res.status(400).json({ 
          success: false, 
          message: "Please check your input and try again.",
          errors: error.issues 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Something went wrong. Please try again later." 
        });
      }
    }
  });

  // Get all contact inquiries (for admin purposes)
  app.get("/api/contact-inquiries", async (req, res) => {
    try {
      const inquiries = await storage.getContactInquiries();
      res.json(inquiries);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch inquiries" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
