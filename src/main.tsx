import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import App from './components/App_t/App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
