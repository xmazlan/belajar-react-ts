import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Profile from "./Profile.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <> {/* membuat element tetap satu wrapper */}
            <App />
            <div>
                <h1>Halo Teman-teman!</h1>
                <Profile nama="Mazlan" profesi="Content Creator & Web Developer" />
            </div>
        </>
    </StrictMode>,
)

