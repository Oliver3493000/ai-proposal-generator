# Deployment Guide

This guide will help you deploy the AI Proposal Generator to Vercel and set up the necessary services.

## Prerequisites

- GitHub account
- Vercel account (free tier is sufficient)
- OpenAI API key ([Get one here](https://platform.openai.com/api-keys))
- (Optional) Database for future features

## Step 1: Prepare Your Repository

### 1.1 Initialize Git Repository

```bash
cd ai-proposal-generator
git init
git add .
git commit -m "Initial commit: AI Proposal Generator"
```

### 1.2 Create GitHub Repository

1. Go to [GitHub](https://github.com/new)
2. Create a new repository named `ai-proposal-generator`
3. **Do NOT** initialize with README, .gitignore, or license (we already have these)

### 1.3 Push to GitHub

```bash
git remote add origin https://github.com/YOUR_USERNAME/ai-proposal-generator.git
git branch -M main
git push -u origin main
```

## Step 2: Get OpenAI API Key

1. Go to [OpenAI Platform](https://platform.openai.com/api-keys)
2. Sign in or create an account
3. Click "Create new secret key"
4. Copy the key (you won't be able to see it again!)
5. **Important**: Keep this key secure and never commit it to Git

## Step 3: Deploy to Vercel

### Option A: Deploy via Vercel Dashboard (Recommended)

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **"Add New..."** → **"Project"**
3. Import your GitHub repository:
   - Click **"Import Git Repository"**
   - Select `ai-proposal-generator`
   - Click **"Import"**

4. Configure Project:
   - **Framework Preset**: Vite
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `pnpm build` (auto-detected)
   - **Output Directory**: `dist` (auto-detected)

5. Add Environment Variables:
   Click **"Environment Variables"** and add:

   | Name | Value | Notes |
   |------|-------|-------|
   | `BUILT_IN_FORGE_API_KEY` | `sk-...` | Your OpenAI API key |
   | `BUILT_IN_FORGE_API_URL` | `https://api.openai.com/v1` | OpenAI endpoint |
   | `VITE_APP_TITLE` | `AI Proposal Generator` | App title |
   | `VITE_APP_LOGO` | `https://your-logo.com/logo.png` | Logo URL (optional) |

6. Click **"Deploy"**

7. Wait for deployment to complete (usually 2-3 minutes)

8. Your app will be live at `https://your-project.vercel.app`

### Option B: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. Follow the prompts:
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N**
   - Project name? `ai-proposal-generator`
   - Directory? `./`
   - Override settings? **N**

5. Add environment variables:
```bash
vercel env add BUILT_IN_FORGE_API_KEY
# Paste your OpenAI API key when prompted

vercel env add BUILT_IN_FORGE_API_URL
# Enter: https://api.openai.com/v1
```

6. Deploy to production:
```bash
vercel --prod
```

## Step 4: Verify Deployment

1. Visit your deployed URL
2. Click "Try it Free"
3. Paste a job description
4. Click "Generate Proposal"
5. Verify that a proposal is generated successfully

## Step 5: Custom Domain (Optional)

1. In Vercel Dashboard, go to your project
2. Click **"Settings"** → **"Domains"**
3. Add your custom domain
4. Follow DNS configuration instructions
5. Wait for DNS propagation (can take up to 48 hours)

## Environment Variables Reference

### Required Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `BUILT_IN_FORGE_API_KEY` | OpenAI API key for generating proposals | `sk-proj-...` |
| `BUILT_IN_FORGE_API_URL` | OpenAI API endpoint | `https://api.openai.com/v1` |

### Optional Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_APP_TITLE` | Application title shown in browser | `AI Proposal Generator` |
| `VITE_APP_LOGO` | Logo URL for branding | Manus default logo |
| `DATABASE_URL` | Database connection (for future features) | Not used currently |

## Troubleshooting

### Build Fails

**Error**: `Module not found` or `Cannot find package`

**Solution**: 
```bash
# Clear node_modules and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### API Key Not Working

**Error**: `401 Unauthorized` or `Invalid API key`

**Solution**:
1. Verify your OpenAI API key is correct
2. Check if you have credits in your OpenAI account
3. Make sure the key starts with `sk-`
4. Re-add the environment variable in Vercel

### Proposal Generation Fails

**Error**: `Failed to generate proposal`

**Solution**:
1. Check Vercel logs: Dashboard → Project → Deployments → Latest → Logs
2. Verify `BUILT_IN_FORGE_API_URL` is set to `https://api.openai.com/v1`
3. Check OpenAI API status: https://status.openai.com

### CORS Errors

**Error**: `CORS policy blocked`

**Solution**: This shouldn't happen with the current setup. If it does:
1. Check that API calls are going through the backend (tRPC)
2. Verify Vercel serverless functions are working
3. Check browser console for detailed error messages

## Updating Your Deployment

After making changes to your code:

```bash
# Commit changes
git add .
git commit -m "Your commit message"
git push

# Vercel will automatically deploy the new version
```

Or manually trigger a deployment:
```bash
vercel --prod
```

## Cost Estimation

### Vercel (Free Tier)
- ✅ Free for hobby projects
- ✅ Unlimited deployments
- ✅ 100GB bandwidth/month
- ✅ Serverless functions included

### OpenAI API
- GPT-4.1-mini: ~$0.15 per 1M input tokens, ~$0.60 per 1M output tokens
- Average proposal (500 words): ~$0.001 per generation
- 1000 proposals/month: ~$1-2

**Total estimated cost**: $1-2/month for moderate usage

## Security Best Practices

1. **Never commit API keys**: Always use environment variables
2. **Rotate keys regularly**: Change your OpenAI API key every 3-6 months
3. **Monitor usage**: Check OpenAI dashboard for unusual activity
4. **Set spending limits**: Configure limits in OpenAI dashboard
5. **Use .gitignore**: Ensure `.env` is in `.gitignore`

## Next Steps

After successful deployment:

1. **Share your project**: Add the live URL to your portfolio
2. **Monitor analytics**: Check Vercel Analytics for usage stats
3. **Gather feedback**: Share with friends and collect improvements
4. **Add features**: Consider implementing:
   - Proposal templates
   - Quality scoring
   - User accounts with history
   - Premium features

## Support

- **Vercel Issues**: https://vercel.com/support
- **OpenAI Issues**: https://help.openai.com
- **Project Issues**: Open an issue on GitHub

---

**Congratulations!** 🎉 Your AI Proposal Generator is now live!
