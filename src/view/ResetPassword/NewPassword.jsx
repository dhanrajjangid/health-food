import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLogin } from "@/view/Login/apiFunctions";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { actions as authActions } from "@/redux/slices/authSlice";
import {
  Container,
  SignUpLink,
  Form,
  FieldContainer,
  ErrorMessage,
} from "@/view/SignUp/Components/StyledComponents";
import { TextField, ContainedButton } from "@/components/Common/FormInputs";

const validationSchema = Yup.object().shape({
  newPassword: Yup.string()
    .required("New Password is required")
    .min(6, "Password must be at least 6 characters"),
  confirmNewPassword: Yup.string()
    .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
    .required("Confirm New Password is required"),
});

const NewPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {id} = useParams();

  const isAuthenticated = useSelector((state) => state.auth.loggedIn);
  const login = useLogin();

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
      await login(data.newPassword, data.confirmNewPassword);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const fields = [
    {
      name: "newPassword",
      type: "password",
      placeholder: "New Password",
      validation: validationSchema.fields.newPassword,
    },
    {
      name: "confirmNewPassword",
      type: "password",
      placeholder: "Confirm New Password",
      validation: validationSchema.fields.confirmNewPassword,
    },
  ];

  return (
    <Container>
      <h2 style={{ margin: 0 }}>New Password</h2>
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
          <SignUpLink onClick={() => navigate("/login")}>Login</SignUpLink> here
        </p>
      </div>
    </Container>
  );
};

export default NewPassword;
