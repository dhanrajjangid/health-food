import { postApiData } from "@/services/ApiService";
import { actions as authActions } from "@/redux/slices/authSlice";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

export const useLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const location = useLocation();

  const pathname = location.pathname;

  const login = async (email, password) => {
    try {
      const response = await postApiData("/players/login", { email, password });

      localStorage.setItem("token", response?.data?.token);

      dispatch(authActions.login(response?.data));
      if (pathname === "/login") {
        navigate("/");
      }
      return response.user.token;
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  };

  return login;
};
