import { postApiData } from "@/services/ApiService";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const useResetPassword = () => {
  const navigate = useNavigate();

  const forgotPassword = async (email) => {
    try {
      const response = await postApiData("/players/forgot-password", { email });

      toast.success("Reset password link sent to your email please check your inbox.");

      // navigate("/");

      return response;
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  };

  const newPassword = async (password, resetToken) => {
    try {
      const response = await postApiData("/players/reset-password", {
        password,
        resetToken,
      });
      toast.success("Password changed successfully.");
      navigate("/login");

      return response;
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  };

  return { forgotPassword, newPassword };
};
