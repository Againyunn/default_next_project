import axios from "axios";
import AxiosInterceptor from "@/apis/AxiosInterceptor";

/**
 * 로그인 함수
 * @param {*} userId
 * @param {*} password
 * @returns 정상: userId, gender, age
 */
const login = async (userId, password) => {
  const res = await AxiosInterceptor({
    url: "login/",
    method: "get",
    data: {
      userId,
      password,
    },
  });
  return res;
};
const AuthService = {
  login,
};
export default AuthService;
