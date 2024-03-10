import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const appContainer = document.getElementById('appContainer') as HTMLElement;
const root = createRoot(appContainer);

root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
