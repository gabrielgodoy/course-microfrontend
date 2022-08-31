import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const mount = (el) => {
  const root = ReactDOM.createRoot(el)
  root.render(<App />)
}

// Running app in development and standalone mode
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root')

  if (devRoot) {
    mount(devRoot)
  }
}

// Running app through container
export { mount }
