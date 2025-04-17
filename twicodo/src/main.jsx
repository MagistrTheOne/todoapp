import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="min-h-screen bg-black">
      <main className="max-w-xl mx-auto p-4">
        <App />
      </main>
    </div>
  </StrictMode>
);