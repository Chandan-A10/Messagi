import { loginService } from "../service/authService";

export const loginUser = async (email: string, password: string) => {
  try {
    const { data } = await loginService(email, password);
    if (data.status !== 204) {
      return data;
    }
    return false;
  } catch (err) {
    console.log(err);
    return false;
  }
};
