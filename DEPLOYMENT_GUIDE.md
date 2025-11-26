# Click-by-Click Deployment Guide

Follow these exact steps to move the code from this chat into VS Code and deploy it to the web.

## Phase 1: Create Files in VS Code (Do this FIRST)

1.  **Create a Folder**:
    *   Go to your Computer's Desktop.
    *   Create a new folder named `eman-bakeries`.

2.  **Open in VS Code**:
    *   Open VS Code.
    *   Click **File** (top left) -> **Open Folder...**
    *   Select the `eman-bakeries` folder you just created.

3.  **Create the Files**:
    *   Look at the **Explorer** panel (left side).
    *   Click the **New File** icon (looks like a paper with a +) for each file listed below.
    *   **Copy the code** I provided in the chat for that file and **Paste** it into VS Code.
    *   Save each file (`Ctrl+S` or `Cmd+S`).

    **List of files to create in the root folder:**
    *   `package.json`
    *   `vite.config.ts`
    *   `index.html`
    *   `index.tsx`
    *   `App.tsx`
    *   `constants.ts`
    *   `types.ts`
    *   `metadata.json`

4.  **Create Components Folder**:
    *   Click the **New Folder** icon. Name it `components`.
    *   Right-click the `components` folder -> **New File**.
    *   Create these files inside `components` and paste their code:
        *   `Navbar.tsx`
        *   `Hero.tsx`
        *   `HistorySection.tsx`
        *   `ProductShowcase.tsx`
        *   `ProductCard.tsx`
        *   `DistributorsSection.tsx`
        *   `Footer.tsx`
        *   `Button.tsx`
        *   `FloatingWhatsApp.tsx`

---

## Phase 2: Install Dependencies

1.  **Open Terminal**:
    *   In VS Code, look at the top menu bar. Click **Terminal** -> **New Terminal**.
    *   A panel will open at the bottom.

2.  **Run Install Command**:
    *   Click inside that terminal panel.
    *   Type the following and press **Enter**:
        ```bash
        npm install
        ```
    *   *Wait for it to finish (it might take a minute).*

---

## Phase 3: Create Repository on GitHub

1.  Open your web browser and go to [GitHub.com](https://github.com).
2.  **Top Right Corner**: Click the **+** (plus icon) next to your avatar.
3.  Select **New repository**.
4.  **Repository Name**: Enter `eman-bakeries`.
    *   *Note: If you choose a different name, you must update the `base: '/eman-bakeries/'` line in `vite.config.ts`.*
5.  **Public/Private**: Choose **Public**.
6.  **Initialize**: Do **NOT** check any boxes (README, .gitignore, License). Leave them empty.
7.  Click the green **Create repository** button.
8.  **Copy URL**: On the next screen, copy the HTTPS URL (e.g., `https://github.com/YourName/eman-bakeries.git`).

---

## Phase 4: Push Code

Return to your VS Code Terminal and run these commands **one by one**, pressing Enter after each:

1.  Initialize Git:
    ```bash
    git init
    ```

2.  Stage Files:
    ```bash
    git add .
    ```

3.  Commit Files:
    ```bash
    git commit -m "Initial launch"
    ```

4.  Link to GitHub (Paste **YOUR** URL here):
    ```bash
    git remote add origin https://github.com/YOUR_USERNAME_HERE/eman-bakeries.git
    ```

5.  Rename Branch:
    ```bash
    git branch -M main
    ```

6.  Push Code:
    ```bash
    git push -u origin main
    ```

---

## Phase 5: Deploy

1.  In your VS Code Terminal, run:
    ```bash
    npm run deploy
    ```
2.  Wait until you see the message **"Published"**.

---

## Phase 6: Activate Site (GitHub Website)

1.  Go back to your GitHub repository page in the browser.
2.  **Top Menu**: Click the **Settings** tab (usually far right).
3.  **Left Sidebar**: Scroll down to the "Code and automation" section and click **Pages**.
4.  **Build and deployment**:
    *   **Source**: Ensure it says "Deploy from a branch".
    *   **Branch**: Click the dropdown menu. Select **gh-pages**.
    *   **Folder**: Keep as `/(root)`.
5.  Click **Save**.

**Done!** Wait about 60 seconds, refresh the page, and you will see your live website link at the top of the Pages settings screen.

---

## Phase 7: Connect Custom Domain (emanbakeries.com)

### Step A: Configure DNS at Your Domain Registrar

Go to your domain registrar (where you bought `emanbakeries.com`) and add these DNS records:

**Option 1: Apex Domain (emanbakeries.com)**

Add these **A records** pointing to GitHub's servers:

| Type | Name | Value |
|------|------|-------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

**Option 2: Add www subdomain (recommended)**

Also add a **CNAME record** for www:

| Type | Name | Value |
|------|------|-------|
| CNAME | www | YOUR_GITHUB_USERNAME.github.io |

### Step B: Configure GitHub Pages Custom Domain

1. Go to your GitHub repository page.
2. Click **Settings** tab.
3. Click **Pages** in the left sidebar.
4. Under **Custom domain**, enter: `emanbakeries.com`
5. Click **Save**.
6. Wait for DNS check to complete (can take up to 24 hours, usually much faster).
7. Check the **Enforce HTTPS** checkbox once available.

### Step C: Verify Deployment

After DNS propagation (5 min to 24 hours), your site will be live at:
- **https://emanbakeries.com**
- **https://www.emanbakeries.com** (if you added the www CNAME)

---

## Troubleshooting Custom Domain

- **DNS not propagating**: Use [dnschecker.org](https://dnschecker.org) to verify your records.
- **Certificate pending**: GitHub auto-provisions SSL. Wait a few minutes after DNS verification.
- **404 error**: Make sure the `CNAME` file exists in your `public` folder and redeploy with `npm run deploy`.