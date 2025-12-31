import { createRoot } from 'react-dom/client'
import App from './App.js'
import { BrowserRouter } from 'react-router-dom'
import { basePath } from './config.js'

createRoot(document.getElementById('root')!).render(
    <BrowserRouter basename={basePath}>
        <App />
    </BrowserRouter>,
)