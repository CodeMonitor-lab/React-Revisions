# 🚀 React-Revisions Monorepo

A **Yarn Workspace Monorepo** containing multiple React apps.

---

## 📥 Clone & Setup
```bash
git clone https://github.com/CodeMonitor-lab/React-Revisions.git
cd React-Revisions

📦 Install dependencies (monorepo-aware)
 yarn install

# ▶️ Run all apps concurrently (from root package.json)
yarn dev

# 👉 Or run a specific app only:
yarn workspace facebook-login-clone dev
yarn workspace React-Cards-Layout dev
yarn workspace ToggleNav dev

```

## 💡 Why Use Git LFS?
- GitHub blocks files **larger than 100MB**.  
- Keeps your repository **fast and lightweight**.  
- Stores large assets (images, videos, zips, PDFs) **outside of Git history**, reducing repo size.  
- Works seamlessly with normal Git commands.  

📚 Learn more:  
- 🌐 [Git LFS Website](https://git-lfs.com)  
- 👉 [Git LFS Setup Guide (Windows)](https://docs.github.com/en/repositories/working-with-files/managing-large-files/installing-git-large-file-storage?platform=windows)
- 👉 [Git LFS Setup Guide (macOS)](https://docs.github.com/en/repositories/working-with-files/managing-large-files/installing-git-large-file-storage?platform=mac)

After installing, run:
```bash
git lfs install

```
```

# ⚙️ Git LFS Setup (Ubuntu/Debian)
sudo apt update && sudo apt install -y git-lfs

# 🔧 Enable Git LFS globally
git lfs install

# 📑 Track common large file types
git lfs track "*.png" "*.jpg" "*.jpeg" "*.gif" "*.mp4" "*.zip" "*.pdf"

# ✅ Commit tracking rules
git add .gitattributes
git commit -m "chore: configure Git LFS tracking"

# 🚀 Push to GitHub
git push origin main

# 🔍 Verify tracked files
git lfs ls-files

