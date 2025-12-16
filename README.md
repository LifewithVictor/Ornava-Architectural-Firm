1) Title & Objective

Technology Choice: React + TypeScript + Vite + Tailwind CSS + Framer Motion
Justification:
React with TypeScript provides a robust, type-safe foundation for building maintainable component-based UIs.
Vite offers lightning-fast development and optimized production builds.
Tailwind CSS enables rapid, consistent styling with a custom brown/stone palette perfectly suited to an elegant architecture portfolio.
Framer Motion adds smooth, professional animations with minimal code overhead.
The stack is lightweight, modern, and widely adopted in 2025 for high-quality portfolio sites.

End Goal: A fully functional, responsive single-page architecture portfolio website with hero section, project gallery (with modal), testimonials, contact form, dark/light mode, and smooth navigation – ready for deployment and easy customization.

2) Quick Summary of the Technology

Definition: A modern frontend stack combining React (UI library), TypeScript (static typing), Vite (build tool), Tailwind CSS (utility-first styling), and Framer Motion (animation library).
Use Cases: Commonly used in the industry for portfolio websites, marketing pages, SaaS landing pages, and any design-focused web application requiring performance, responsiveness, and visual polish.
Real-World Example: Sites like those of award-winning architecture firms (e.g., Zaha Hadid Architects, BIG – Bjarke Ingels Group) or creative agencies often use similar React/Tailwind stacks for their clean, animated, image-heavy portfolios.

3) System Requirements

Node.js ≥ 18 (recommended LTS version as of 2025)
npm (or yarn/pnpm)
Any modern code editor (VS Code recommended)
No additional external tools required beyond standard web development setup
Dependencies (as listed in package.json):
Core: react, react-dom, framer-motion, lucide-react
Dev: vite, tailwindcss, typescript, autoprefixer, postcss

4. Installation & Setup Instructions
Here’s a super beginner-friendly, step-by-step guide to get the Ornava Architecture website running on your own computer. Don’t worry — I’ll explain everything as if you’ve never done this before. Just follow along exactly, and you’ll have the site up and running in no time!
What you need before starting

A computer (Windows, Mac, or Linux)
An internet connection (for downloading files and tools)
About 10–15 minutes

Step 1: Install Node.js (the engine that runs the website)
The website needs something called Node.js to work.

Go to the official Node.js website: https://nodejs.org
You’ll see two big buttons: LTS (recommended for most users) and Current.
Click the LTS button (it’s the green one on the left — as of December 2025, it should be version 20 or higher).
Download the installer for your operating system (Windows, macOS, or Linux).
Run the downloaded file and click Next → Next → Install all the way through (you can keep all default options).
When it’s done, restart your computer (just to be safe).

To check it worked:

Windows: Press Windows key, type “cmd”, open Command Prompt
Mac: Press Cmd + Space, type “Terminal”, open it
Linux: Open your Terminal

Type this command and press Enter:
Bashnode --version
You should see something like v20.x.x or higher. If you do — great! Node.js is installed.
Step 2: Get the project files on your computer
You need to download the code.
The easiest way (for beginners):

Go to the GitHub repository (ask the person who gave you this for the exact link, or if it’s yours, go to your repo page).
Click the green Code button → choose Download ZIP.
Save the ZIP file to your Desktop or Documents folder.
Double-click the ZIP file to unzip it — you’ll get a folder like ornava-architecture-main or similar.
Rename the folder to something simple like ornava-website (optional, but easier).

Alternative (if you want to learn Git later):
Use Git to clone — but for now, the ZIP method is perfect.
Step 3: Open the folder in a code editor (recommended)
You don’t have to, but it makes life easier.
Best free option: Visual Studio Code (VS Code)

Download it from: https://code.visualstudio.com
Install it (very easy).
Open VS Code → File → Open Folder → choose your ornava-website folder.

If you don’t want to install anything yet, you can just use File Explorer/Finder and a terminal.
Step 4: Install the project dependencies
Now we’ll download all the little tools the website needs.

Open a terminal/command prompt inside the project folder:
In VS Code: Terminal → New Terminal (it opens in the right folder automatically)
Windows: Navigate to your folder in File Explorer → click in the address bar → type cmd → press Enter
Mac: Open Finder → go to the folder → right-click → Services → New Terminal at Folder
Linux: Right-click in folder → Open in Terminal

In the terminal, type this command and press Enter:

Bashnpm install

This will download everything the site needs.
It might take 2–5 minutes the first time.
You’ll see lots of text scrolling — that’s normal! Just wait until it finishes and you see the folder path again.

Step 5: Start the website!
In the same terminal, type:
Bashnpm run dev
Press Enter.
You’ll see something like:
textLocal: http://localhost:5173

Open your web browser (Chrome, Firefox, Edge, Safari — any is fine).
Type in the address bar: http://localhost:5173
Press Enter.
