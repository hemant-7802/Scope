// import Library
import React from 'react'

// import DOM
import ReactDOM from 'react-dom/client'

// import Components
import App from './App.jsx'
import {ThemeProvider as NextThemesProvider} from "next-themes";

// import CSS
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextThemesProvider attribute="class" defaultTheme="dark">
      <App/>
    </NextThemesProvider>
  </React.StrictMode>,
)
