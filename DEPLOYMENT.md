# 🚀 GitHub Pages Deployment Guide

## ✅ Your Portfolio is Ready to Deploy!

Your 3D portfolio is now configured for **FREE hosting on GitHub Pages**. Follow these simple steps:

---

## 📋 Step-by-Step Deployment

### 1️⃣ Create a GitHub Repository

1. Go to [GitHub](https://github.com/mrsupun5670)
2. Click **"New"** to create a new repository
3. **Repository name**: Choose a name (e.g., `portfolio`, `my-portfolio`, or `supun-portfolio`)
4. **Public** repository (required for free GitHub Pages)
5. **DO NOT** initialize with README, .gitignore, or license
6. Click **"Create repository"**

### 2️⃣ Update Vite Configuration

Open `vite.config.ts` and change the `base` path to match your repo name:

```typescript
base: '/your-repo-name/', // Replace with YOUR actual repo name
```

**Example**: If your repo is named `portfolio`, use:
```typescript
base: '/portfolio/',
```

### 3️⃣ Initialize Git and Push to GitHub

Open your terminal in the project folder and run these commands:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit your code
git commit -m "Initial commit - 3D Portfolio"

# Add your GitHub repository as remote (replace with YOUR repo URL)
git remote add origin https://github.com/mrsupun5670/your-repo-name.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 4️⃣ Deploy to GitHub Pages

Run this single command to build and deploy:

```bash
npm run deploy
```

This will:
- ✅ Build your production-ready portfolio
- ✅ Create a `gh-pages` branch
- ✅ Deploy to GitHub Pages automatically

### 5️⃣ Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **"Settings"** tab
3. Scroll to **"Pages"** in the left sidebar
4. Under **"Source"**, select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
5. Click **"Save"**

### 6️⃣ Access Your Live Portfolio! 🎉

Your portfolio will be live at:
```
https://mrsupun5670.github.io/your-repo-name/
```

**Example**: If your repo is `portfolio`:
```
https://mrsupun5670.github.io/portfolio/
```

⏱️ **Note**: First deployment may take 2-5 minutes to go live.

---

## 🔄 Updating Your Portfolio

Whenever you make changes:

```bash
# Save your changes
git add .
git commit -m "Update portfolio"
git push

# Deploy the updates
npm run deploy
```

---

## 🎯 Alternative: Use Custom Domain (Optional)

If you have a custom domain (e.g., `supun.dev`):

1. In your repo settings → Pages → Custom domain
2. Enter your domain name
3. Update your domain's DNS settings to point to GitHub Pages
4. Change `vite.config.ts` base to `'/'`

---

## ✨ What's Included

Your deployed portfolio will have:
- ✅ 3D animated background with gravity effects
- ✅ All your projects with live links
- ✅ Working contact form (FormSubmit)
- ✅ GitHub, Facebook, and Email links
- ✅ Fully responsive design
- ✅ Fast loading with optimized assets

---

## 🐛 Troubleshooting

### Issue: 404 Error or Blank Page
**Solution**: Make sure the `base` in `vite.config.ts` matches your repo name exactly.

### Issue: Assets Not Loading
**Solution**: Check that all paths use relative URLs (they already do in your project).

### Issue: Contact Form Not Working
**Solution**: Remember to activate FormSubmit by clicking the verification link in the first email.

---

## 📞 Need Help?

If you encounter any issues:
1. Check the GitHub Actions tab in your repo for build errors
2. Verify the `gh-pages` branch exists
3. Make sure GitHub Pages is enabled in Settings

---

## 🎊 You're All Set!

Your portfolio is ready to impress! Once deployed, share your link:
- 🔗 Add it to your GitHub profile
- 📱 Share on Facebook/LinkedIn
- 💼 Include in your resume

**Good luck with your portfolio! 🚀**
