import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';

// Dynamically import pages for code-splitting
const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const ToolPage = lazy(() => import('./pages/ToolPage').then(module => ({ default: module.ToolPage })));
const StaticPage = lazy(() => import('./pages/StaticPage').then(module => ({ default: module.StaticPage })));
const SitemapPage = lazy(() => import('./pages/SitemapPage').then(module => ({ default: module.SitemapPage })));
const ApiPage = lazy(() => import('./pages/ApiPage').then(module => ({ default: module.ApiPage })));

// Simple fallback spinner
const Loading = () => (
  <div className="flex justify-center items-center py-20">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-dark"></div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hakkimizda" element={<StaticPage type="about" />} />
            <Route path="/gizlilik-politikasi" element={<StaticPage type="privacy" />} />
            <Route path="/kullanim-sartlari" element={<StaticPage type="terms" />} />
            <Route path="/iletisim" element={<StaticPage type="contact" />} />
            <Route path="/sitemap" element={<SitemapPage />} />
            <Route path="/api/tools" element={<ApiPage />} />
            <Route path="/:slug" element={<ToolPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
}

export default App;