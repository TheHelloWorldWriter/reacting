/**
 * Copyright (c) 2025 The Hello World Writer
 * https://www.thehelloworldwriter.com/
 * Licensed under the MIT License
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
