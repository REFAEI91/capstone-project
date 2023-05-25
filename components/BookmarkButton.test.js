import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BookmarkButton from "./BookmarkButton";

describe("BookmarkButton", () => {
  it("should toggle bookmark when clicked", () => {
    // Setup
    const toggleBookmark = jest.fn();
    const medication = {
      id: 1,
      isBookmarked: false,
    };

    // Render the component
    const { getByLabelText } = render(
      <BookmarkButton
        toggleBookmark={toggleBookmark}
        medication={medication}
        isDarkMode={false}
      />
    );

    // Find the button element and click it
    const button = getByLabelText("bookmark");
    fireEvent.click(button);

    // Assertion: toggleBookmark should be called with the correct arguments
    expect(toggleBookmark).toHaveBeenCalledWith(medication.id);
  });
});
