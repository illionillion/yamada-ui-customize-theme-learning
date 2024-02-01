import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { UIProvider } from "@yamada-ui/react"
import theme from './theme/index.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* ここでthemeを渡してあげる */}
    <UIProvider theme={theme}>
      <App />
    </UIProvider>
  </React.StrictMode>,
)
