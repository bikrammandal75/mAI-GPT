import axios from "axios";
import Cookies from "js-cookie";

const HOST = import.meta.env.VITE_USER_API;
const API_KEY = import.meta.env.VITE_API_KEY;

export const CHAT_RESPONSE = async function (params, onMessage) {
    try {
        const token = Cookies.get("token") || API_KEY; // Use token from cookie if available, otherwise use API key

        const response = await fetch(`${HOST}/LLMGenAI/Chat`, {
            method: "POST",
            headers: {
                Accept: "text/event-stream",
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(params),
        });

        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let accumulatedText = "";

        while (true) {
            const { value, done } = await reader.read();
            if (done) break;

            accumulatedText += decoder.decode(value, { stream: true });
            onMessage(accumulatedText);
        }
    } catch (error) {
        console.error("Error fetching chat response:", error);
    }
};
export const CHAT_AGENT_RESPONSE = async function (params, onMessage) {
    try {
        const token = Cookies.get("token") || API_KEY;

        const response = await fetch(`${HOST}/LLMGenAI/ChatAgent`, {
            method: "POST",
            headers: {
                Accept: "text/event-stream",
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                ...params,
                stream: false
            }),
        });

        const reader = response.body.getReader();
        const decoder = new TextDecoder();

        let accumulatedText = "";

        while (true) {
            const { value, done } = await reader.read();
            if (done) break;

            const chunk = decoder.decode(value, { stream: true });
            accumulatedText += chunk;

            onMessage(accumulatedText);
        }
    } catch (error) {
        console.error("Error fetching ChatAgent response:", error);
    }
};
export const CHAT_HISTORY = async function (data) {
    return await axios.post(HOST + "/LLMGenAI/ChatHistory", data, {
        headers: {
            Accept: "text/event-stream",
            Authorization: `Bearer ${Cookies.get("token")}`,
            "Content-Type": "application/json",
        },
    });
};
export const CREATE_CHAT = async function (data) {
    return await axios.post(HOST + "/LLMGenAI/CreateChat", data, {
        headers: {
            Accept: "text/event-stream",
            Authorization: `Bearer ${Cookies.get("token")}`,
            "Content-Type": "application/json",
        },
    });
};
export const FEED_CHAT = async function (data) {
    const token = Cookies.get("token") || API_KEY;
    return await axios.post(HOST + "/LLMGenAI/Chat", data, {
        headers: {
            accept: "*/*",
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
    });
};
export const SAVE_CHAT = async function (data) {
    return await axios.post(HOST + "/LLMGenAI/SaveChat", data, {
        headers: {
            accept: "*/*",
            Authorization: `Bearer ${Cookies.get("token")}`,
            "Content-Type": "application/json",
        },
    });
};
export const CHAT_DETAILS = async function (data) {
    return await axios.post(HOST + "/LLMGenAI/ChatDetail", data, {
        headers: {
            accept: "text/plain",
            Authorization: `Bearer ${Cookies.get("token")}`,
            "Content-Type": "application/json",
        },
    });
};
export const CHAT_FEEDBACK = async function (data) {
    return await axios.post(HOST + "/LLMGenAI/UserFeedback", data, {
        headers: {
            accept: "*/*",
            Authorization: `Bearer ${Cookies.get("token")}`,
            "Content-Type": "application/json",
        },
    });
};
export const CHAT_DELETE = async function (data) {
    return await axios.post(HOST + "/LLMGenAI/DeleteChat", data, {
        headers: {
            accept: "*/*",
            Authorization: `Bearer ${Cookies.get("token")}`,
            "Content-Type": "application/json",
        },
    });
};
export const EDIT_CHAT_TITLE = async function (data) {
    return await axios.post(HOST + "/LLMGenAI/EditChat", data, {
        headers: {
            accept: "*/*",
            Authorization: `Bearer ${Cookies.get("token")}`,
            "Content-Type": "application/json",
        },
    });
};
export const searchCandidates = async function (from, pagesize, data, type = 9) {
    return await axios.post(
        HOST + `/Candidates/Search?from=${from}&pagesize=${pagesize}&type=${type}`,
        data,
        {
            headers: {
                Accept: "*/*",
                "Content-Type": "application/json",
                Authorization: `Bearer ${Cookies.get("token")}`,
            },
        }
    );
};
export const createCandidate = async function (data) {
    return await axios.post(HOST + `/Candidates/Create`, data, {
        headers: {
            Accept: "*/*",
            "Content-Type": "application/json",
            Authorization: `Bearer ${Cookies.get("token")}`,
        },
    });
};
export const createGoodFit = async function (candidateId, jobid, status, data) {
    return await axios.patch(
        HOST + `/Candidates/${candidateId}?jobid=${jobid}&status=${status}`,
        data,
        {
            headers: {
                Accept: "*/*",
                "Content-Type": "application/json",
                Authorization: `Bearer ${Cookies.get("token")}`,
            },
        },
    );
};
export const createJob = async function (data) {
    return await axios.post(`${HOST}/Jobs/Create`, data, {
        headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
            "Content-Type": "application/json",
        },
    });
};
