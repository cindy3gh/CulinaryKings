import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import Instagram from './components/Instagram.tsx'
import Email from './components/Email.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="instagram" element={<Instagram />} />
        <Route path="microsoft" element={<Email />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
