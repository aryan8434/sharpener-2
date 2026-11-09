# Deployment Guide

This guide covers deploying the **E-Commerce Product Admin** web application to popular hosting platforms.

---

## 1. Deploying to GitHub Pages

GitHub Pages is a free, simple hosting solution for static web applications directly from a GitHub repository.

### Steps:
1. Push your repository to GitHub on branch `main`.
2. Open your repository on GitHub in a web browser.
3. Click on the **Settings** tab.
4. In the left navigation sidebar, select **Pages** (under the "Code and automation" section).
5. Under **Build and deployment**:
   - Source: `Deploy from a branch`
   - Branch: `main` / folder `/ (root)`
6. Click **Save**.
7. Wait 1-2 minutes for the deployment workflow to complete.
8. Your application will be live at:
   ```text
   https://<username>.github.io/<repository-name>/
   ```

---

## 2. Deploying to Vercel

Vercel provides automatic SSL certificates, global CDN edge distribution, and continuous deployment on every git push.

### Steps:
1. Go to [Vercel](https://vercel.com/) and sign in with GitHub.
2. Click **Add New...** -> **Project**.
3. Import your `sharpener-2` repository.
4. In the **Configure Project** screen:
   - Framework Preset: `Other`
   - Root Directory: `./`
5. Click **Deploy**.
6. Vercel will build and assign a production URL (e.g., `https://sharpener-2.vercel.app`).

---

## 3. Deploying to Netlify

### Steps:
1. Visit [Netlify](https://www.netlify.com/) and log in with your GitHub account.
2. Click **Add new site** -> **Import an existing project**.
3. Select GitHub and authorize access to `sharpener-2`.
4. Leave build command blank (static site) and publish directory as `.`.
5. Click **Deploy Site**.

---

> [!NOTE]
> Since this application uses the free CrudCrud API endpoint, make sure your endpoint is active before deploying publicly. If it expires, update `apiUrl` in `index.js`.
