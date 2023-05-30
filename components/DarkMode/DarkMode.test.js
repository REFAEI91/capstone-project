import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DarkMode from "./DarkMode";

test("renders DarkMode component with light mode", () => {
  render(<DarkMode isDarkMode={false} toggleDarkMode={() => {}} />);

  // Verify that light mode elements are rendered
  const lightModeToggle = screen.getByLabelText("Light Mode");
  const sunIcon = screen.getByAltText("sun");

  expect(lightModeToggle).toBeInTheDocument();
  expect(sunIcon).toBeInTheDocument();
});

test("renders DarkMode component with dark mode", () => {
  render(<DarkMode isDarkMode={true} toggleDarkMode={() => {}} />);

  // Verify that dark mode elements are rendered
  const darkModeToggle = screen.getByLabelText("Dark Mode");
  const moonIcon = screen.getByAltText("moon");

  expect(darkModeToggle).toBeInTheDocument();
  expect(moonIcon).toBeInTheDocument();
});
test("updates the body class when the isDarkMode prop changes", () => {
  const toggleDarkMode = jest.fn();
  const initialMode = false;
  const updatedMode = true;
  render(<DarkMode isDarkMode={initialMode} toggleDarkMode={toggleDarkMode} />);
  // Verify that the body class is initially not set
  expect(document.body.classList.contains("isDarkMode")).toBe(false);
  // Update the isDarkMode prop
  render(<DarkMode isDarkMode={updatedMode} toggleDarkMode={toggleDarkMode} />);
  // Verify that the body class is updated
  expect(document.body.classList.contains("isDarkMode")).toBe(updatedMode);
});
