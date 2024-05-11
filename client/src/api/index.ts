import { URL } from "@/utils/config";
import axios from "axios";
import { deleteCookie, getCookie } from "cookies-next";
import { toast } from "react-toastify";

export const API = axios.create({
    baseURL: URL,
});

API.interceptors.request.use(
    config => {
        let _userJson = getCookie("user");
        let _user = { user_name: "", token: "" };
        if (_userJson) {
            _user = JSON.parse(_userJson);
        }
        if (_user?.token) config.headers.Authorization = `Bearer ${_user?.token}`;
        return config;
    },
    error => {
        toast.error("خطایی پیش آمده است لطفا مجددا تلاش نمایید.");

        return Promise.reject(error);
    }
);
API.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        if (error?.response?.status === 401) {
            toast.error(error.message);
            deleteCookie('user');
            deleteCookie('token');
            window.location.replace('/auth/sign-in')
        } else if (error?.response?.status === 422) {
            let _errors = error.response.data.message;
            toast.error(_errors);
        } else if (error?.response?.status === 404) {
            toast.error(error.response.data.message);
        } else {
            toast.error("خطایی پیش آمده است. لطفا مجددا تلاش نمایید.");
        }
        return Promise.reject(error);
    }
);