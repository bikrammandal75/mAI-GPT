import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ModelProvider } from "./components/context/ModelContext.jsx";
import { Toaster } from "sonner";
import { ChatProvider } from "./components/context/ChatContext.jsx";
import { ChatHistoryProvider } from "./components/context/ChatHistoryContext.jsx";
import { BrowserRouter } from "react-router";
import "./i18n.js";

createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ModelProvider>
            <BrowserRouter>
                <ChatHistoryProvider>
                    <ChatProvider>
                        <App />
                        <Toaster richColors position="top-right" />
                    </ChatProvider>
                </ChatHistoryProvider>
            </BrowserRouter>
        </ModelProvider>
    </React.StrictMode>
);
