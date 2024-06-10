// ./Components/StyledComponents.jsx
import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  max-width: 800px;
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 20px;
`;

export const Subtitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const Paragraph = styled.p`
  margin-bottom: 15px;
`;

export const EmailLink = styled.a`
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const ContactForm = styled.form`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  box-sizing: border-box;

  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const SubmitButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 5px;
`;
