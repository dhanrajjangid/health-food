import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
  padding: 0 20px;
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  max-width: 100%;
  box-sizing: border-box;
  width: 100%;
  padding: 1rem;
`;

export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  text-align: left;
  max-width: 100%;
`;

export const ErrorMessage = styled.div`
  color: red;
  font-size: 12px; /* Adjust the font size */
  margin-top: 5px; /* Adjust as needed */
`;

export const SignUpLink = styled.span`
  color: purple;
  cursor: pointer;
  text-decoration: underline;
  margin-top: 10px;
  display: inline-block;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: start;
`;

export const CheckboxLabel = styled.label`
  margin-left: 8px; /* Adjust this value as needed for spacing */
`;

