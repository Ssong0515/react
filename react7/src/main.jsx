import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import BoardList from "./components/board/BoardList.jsx";
import Board from "./components/board/Board.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        {/*<App />*/}
        <Board/>
    </StrictMode>,
)
