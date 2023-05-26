import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Card from "./Card";

const mockMedication = {
  id: 1,
  name: "Acetaminophen",
  summary:
    "a pain reliever commonly found in over-the-counter medications such as Tylenol.",
  mechanismOfAction:
    "Acetaminophen works by inhibiting the production of certain chemicals in the body that cause pain and fever.",
  uses: "It is used to relieve mild to moderate pain and to reduce fever.",
  dosageAndAdministration:
    "The recommended dose and frequency depend on the age and weight of the patient.",
  sideEffects:
    "The most common side effects of acetaminophen include nausea, vomiting, and liver damage when taken in high doses.",
  precautions:
    "Acetaminophen can interact with other medications and supplements, so it should be used with caution. It should be avoided or used with caution by individuals with certain medical conditions such as liver disease.",
};

test("renders the card with medication details", () => {
  render(<Card medication={mockMedication} />);

  const medicationName = screen.getByText("Acetaminophen");
  expect(medicationName).toBeInTheDocument();

  const medicationSummary = screen.getByText(
    "a pain reliever commonly found in over-the-counter medications such as Tylenol."
  );
  expect(medicationSummary).toBeInTheDocument();

  const moreInfoButton = screen.getByText("More Info ⌵");
  expect(moreInfoButton).toBeInTheDocument();
});

test(`toggles the expanded details when the "More Info ⌵" button is clicked`, async () => {
  const user = userEvent.setup();

  render(<Card medication={mockMedication} />);

  const moreInfoButton = screen.getByRole("button", { name: "More Info ⌵" });
  await user.click(moreInfoButton);

  const mechanismOfAction = screen.getByText(
    "Acetaminophen works by inhibiting the production of certain chemicals in the body that cause pain and fever."
  );
  expect(mechanismOfAction).toBeInTheDocument();

  const usesOfMedication = screen.getByText(
    "It is used to relieve mild to moderate pain and to reduce fever."
  );
  expect(usesOfMedication).toBeInTheDocument();

  const sideEffects = screen.getByText(
    "The most common side effects of acetaminophen include nausea, vomiting, and liver damage when taken in high doses."
  );
  expect(sideEffects).toBeInTheDocument();

  const dosageAndAdministration = screen.getByText(
    "The recommended dose and frequency depend on the age and weight of the patient."
  );
  expect(dosageAndAdministration).toBeInTheDocument();

  const precautions = screen.getByText(
    "Acetaminophen can interact with other medications and supplements, so it should be used with caution. It should be avoided or used with caution by individuals with certain medical conditions such as liver disease."
  );
  expect(precautions).toBeInTheDocument();

  const lessInfoButton = screen.getByText("Less Info ⌃");
  expect(lessInfoButton).toBeInTheDocument();

  await user.click(lessInfoButton);

  expect(mechanismOfAction).not.toBeInTheDocument();
  expect(usesOfMedication).not.toBeInTheDocument();
  expect(sideEffects).not.toBeInTheDocument();
  expect(dosageAndAdministration).not.toBeInTheDocument();
  expect(precautions).not.toBeInTheDocument();
});
