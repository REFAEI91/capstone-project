import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Card from "./Card";

const mockMedication = {
  id: 1,
  name: "Medication 1",
  summary: "Summary of Medication 1",
  mechanismOfAction: "Mechanism of Action",
  uses: "Uses of Medication",
  sideEffects: "Side Effects of Medication",
  dosageAndAdministration: "Dosage and Administration",
  precautions: "Precautions for Medication",
};

describe("Card", () => {
  it("renders the card with medication details", () => {
    render(
      <Card
        medication={mockMedication}
        toggleBookmark={() => {}}
        isDarkMode={false}
      />
    );

    // Assert that the medication name is rendered
    const medicationName = screen.getByText("Medication 1");
    expect(medicationName).toBeInTheDocument();

    // Assert that the medication summary is rendered
    const medicationSummary = screen.getByText("Summary of Medication 1");
    expect(medicationSummary).toBeInTheDocument();

    // Assert that the "More Info" button is rendered
    const moreInfoButton = screen.getByText("More Info ⌵");
    expect(moreInfoButton).toBeInTheDocument();

    // Assert that the expanded details are not initially rendered
    const mechanismOfAction = screen.queryByText("Mechanism of Action");
    expect(mechanismOfAction).not.toBeInTheDocument();
  });

  it('toggles the expanded details when the "More Info" button is clicked', () => {
    render(
      <Card
        medication={mockMedication}
        toggleBookmark={() => {}}
        isDarkMode={false}
      />
    );

    // Click the "More Info" button
    const moreInfoButton = screen.getByText("More Info ⌵");
    fireEvent.click(moreInfoButton);

    // Assert that the expanded details are rendered
    const mechanismOfAction = screen.getByText("Mechanism of Action");
    expect(mechanismOfAction).toBeInTheDocument();

    // Assert that the "Less Info" button is displayed after clicking
    const lessInfoButton = screen.getByText("Less Info ⌃");
    expect(lessInfoButton).toBeInTheDocument();

    // Click the "Less Info" button
    fireEvent.click(lessInfoButton);

    // Assert that the expanded details are not rendered
    const mechanismOfActionAfterCollapse = screen.queryByText(
      "Mechanism of Action"
    );
    expect(mechanismOfActionAfterCollapse).not.toBeInTheDocument();
  });
});
