import axios from "axios";
import Cookies from "js-cookie";

const HOST = import.meta.env.VITE_USER_API;

export const updateUserProfile = async (data) => {
  try {
    console.log("Sending data to API:", data);
    const response = await axios.put(`${HOST}/User/userid`, data, {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
        "Content-Type": "application/json",
      },
    });
    console.log("API response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error updating user profile:", error);
    return null;
  }
};

export const resetPassword = async (data) => {
  try {
    const response = await axios.post(`${HOST}/Auth/ResetPassword`, data, {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Reset password error:", error.response?.data || error.message);
    throw error;
  }
};

export const createCheckoutSession = async () => {
  const response = await axios.post(
    HOST + `/Payment/CreateCheckoutSession`,
    {},
    {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};

export const getSessionStatus = async (sessionId) => {
  const response = await axios.get(
    HOST + `/Payment/SessionStatus`,
    {
      params: { session_id: sessionId },
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    }
  );
  return response.data;
};

export const getLLMUserConfiguration = async () => {
  try {
    const response = await axios.get(`${HOST}/LLMGenAI/Configuration`, {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching LLM user configuration:", error.response?.data || error.message);
    throw error;
  }
};

export const putLLMUserConfiguration = async (data) => {
  try {
    const response = await axios.put(`${HOST}/LLMGenAI/Configuration`, data, {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error updating LLM user configuration:", error.response?.data || error.message);
    throw error;
  }
};



