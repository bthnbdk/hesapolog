# Hesapolog - The All-in-One Calculation Platform

![Hesapolog OG Image](https://res.cloudinary.com/ddepwjk2w/image/upload/v1764499663/og-image_1_j8fc1j.png)

**Hesapolog** is a modern, fast, and user-friendly web application designed to be the single destination for a wide range of everyday calculations in Turkey. From complex financial planning and tax assessments to health metrics and mathematical problems, Hesapolog provides accurate and instant results without the need for registration.

Built with a focus on performance, SEO, and user experience, this platform serves as a reliable tool for both personal and professional use.

---

## ✨ Key Features

- **Comprehensive Tool Library**: Over 150+ calculators across various categories including:
  - **Finance & Credit**: Loan installments, interest rates, investment returns, currency conversion.
  - **Salary & Employment**: Gross-to-net salary, severance pay, unemployment benefits.
  - **Taxes**: Income tax, VAT, property tax, vehicle taxes (MTV/ÖTV).
  - **Health & Wellness**: BMI, ideal weight, calorie needs, pregnancy due dates.
  - **Mathematics & Education**: Percentages, area/volume, exam grade calculations.
  - **Vehicle & Traffic**: Fuel consumption, tire size difference, traffic fines.
- **Modern & Responsive UI**: Clean, intuitive interface built with Tailwind CSS that works seamlessly across all devices.
- **Powerful Search**: A smart search bar with live suggestions allows users to find the exact tool they need in seconds.
- **Progressive Web App (PWA)**: Installable on both mobile and desktop devices for a native app-like experience, including offline access.
- **Advanced SEO**: Fully optimized for search engines with dynamic page titles, meta descriptions, and rich Schema.org structured data (including `FAQPage` and `BreadcrumbList`) for every tool.
- **Performance Optimized**: Utilizes code-splitting with React.lazy to ensure fast initial page loads, only fetching code for the pages the user visits.
- **Mobile App Ready**: Includes a dedicated `/api/tools` endpoint that serves all tool data in a clean JSON format, ready for consumption by a future mobile application.
- **No Registration Required**: All tools are 100% free and accessible to everyone without needing an account.

---

## 🚀 Tech Stack

- **Frontend Framework**: [React](https://reactjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Routing**: [React Router](https://reactrouter.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **PWA**: Native Service Worker and Web Manifest for caching and installability.
- **Hosting Configuration**: [Netlify](https://www.netlify.com/) via `netlify.toml`.

---

## 📂 Project Structure

The project is organized into a logical and scalable structure, making it easy to maintain and extend.

```
/
├── netlify.toml         # Deployment and redirect configuration for Netlify
├── service-worker.js    # Offline caching logic
├── manifest.json        # PWA configuration
├── index.html           # Main HTML entry point
│
├── src/
│   ├── components/      # Reusable components (Layout, SEO, ShareButtons, etc.)
│   ├── calculators/     # UI and logic for each calculator type
│   ├── data/
│   │   ├── tools/         # Modular tool data files by category
│   │   └── tools.ts       # Aggregates data and provides helper functions
│   ├── pages/           # Page-level components
│   ├── utils/
│   │   └── calculatorLogic.ts # Core calculation functions
│   ├── App.tsx            # Main application component with routing
│   └── index.tsx          # Application entry point
│
└── README.md            # This file
```

---

## 🚀 Deployment to Netlify

This project is configured for seamless deployment on Netlify.

1.  **Connect your repository to Netlify.**
2.  **Use the following deployment settings:**
    - **Build command:** Leave this field empty.
    - **Publish directory:** `/` (or the root of your project).
3.  **Deploy the site.**

The `netlify.toml` file in the root of the project will automatically handle the necessary redirect rules to ensure `BrowserRouter` works correctly, preventing any 404 errors on direct page access.

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