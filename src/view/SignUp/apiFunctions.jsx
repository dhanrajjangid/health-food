import { postApiData } from "@/services/ApiService";
import { useNavigate } from "react-router-dom";
import { actions as authActions } from "@/redux/slices/authSlice";
import { useDispatch } from "react-redux";

export const useRegister = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const registerUser = async ({ name, email, password }) => {
    try {
      const response = await postApiData("/players/register", {
        name,
        email,
        password,
      });

      localStorage.setItem("token", response?.data?.token);

      dispatch(authActions.login(response?.data));
      if (pathname === "/signup") {
        navigate("/");
      }

      return;
    } catch (error) {
      console.error("Registration failed:", error);
      throw error;
    }
  };

  return registerUser;
};
