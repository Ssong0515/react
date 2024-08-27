import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MovieReviewApp from './MovieReviewApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MovieReviewApp />
  </StrictMode>,
)
