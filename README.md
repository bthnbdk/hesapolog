# Hesapolog - The All-in-One Calculation Platform

![Hesapolog OG Image](https://res.cloudinary.com/ddepwjk2w/image/upload/v1764499663/og-image_1_j8fc1j.png)

**Hesapolog** is a modern, fast, and user-friendly web application designed to be the single destination for a wide range of everyday calculations in Turkey. From complex financial planning and tax assessments to health metrics and mathematical problems, Hesapolog provides accurate and instant results without the need for registration.

Built as a statically generated site with **Next.js**, it offers peak performance, top-tier SEO, and an excellent user experience.

---

## ✨ Key Features

- **Statically Generated (SSG)**: Every page is pre-built as a static HTML file, ensuring blazing-fast load times and optimal SEO.
- **Comprehensive Tool Library**: Over 150+ calculators across various categories.
- **Modern & Responsive UI**: Clean, intuitive interface built with Tailwind CSS that works seamlessly across all devices.
- **Powerful Search**: A smart search bar with live suggestions allows users to find the exact tool they need in seconds.
- **Progressive Web App (PWA)**: Installable on both mobile and desktop devices for a native app-like experience.
- **Advanced SEO**: Natively optimized for search engines using Next.js's Metadata API, generating dynamic titles, descriptions, and rich Schema.org structured data (including `FAQPage` and `BreadcrumbList`) for every tool.
- **Mobile App Ready**: Includes a dedicated `/api/tools` endpoint that serves all tool data in a clean JSON format.
- **No Registration Required**: All tools are 100% free and accessible to everyone.

---

## 🚀 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (with App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Deployment**: [Netlify](https://www.netlify.com/)

---

## 📂 Project Structure

The project follows the modern Next.js `app` router paradigm for a scalable and maintainable structure.

```
/
├── app/                  # Main application directory
│   ├── [slug]/page.tsx   # Dynamic route for all tool pages
│   ├── api/tools/route.ts# API endpoint for tool data
│   ├── layout.tsx        # Root layout of the application
│   └── page.tsx          # Homepage
│
├── components/           # Reusable React components (Layout, HomeClient, etc.)
├── calculators/          # UI and logic for each calculator type
├── data/                 # All tool data, modularized by category
├── public/               # Static assets (robots.txt, sitemap.xml, etc.)
├── utils/                # Core calculation logic functions
│
├── netlify.toml          # Deployment and redirect configuration for Netlify
├── next.config.mjs       # Next.js configuration
└── package.json          # Project dependencies and scripts
```

---

## 🚀 Deployment to Netlify

This project is configured for seamless deployment on Netlify as a static site.

1.  **Connect your repository to Netlify.**
2.  **Use the following deployment settings:**
    - **Build command:** `next build`
    - **Publish directory:** `out`
3.  **Deploy the site.**

The `netlify.toml` file in the root of the project contains all the necessary build configurations. The static export nature of the site means no special redirect rules are needed for routing.

---

## 📲 API Usage

The application includes a simple API endpoint to serve all tool data for a future mobile app or other integrations.

- **Endpoint**: `/api/tools`
- **Method**: `GET`
- **Response**: A JSON array of all tool objects.

**Sample Response Snippet:**
```json
[
  {
    "name": "Kredi Hesaplama",
    "slug": "kredi-hesaplama",
    "description": "Kredi tutarı, faiz oranı ve vade süresine göre aylık taksit ve toplam ödeme hesaplama aracıdır.",
    "faq_json": [
      {
        "question": "Bir kredinin aylık taksiti nasıl hesaplanır",
        "answer": "Bankacılıkta standart olan anüite formülü kullanılır..."
      }
    ],
    ...
  }
]
```