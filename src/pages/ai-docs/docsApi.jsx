// src/pages/ai-docs/api/docsApi.js
import Cookies from "js-cookie";

const HOST = import.meta.env.VITE_USER_API;

export const GENERATE_DOC = async ({ prompt }) => {
    const token = Cookies.get("token");

    const response = await fetch(`${HOST}/LLMGenAI/Chat`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            userMessage: prompt,
            chatType: 2, // ✅ Doc mode
            model: "llama-3.3-70b-versatile",
        }),
    });

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let result = "";

    while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        result += decoder.decode(value);
    }

    return result;
};
