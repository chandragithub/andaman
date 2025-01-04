import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router";
import { Theme } from "@radix-ui/themes";
import './index.css';
import App from './App.tsx';

createRoot(document.getElementById('andamanview-root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Theme accentColor="crimson" grayColor="sand" radius="large" scaling="95%">
        <App />
      </Theme>
    </BrowserRouter>
  </StrictMode>,
)
