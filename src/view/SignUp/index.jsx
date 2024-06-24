import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useRegister } from "./apiFunctions";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  Container,
  Title,
  SignUpLink,
  CheckboxContainer,
  CheckboxLabel,
  Form,
  FieldContainer,
  ErrorMessage,
} from "./Components/StyledComponents";

import {
  ContainedButton,
  Checkbox,
  TextField,
} from "@/components/Common/FormInputs";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required")
    .min(6, "Password must be at least 6 characters"),
  acceptTerms: Yup.boolean()
    .oneOf([true], "Please accept the terms and conditions and privacy policy")
    .required("Please accept the terms and conditions and privacy policy"),
});

const SignUp = () => {
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.loggedIn);
  const registerUser = useRegister(); // Assuming you have a custom hook for registration
  const location = useLocation();

  const [isPopup, setIsPopup] = useState()

const pathname = location.pathname

  useEffect(()=> {
    if(pathname !== '/signup'){
      setIsPopup(true)
    }
  },[pathname])

  useEffect(() => {
    if (isAuthenticated && !isPopup) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const {
    handleSubmit,
    formState: { isSubmitting, errors },
    control,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  console.log(errors, "errors are consoled here");

  const onSubmit = async (data) => {
    try {
      await registerUser(data);
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  const fields = [
    {
      name: "name",
      type: "text",
      placeholder: "Name",
      validation: validationSchema.fields.name,
    },
    {
      name: "email",
      type: "email",
      placeholder: "Email",
      validation: validationSchema.fields.email,
    },
    {
      name: "password",
      type: "password",
      placeholder: "Password",
      validation: validationSchema.fields.password,
    },
    {
      name: "acceptTerms",
      type: "checkbox",
      label: (
        <>
          I accept the{" "}
          <a href="/terms-and-conditions" target="_blank">
            terms and conditions
          </a>{" "}
          and{" "}
          <a href="/privacy-policy" target="_blank">
            privacy policy
          </a>
        </>
      ),
      validation: validationSchema.fields.acceptTerms,
    },
  ];

  return (
    <Container isPopup={isPopup}>
      <Title>Sign Up</Title>
      <Form onSubmit={handleSubmit(onSubmit)} isPopup={isPopup}>
        {fields.map((item, index) => (
          <FieldContainer key={index}>
            {item.type === "checkbox" ? (
              <CheckboxContainer>
                <Controller
                  name={item.name}
                  control={control}
                  defaultValue={false}
                  render={({ field }) => <Checkbox {...field} />}
                />
                <CheckboxLabel htmlFor={item.name}>{item.label}</CheckboxLabel>
              </CheckboxContainer>
            ) : (
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
            )}
            {errors[item.name] && (
              <ErrorMessage>{errors[item.name].message}</ErrorMessage>
            )}
          </FieldContainer>
        ))}
        <ContainedButton type="submit">
          {isSubmitting ? "Loading..." : "Submit"}
        </ContainedButton>
      </Form>
      <p>
        Already have an account?{" "}
        <SignUpLink onClick={() => navigate("/login")}>Log In</SignUpLink> here
      </p>
    </Container>
  );
};

export default SignUp;
