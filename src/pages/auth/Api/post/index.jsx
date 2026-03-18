import axios from "axios";
const HOST = 'https://app.mandalsolution.com/api';

export const REGISTER_USER = async function (data) {
  return await axios.post(HOST + "/auth/signup", data);
};

export const LOGIN_USER = async function (data) {
  return await axios.post(HOST + "/LLMGenAI/SignIn", data);
};

export const FORGOTUSER_PASS = async function (data) {
  return await axios.post(HOST + "/Auth/ForgotPassword", data);
};
export const ACTIVATE_USER = async function (data) {
  return await axios.post(HOST + "/LLMGenAI/ActivateUser", data);
};