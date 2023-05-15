import styled from "styled-components";
import { Goldman } from "@next/font/google";
const goldman = Goldman({
  weight: "400",
  subsets: ["latin"],
});
export const Container = styled.section`
  display: grid;
  padding: 1rem;
  border-radius: 5px;
  margin: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
`;
export const UserInfo = styled.h2`
  font-family: ${goldman.style.fontFamily};
`;
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

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
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

export const Select = styled.select`
  margin-top: 0.5em;
  padding: 0.5em;
  border-radius: 5px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
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
