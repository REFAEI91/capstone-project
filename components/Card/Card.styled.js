import { Goldman } from "@next/font/google";
import styled from "styled-components";
const goldman = Goldman({
  weight: "400",
  subsets: ["latin"],
});

export const Container = styled.section`
  display: grid;
  padding: 1.3em;
  border-radius: 5px;
  margin: 1.5em;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  @media (max-width: 375px) {
    margin: 5%;
  }
`;
export const Title = styled.h2`
  font-size: 1.1rem;
  margin-bottom: 10px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.32);
  font-family: ${goldman.style.fontFamily};
`;
export const Button = styled.button`
  justify-self: flex-end;
  color: black;
  padding: 0.3rem;
  border: 0.1px solid black;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
  &:hover {
    cursor: pointer;
    background-color: #fff8de;
  }
`;
export const DetailsList = styled.ul`
  list-style: none;
  padding: 0;
`;
export const Span = styled.span`
  font-family: ${goldman.style.fontFamily};
  font-size: 1rem;
  background-color: #fff8de;
`;
