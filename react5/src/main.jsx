import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import TodoApp from "./components/TodoApp.jsx";
import "./components/TodoApp.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*<App />*/}
      <TodoApp/>
  </StrictMode>,
)
