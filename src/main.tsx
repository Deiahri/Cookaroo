import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ColorThemeProvider } from "./hooks/useColorTheme.tsx";
import { GlobalProvider } from "./hooks/GlobalContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalProvider>
      <ColorThemeProvider>
        {/* <OnBoot/> */}
        <App />
      </ColorThemeProvider>
    </GlobalProvider>
  </StrictMode>
);
