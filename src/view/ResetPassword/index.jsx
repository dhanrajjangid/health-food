import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useResetPassword } from "@/view/ResetPassword/apiFunctions";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { actions as authActions } from "@/redux/slices/authSlice";
import {
  Container,
  Title,
  SignUpLink,
  Form,
  FieldContainer,
  ErrorMessage,
} from "@/view/SignUp/Components/StyledComponents";
import { TextField, ContainedButton } from "@/components/Common/FormInputs";
import SuccessPopup from "@/components/Popups/SuccessPopup";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
});

const ResetPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isAuthenticated = useSelector((state) => state.auth.loggedIn);
  const { forgotPassword } = useResetPassword();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      dispatch(authActions.login(JSON.parse(storedUser)));
    }
  }, [dispatch]);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const {
    control,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data) => {
    try {
      await forgotPassword(data.email, setIsSent);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const fields = [
    {
      name: "email",
      type: "text",
      placeholder: "Email",
      validation: validationSchema.fields.email,
    },
  ];
  const [isSent, setIsSent] = useState(false);

  return (
    <>
      {isSent && (
        <SuccessPopup
          message="Password reset link successfully sent to your email."
          onClose={() => setIsSent(false)}
        />
      )}
      <Container>
        <h2 style={{ margin: 0 }}>Reset Password</h2>
        <Form onSubmit={handleSubmit(onSubmit)}>
          {fields.map((item, index) => (
            <FieldContainer key={index}>
              <Controller
                name={item.name}
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <>
                    <TextField
                      {...field}
                      type={item.type}
                      padding="15px 10px"
                      placeholder={item.placeholder}
                    />
                  </>
                )}
              />
              {errors[item.name] && (
                <ErrorMessage>{errors[item.name].message}</ErrorMessage>
              )}
            </FieldContainer>
          ))}
          <ContainedButton type="submit">
            {isSubmitting ? "Loading..." : "Submit"}
          </ContainedButton>
        </Form>
        <div>
          <p style={{ marginBottom: "2rem" }}>
            Do not have an account?{" "}
            <SignUpLink onClick={() => navigate("/signup")}>Sign Up</SignUpLink>{" "}
            here
          </p>
          <p>
            Remembered the password?{" "}
            <SignUpLink onClick={() => navigate("/login")}>Login</SignUpLink>{" "}
            here
          </p>
        </div>
      </Container>
    </>
  );
};

export default ResetPassword;
