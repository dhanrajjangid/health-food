import React from "react";
import styled from "styled-components";

// TextField component
export const TextField = styled.input`
  padding: ${(props) => props?.padding || "10px"};
  border-radius: ${(props) => props?.borderRadius || "0"};
  border: 1px solid #ccc;
  max-width: 100%;
  font-size: 1rem;
`;

export const UnderlinedTextField = styled.input.attrs((props) => ({
  type: props.type === "number" ? "number" : "text",
}))`
  box-sizing: border-box;
  padding: 10px;
  border: none;
  border-bottom: 1px solid #ccc;
  max-width: 100%;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-bottom: 2px solid #ccc;
    border-radius: 5px;
  }
`;

// Dropdown component
export const Dropdown = styled.select`
  box-sizing: border-box;

  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  appearance: none; 
  background-color: #fff; 
  font-size: 16px; 
  cursor: pointer;
  outline: none; 
  -webkit-appearance: none;
  -moz-appearance: none; 

  /* Add custom arrow icon */
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>');
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 16px 16px;
`;

export const DropdownContainer = styled.div`
  width: 100%;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

// Date Picker component

// Button component (Contained)
export const ContainedButton = styled.button`
  box-sizing: border-box;
  padding: 15px 20px;
  width: 100%;
  border-radius: ${(props) => props?.borderRadius || "0"};
  background-color: ${(props) => props?.backgroundColor || "#14c2bf"};
  color: ${(props) => props?.color || "#fff"};
  cursor: pointer;
  font-size: 1.2rem;
  transition: background-color 0.3s ease;
  border: 1px solid ${(props) => props?.borderColor || "#14c2bf"};

  &:hover {
    background-color: ${(props) => props?.hoverBackgroundColor || "#fff"};
    color: ${(props) => props.hoverColor || "#14c2bf"};
  }
`;

// Button component (Outlined)
export const OutlinedButton = styled.button`
  box-sizing: border-box;

  padding: 15px 20px;
  width: 100%;
  border: 2px solid #14c2bf;
  // border-radius: 15px;
  background-color: transparent;
  cursor: pointer;
  color: #14c2bf;
  transition: background-color 0.3s ease;
  font-size: 1.2rem;

  &:hover {
    background-color: #14c2bf;
    color: #fff;
  }
`;

export const Checkbox = styled.input.attrs((props) => ({
  type: "checkbox",
  defaultChecked: props.defaultChecked ? true : undefined,
  ref: props?.ref && props?.ref
}))`
  cursor: pointer;
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid #ccc;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:checked {
    background-color: #14c2bf;
    border-color: #14c2bf;
  }

  &:checked::before {
    content: "✔";
    display: block;
    width: 100%;
    height: 100%;
    text-align: center;
    line-height: 18px;
    color: #fff;
  }
`;

// Container for responsive design
export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  width: 100%;
`;
