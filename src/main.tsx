import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppComVirtualizador } from './AppComVirtualizador'
import { AppSemVirtualizador } from './AppSemVirtualizador'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppComVirtualizador />
    <AppSemVirtualizador />
  </React.StrictMode>,
)
