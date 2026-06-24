# > ibrahimhozhun | Dynamic Developer Portfolio

A brutalist/terminal-themed, completely dynamic personal portfolio built with **Next.js** and **Tailwind CSS**. This project isn't just a static brochure; it acts as a self-updating ecosystem that fetches my latest work directly from the GitHub API using a custom metadata approach.

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

## Core Features

- **Brutalist & Terminal Aesthetic:** High-contrast, dark mode interface with neon accents, utilizing `JetBrains Mono` for a true developer environment feel.
- **Bento Grid UI:** Information and projects are organized into a responsive, clean, and easily scannable bento-box layout.
- **Zero-Maintenance Project Sync:** The portfolio automatically syncs with my GitHub repositories. No manual code updates required when I release a new project.
- **Server-Side Rendering (SSR) & Caching:** Leverages Next.js App Router for ultra-fast load times and optimized GitHub API rate limiting.

### How to add a new project (For myself):

1. Create a new repository and add the topic `portfolio` in the GitHub settings.
2. Add a `portfolio.json` file to the root of the repository with the following structure:

```json
{
	"title": "Project Name",
	"short_description": "A brief, impactful description of the project architecture and goal.",
	"tech_stack": ["Next.js", "Python", "PostgreSQL"]
}
```

---

## Getting Started (Local Development)

To run this project locally, follow these steps:

**1. Clone the repository:**

```bash
git clone https://github.com/ibrahimhozhun/my-portfolio
```

### then

```bash
cd my-portfolio
```

**2. Install dependencies:**

```bash
npm install
```

### or

```bash
yarn install
```

**3. Run the development server:**

```bash
npm run dev
```

### or

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

_(Note: During local development, Next.js caches fetch requests. If you update a `portfolio.json` on GitHub and don't see it locally, delete the `.next` folder or temporarily set `{ cache: 'no-store' }` in the fetch function.)_

---

## Let's Build Something Together

I'm currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, my inbox is always open.

- **GitHub:** [@ibrahimhozhun](https://github.com/ibrahimhozhun)
- **LinkedIn:** [İbrahim Halil Özhun](https://www.linkedin.com/in/ibrahim-halil-ozhun/)
- **Email:** ibrahimhalil.ozhun12@gmail.com
