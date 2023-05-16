import styled from "styled-components";
import { Goldman } from "@next/font/google";
const goldman = Goldman({
  weight: "400",
  subsets: ["latin"],
});
export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-radius: 5px;
  padding: 1rem;
  margin: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
`;
export const UserName = styled.h3`
  font-size: 1.2rem;
  font-family: ${goldman.style.fontFamily};
  grid-column: 1 / 3;
  text-align: center;
  margin: 0;
`;
export const Span = styled.span`
  font-family: ${goldman.style.fontFamily};
`;
export const List = styled.ul`
  list-style: none;
  padding-left: 1rem;
  margin: 0;
`;
export const EditButton = styled.button`
  grid-column: 1 / 3;
  background-color: whitesmoke;
  border: 1px groove lightgray;
  border-radius: 5px;
  padding: 0.5rem;
  margin-top: 0.5rem;
  width: 100%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
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
  margin: 0.5rem;
`;

export const Input = styled.input`
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  &:focus {
    width: 100%;
  }
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
