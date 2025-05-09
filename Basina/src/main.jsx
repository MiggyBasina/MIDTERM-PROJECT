import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import COR from './CertificateOfRegistration.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <COR />
  </StrictMode>,
)
