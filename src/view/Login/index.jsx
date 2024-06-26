import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLogin } from "./apiFunctions";
import * as Yup from "yup"; // Import Yup
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
import { TextField, ContainedButton } from "../../components/Common/FormInputs";

const validationSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const isAuthenticated = useSelector((state) => state.auth.loggedIn);
  const user = useSelector((state) => state.auth.user);
  const login = useLogin();

  const [isPopup, setIsPopup] = useState();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      dispatch(authActions.login(JSON.parse(storedUser)));
    }
  }, [dispatch]);

  useEffect(() => {
    if (isAuthenticated && !isPopup) {
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
      await login(data.username, data.password);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const fields = [
    {
      name: "username",
      type: "text",
      placeholder: "Username",
      validation: validationSchema.fields.email,
    },
    {
      name: "password",
      type: "password",
      placeholder: "Password",
      validation: validationSchema.fields.password,
    },
  ];

  const pathname = location.pathname;

  useEffect(() => {
    if (pathname !== "/login") {
      setIsPopup(true);
    }
  }, [pathname]);

  return (
    <Container isPopup={isPopup}>
      <Title>Sign In</Title>
      <Form onSubmit={handleSubmit(onSubmit)} isPopup={isPopup}>
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
          {isSubmitting ? "Loading..." : "Log in"}
        </ContainedButton>
      </Form>
      <p style={{ margin: 0 }}>
        <SignUpLink onClick={() => navigate("/reset-password")}>
          Forget Password?
        </SignUpLink>{" "}
      </p>
      <p style={{ margin: 0 }}>
        Do not have an account?{" "}
        <SignUpLink onClick={() => navigate("/signup")}>Sign Up</SignUpLink>{" "}
        here
      </p>
    </Container>
  );
};

export default LoginForm;
