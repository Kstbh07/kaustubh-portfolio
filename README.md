# Kaustubh Sen — 3D Developer Portfolio

A modern, interactive 3D developer portfolio built to showcase my projects, technical skills, professional experience, achievements, certifications, and live competitive programming statistics.

The portfolio combines immersive 3D visuals, smooth animations, real-time coding data, and a responsive user interface.

## About

I'm Kaustubh Sen, a Computer Science Engineering student specializing in Artificial Intelligence and Machine Learning.

My work focuses on AI-powered applications, backend development, interactive web experiences, and scalable software systems.

This portfolio represents my technical journey, projects, open-source contributions, and competitive programming progress.

## Features

- Interactive 3D portfolio experience
- Custom 3D character scene
- Mouse and scroll-based interactions
- Smooth GSAP animations and transitions
- Responsive project carousel
- Live LeetCode statistics
- Live Codeforces statistics
- Professional experience timeline
- Skills and technology showcase
- Achievements section
- Certifications section
- Modern contact section
- Custom cursor interactions
- Fully responsive design

## Live Coding Statistics

The portfolio dynamically fetches public competitive programming statistics.

### LeetCode

Displays:

- Total problems solved
- Easy problems solved
- Medium problems solved
- Hard problems solved
- Profile statistics

### Codeforces

Displays:

- Current rating
- Maximum rating
- Rank
- Problems solved
- Contribution
- Followers

The statistics are fetched dynamically from public APIs.

## Featured Projects

### OpenPulse

AI-powered GitHub dependency explorer that visualizes repository dependencies as an interactive 3D graph.

**Tech Stack:** FastAPI, React, React Three Fiber, Three.js

### AlgoVisualizer

Interactive algorithm visualization platform for understanding sorting and pathfinding algorithms through real-time execution.

**Tech Stack:** HTML, CSS, JavaScript, Python, Django, MySQL

### VoteX

Blockchain-based voting system designed for secure and transparent digital elections.

**Tech Stack:** Next.js, Firebase, Node.js, Blockchain

## Tech Stack

### Languages

- Python
- JavaScript
- TypeScript
- C++
- SQL

### Frontend

- React
- Next.js
- Vite
- HTML
- CSS
- Tailwind CSS

### Backend

- Django
- FastAPI
- Flask
- Node.js

### AI and Machine Learning

- OpenAI APIs
- Google Gemini
- Computer Vision
- AI-powered application development

### Databases

- MySQL
- MongoDB
- PostgreSQL
- Supabase

### 3D and Animation

- Three.js
- React Three Fiber
- React Three Drei
- GSAP

### Tools and Platforms

- Git
- GitHub
- Postman
- Vercel
- Render

## Project Structure

```text
3d-portfolio/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Character/
│   │   ├── styles/
│   │   ├── utils/
│   │   ├── About.tsx
│   │   ├── AboutPage.tsx
│   │   ├── Achievements.tsx
│   │   ├── Career.tsx
│   │   ├── Certifications.tsx
│   │   ├── CodingStats.tsx
│   │   ├── Contact.tsx
│   │   ├── Landing.tsx
│   │   ├── MainContainer.tsx
│   │   ├── Navbar.tsx
│   │   ├── SocialIcons.tsx
│   │   ├── TechStack.tsx
│   │   ├── WhatIDo.tsx
│   │   ├── WhatIDoSection.tsx
│   │   ├── Work.tsx
│   │   └── WorkImage.tsx
│   ├── context/
│   ├── data/
│   │   └── portfolio.ts
│   ├── App.tsx
│   └── main.tsx
├── package.json
├── tsconfig.json
└── vite.config.ts