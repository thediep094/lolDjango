import { loginStart, loginSuccess, loginFailure } from "./slice/accountSlice";
import axios from "axios";
export const login = async (dispatch: any, user: any) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(`http://127.0.0.1:8000/accounts/login`, {
      username: user.username,
      password: user.password,
    });
    dispatch(loginSuccess(res.data));
    alert("Đăng nhập thành công");
  } catch (error) {
    dispatch(loginFailure());
    alert("Đăng nhập thất bại");
  }
};
