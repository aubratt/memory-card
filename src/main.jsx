import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles.css"
import MemoryCard from './components/MemoryCard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MemoryCard />
  </StrictMode>,
)
