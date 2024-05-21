import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Form,
  FieldContainer,
  ErrorMessage
} from '@/view/Profile/Components/StyledComponents'
import {
  UnderlinedTextField,
  ContainedButton,
} from "@/components/Common/FormInputs";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: Yup.string().required("Phone number is required"),
  addressLine1: Yup.string().required("Address Line 1 is required"),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required"),
  pincode: Yup.string().required("Pincode is required"),
});

const ShippingForm = () => {
  const {
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    updatePlayer(player_id, data)
  };

  const fields = [
    {
      name: "firstName",
      placeholder: "First Name",
      validation: validationSchema.fields.firstName,
    },
    {
      name: "lastName",
      placeholder: "Last Name",
      validation: validationSchema.fields.lastName,
    },
    {
      name: "email",
      placeholder: "Email",
      validation: validationSchema.fields.email,
    },
    {
      name: "phoneNumber",
      placeholder: "Phone Number",
      validation: validationSchema.fields.phoneNumber,
    },
    {
      name: "addressLine1",
      placeholder: "Address Line 1",
      validation: validationSchema.fields.addressLine1,
    },
    {
      name: "addressLine2",
      placeholder: "Address Line 2",
      validation: validationSchema.fields.addressLine2,
    },
    {
      name: "city",
      placeholder: "City",
      validation: validationSchema.fields.city,
    },
    {
      name: "state",
      placeholder: "State",
      validation: validationSchema.fields.state,
    },
    {
      name: "pincode",
      placeholder: "Pincode",
      validation: validationSchema.fields.pincode,
    },
    
  ];


  return (
    <>
    <h4>Shipping Details:</h4>
    <Form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((item, index) => (
        <FieldContainer key={index}>
          <Controller
            name={item.name}
            control={control}
            defaultValue=""
            render={({ field }) => (
              <>
                <UnderlinedTextField
                  {...field}
                  placeholder={item.placeholder}
                />
                {errors[field.name] && (
                  <ErrorMessage>{errors[field.name].message}</ErrorMessage>
                )}
              </>
            )}
          />
        </FieldContainer>
      ))}
      {/* <ContainedButton type="submit">Submit</ContainedButton> */}
    </Form>
    </>
  );
};

export default ShippingForm;
