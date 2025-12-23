# 🚀 Quick Deploy Script

Write-Host "🎨 Building your 3D Portfolio..." -ForegroundColor Cyan

# Build the project
npm run build

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Build successful!" -ForegroundColor Green
    Write-Host ""
    Write-Host "📦 Deploying to GitHub Pages..." -ForegroundColor Cyan
    
    # Deploy to GitHub Pages
    npx gh-pages -d dist
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host ""
        Write-Host "🎉 Deployment successful!" -ForegroundColor Green
        Write-Host ""
        Write-Host "Your portfolio will be live at:" -ForegroundColor Yellow
        Write-Host "https://mrsupun5670.github.io/your-repo-name/" -ForegroundColor Cyan
        Write-Host ""
        Write-Host "⏱️  Note: First deployment may take 2-5 minutes to go live." -ForegroundColor Gray
    } else {
        Write-Host "❌ Deployment failed. Make sure you've pushed to GitHub first." -ForegroundColor Red
    }
} else {
    Write-Host "❌ Build failed. Please check the errors above." -ForegroundColor Red
}
