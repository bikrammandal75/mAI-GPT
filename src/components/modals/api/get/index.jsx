const HOST = import.meta.env.VITE_USER_API;
import axios from "axios";
import Cookies from "js-cookie";

export const getProfileDataByEmail = async function (email) {
    return await axios.get(HOST + `/User/email?email=${email}`, {
        headers: {
            Accept: "*/*",
            "Content-Type": "application/json",
            Authorization: `Bearer ${Cookies.get("token")}`,
        },
    });
};