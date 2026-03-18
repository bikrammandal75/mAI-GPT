import axios from "axios";
import Cookies from "js-cookie";
const HOST = import.meta.env.VITE_USER_API;

export const GetDocuments = async function (data) {
    try {
        return await axios.post(HOST + "/LLMGenAI/SearchDoc", data, {
            headers: {
                Authorization: `Bearer ${Cookies.get("token")}`,
                "Content-Type": "application/json",
            },
        });
    } catch (error) {
        console.error("Error fetching documents:", error);
    }
};
export const DownloadDocument = async function (documentId) {
    return await axios.get(HOST + "/LLMGenAI/DownloadDoc?DocId=" + documentId, {
        headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
            "Content-Type": "application/json",
        },
    });
};

export const DeleteDocument = async function (file) {
    return await axios.delete(HOST + "/LLMGenAI/DeleteDoc", {
        data: file,
        headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
            "Content-Type": "application/json",
        },
    });
};
export const UploadDocument = async function (data) {
    return await axios.post(HOST + "/LLMGenAI/UploadDoc", data, {
        headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
            "Content-Type": "application/json",
        },
    });
};

export const SearchDocument = async function (data) {
    return await axios.post(HOST + "/LLMGenAI/SearchDocument", data, {
        headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
            "Content-Type": "application/json",
        },
    });
};
