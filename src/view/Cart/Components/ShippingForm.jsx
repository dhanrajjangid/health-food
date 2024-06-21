import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Form,
  FieldContainer,
  ErrorMessage,
} from "@/view/Profile/Components/StyledComponents";
import {
  UnderlinedTextField,
  ContainedButton,
} from "@/components/Common/FormInputs";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("First Name is required"),
  phoneNumber: Yup.string().required("Phone number is required"),
  addressLine1: Yup.string().required("Address Line 1 is required"),
  addressLine2: Yup.string(),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required"),
  country: Yup.string().required("Country is required"),
  postalCode: Yup.string().required("Postal Code is required"),
});

const ShippingForm = ({ triggerSubmit }) => {
  const {
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    triggerSubmit(data);
  };

  const fields = [
    {
      name: "name",
      placeholder: "Name",
      validation: validationSchema.fields.firstName,
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
      name: "country",
      placeholder: "Country",
      validation: validationSchema.fields.email,
    },
    {
      name: "postalCode",
      placeholder: "Pincode/Postal Code",
      validation: validationSchema.fields.pincode,
    },
    {
      name: "phoneNumber",
      placeholder: "Phone Number",
      validation: validationSchema.fields.phoneNumber,
    },
  ];

  return (
    <>
      <h4>Shipping Details:</h4>
      <Form onSubmit={handleSubmit(onSubmit)} id="shippingForm">
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
      </Form>
    </>
  );
};

export default ShippingForm;
