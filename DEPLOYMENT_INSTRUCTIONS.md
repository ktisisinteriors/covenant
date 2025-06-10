# Netlify Deployment Instructions for Covenant Advanced Technologies Website

## Quick Deployment Steps

1. **Go to Netlify**: Visit https://www.netlify.com and sign up/login

2. **Deploy from this Replit**:
   - Click "New site from Git" or "Deploy manually"
   - If using Git: Connect your GitHub account and select this repository
   - If manual: Download the `dist/public` folder contents

3. **Build Settings**:
   - Build command: `vite build`
   - Publish directory: `dist/public`
   - Node version: 20

4. **Environment Variables** (Required for contact form):
   - Add `SENDGRID_API_KEY` with your SendGrid API key
   - This enables email notifications to gstephin87@gmail.com

5. **Deploy**: Click "Deploy site"

## Alternative: Manual Upload

1. Download all files from the `dist/public` folder
2. Go to Netlify dashboard → "Sites" → "Deploy manually"
3. Drag and drop the `dist/public` folder
4. Add environment variables in Site Settings → Environment Variables

## Features Included

- Professional corporate website for Covenant Advanced Technologies
- Smart home banner with Orbitron Bold typography
- Dark navigation with gold accents
- All 7 services showcased
- Contact form with email notifications
- Responsive design
- Kerala contact information (+91 9496054274)

## Contact Form

The contact form will automatically send submissions to gstephin87@gmail.com when the SENDGRID_API_KEY environment variable is properly configured.

Your website will be live at: `https://your-site-name.netlify.app`