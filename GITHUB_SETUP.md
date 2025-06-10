# How to Connect Your Replit Project to GitHub

## Step 1: Create a GitHub Repository

1. Go to **GitHub.com** and sign in to your account
2. Click the **"+"** button in the top right corner
3. Select **"New repository"**
4. Name your repository: `covenant-advanced-technologies`
5. Add description: `Professional corporate website for Covenant Advanced Technologies`
6. Choose **Public** or **Private** (your preference)
7. Click **"Create repository"**

## Step 2: Connect Replit to GitHub

1. In your Replit project, click the **"Version Control"** tab on the left sidebar
2. Click **"Create a Git Repo"**
3. Click **"Connect to GitHub"**
4. Authorize Replit to access your GitHub account
5. Select your repository: `covenant-advanced-technologies`
6. Click **"Connect Repository"**

## Step 3: Push Your Code

1. In the Version Control tab, you'll see all your files
2. Add a commit message: `Initial commit - Covenant Technologies website`
3. Click **"Commit & push"**

## Step 4: Deploy to Netlify from GitHub

1. Go to **Netlify.com** and sign in
2. Click **"New site from Git"**
3. Choose **"GitHub"** and authorize
4. Select your repository: `covenant-advanced-technologies`
5. Configure build settings:
   - Build command: `vite build`
   - Publish directory: `dist/public`
6. Add environment variable: `SENDGRID_API_KEY`
7. Click **"Deploy site"**

Your website will be live with automatic deployments whenever you push changes from Replit to GitHub!

## Benefits of This Setup

- Automatic backups to GitHub
- Easy collaboration with team members
- Automatic deployments to Netlify
- Professional development workflow
- Version history tracking