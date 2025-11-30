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

---

## 📂 Project Structure

The project is organized into a logical and scalable structure, making it easy to maintain and extend.

```
/
├── public/
│   ├── index.html         # Main HTML entry point
│   ├── manifest.json      # PWA configuration
│   └── service-worker.js  # Offline caching logic
│
├── src/
│   ├── components/        # Reusable components (Layout, SEO, ShareButtons, etc.)
│   ├── calculators/       # UI and logic for each calculator type
│   │   └── CalculatorRegistry.tsx # Dynamically renders the correct calculator
│   │
│   ├── data/
│   │   ├── tools/           # Modular tool data files by category
│   │   │   ├── kredi.ts
│   │   │   ├── saglik.ts
│   │   │   └── ... (10+ other files)
│   │   └── tools.ts         # Aggregates data and provides helper functions
│   │
│   ├── pages/             # Page-level components
│   │   ├── Home.tsx
│   │   ├── ToolPage.tsx
│   │   ├── StaticPage.tsx
│   │   └── ApiPage.tsx      # Renders the JSON API endpoint
│   │
│   ├── utils/
│   │   └── calculatorLogic.ts # Core calculation functions
│   │
│   ├── App.tsx              # Main application component with routing
│   └── index.tsx            # Application entry point
│
└── README.md              # This file
```

### Core Concepts

- **`CalculatorRegistry.tsx`**: This component acts as a router for calculators. It analyzes the `slug` of a tool and renders the appropriate UI (e.g., `LoanCalculator`, `BMICalculator`). This makes adding new calculator types simple and clean.

- **Modular Data (`/data/tools/`)**: Instead of a single massive data file, all tool information (descriptions, FAQs, etc.) is split into logical, category-based files. This improves maintainability and makes it easy to add or edit tools without touching a large, complex file.

- **Centralized SEO (`SEO.tsx`)**: This component handles all SEO-related tasks. It dynamically generates page titles, meta descriptions, and multiple Schema.org JSON-LD scripts based on the page being viewed, ensuring maximum search engine visibility.

- **Code Splitting**: The app uses `React.lazy` and `Suspense` to split the JavaScript bundle by route. This means users only download the code they need for the current page, significantly improving initial load times and overall performance.

---

## 🔧 Getting Started

To run this project, you need a local development server that can handle JSX/TSX and module imports.

1.  **Serve the `public` directory**:
    Use a local server tool like `serve` or a built-in IDE server to host the project root.

2.  **Open in your browser**:
    Navigate to the local server's address (e.g., `http://localhost:3000`). The application will load and function as a single-page application.

*Note: This project is configured for a specific buildless environment and relies on `importmap` for dependencies.*

---

## 🔮 Future Development

- **Mobile App**: Develop a native mobile application for iOS and Android using the `/api/tools` endpoint.
- **User Accounts**: Allow users to save their favorite calculators or past calculations.
- **New Tools**: Continuously expand the library of calculators based on user feedback.
- **Localization**: Add support for other languages.