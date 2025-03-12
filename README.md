# Kabir Dikko's Portfolio

A modern portfolio website for Kabir Dikko, showcasing his expertise as a DevOps Engineer and Cloud Architect. Built with Astro and styled with Tailwind CSS.

## Features

- 🚀 Fast performance with Astro
- 💪 Type-safe Markdown with content collections
- 🎨 Custom design with Tailwind CSS
- 📱 Fully responsive layout
- 📰 Blog section with markdown content
- 🧩 Project showcase
- 📝 Contact form

## Tech Stack

- [Astro](https://astro.build/) - The web framework for content-driven websites
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Lucide Icons](https://lucide.dev/) - Beautiful & consistent icons
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/kabirDikko/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and visit `http://localhost:4321`

## Project Structure

```
/
├── public/            # Static assets
├── src/
│   ├── components/    # UI components
│   ├── content/       # Content collections (blog posts, projects)
│   ├── layouts/       # Page layouts
│   ├── pages/         # Page components and routes
│   ├── styles/        # Global CSS
│   └── lib/           # Shared utilities
└── package.json       # Project dependencies and scripts
```

## Content Management

All blog posts are stored as markdown files in the `src/content/blog/` directory. To add a new blog post, create a new markdown file with the required frontmatter:

```markdown
---
title: "Your Blog Post Title"
excerpt: "A brief description of the blog post"
date: "2023-06-15"
author: "Kabir Dikko"
featured: true
image: "/path/to/image.jpg"
category: "Category"
tags: ["tag1", "tag2"]
---

Your content here...
```

## Deployment

To build the site for production:

```bash
npm run build
# or
yarn build
```

The built site will be in the `dist/` directory, ready to be deployed to your hosting provider of choice.

## Customization

### Styling

This project uses Tailwind CSS for styling. You can customize the theme in the `tailwind.config.mjs` file.

### Content

Update your personal information in the various components and pages as needed.

## License

This project is licensed under the MIT License.

## Acknowledgements

- [Astro](https://astro.build/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/) 