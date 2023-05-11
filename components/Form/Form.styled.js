import styled from "styled-components";
import { Goldman } from "@next/font/google";
const goldman = Goldman({
  weight: "400",
  subsets: ["latin"],
});

export const Form = styled.form`
  display: grid;
`;
export const Fieldset = styled.fieldset`
  padding: 1.3em;
  border-radius: 5px;
  margin: 1.5em;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border: none;
`;
export const SomeoneElse = styled.fieldset`
  border: none;
`;
export const ForFieldset = styled.fieldset`
  border: none;
`;
export const Legend = styled.legend`
  display: flex;
  justify-content: center;
  font-size: 1.3rem;
  margin-top: 0.2rem;
  font-family: ${goldman.style.fontFamily};
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
`;

export const Input = styled.input`
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  transition: width 0.3s ease-in-out;
  width: 100%;
  margin: 0 auto;
`;
export const Textarea = styled.textarea`
  margin-top: 0.5em;
  padding: 0.5em;
  border-radius: 5px;
  border: none;
  width: 100%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;
export const Select = styled.select`
  margin-top: 0.5em;
  padding: 0.5em;
  border-radius: 5px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const Checkbox = styled.input`
  margin-right: 0.5em;
`;
export const Radio = styled.input`
  margin-right: 0.5em;
`;
export const FormButton = styled.button`
  background-color: whitesmoke;
  border: 1px groove lightgray;
  width: 100%;
  margin-top: 0.5em;
  padding: 0.5em;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  &:hover {
    cursor: pointer;
    background-color: #fff8de;
  }
`;
