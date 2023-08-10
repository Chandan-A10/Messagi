import { registerService } from "../service/authService";

export const registerUser = async (email: string, password: string) => {
  const { data } = await registerService(email,password);
  console.log(data)
};
