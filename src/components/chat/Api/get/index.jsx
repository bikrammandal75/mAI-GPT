const HOST = import.meta.env.VITE_USER_API;
const VITE_API_KEY = import.meta.env.VITE_API_KEY;
import axios from "axios";

export const GETALL_MODALS = async function () {
    return await axios.get(HOST + "/LLMGenAI/Model", {
        headers: {
            Accept: "text/plain",
            Authorization: `Bearer ${VITE_API_KEY}`,
        },
    });
};
