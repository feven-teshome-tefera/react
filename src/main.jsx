import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Card from './Card'
// import App from '../componet/App'
import App from './componet/App'
import 'tachyons'


createRoot(document.getElementById('root')).render(
  <StrictMode> 
    <App ></App>
  </StrictMode>,
)
