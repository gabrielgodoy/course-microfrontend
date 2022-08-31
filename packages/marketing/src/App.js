import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { StyledEngineProvider } from '@mui/material/styles'

import Landing from './components/Landing'
import Pricing from './components/Pricing'

export default () => {
  return (
    <div>
      <StyledEngineProvider injectFirst>
        <BrowserRouter>
          <Routes>
            <Route exact path="/pricing" element={<Pricing />} />
            <Route path="/" element={<Landing />} />
          </Routes>
        </BrowserRouter>
      </StyledEngineProvider>
    </div>
  )
}
