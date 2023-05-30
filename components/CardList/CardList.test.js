import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CardList from "./CardList";

describe("CardList component", () => {
  const medications = [
    {
      id: 1,
      name: "Acetaminophen",
      summary:
        "a pain reliever commonly found in over-the-counter medications such as Tylenol.",
      isBookmarked: false,
    },
    {
      id: 2,
      name: "Ibuprofen",
      summary:
        "a nonsteroidal anti-inflammatory drug (NSAID) that reduces inflammation and pain, found in products such as Advil or Motrin.",
      isBookmarked: true,
    },
    {
      id: 3,
      name: "Aspirin",
      summary:
        "medication that belongs to the class of drugs called nonsteroidal anti-inflammatory drugs (NSAIDs). It works by inhibiting the production of prostaglandins, which are chemicals that cause pain, inflammation, and fever in the body.",
      isBookmarked: false,
    },
  ];
  const mockToggleBookmark = jest.fn();
  test("search for medications by name or summary", () => {
    render(<CardList medications={medications} />);
    const searchInput = screen.getByPlaceholderText("Search...");
    userEvent.type(searchInput, "Tylenol");
    expect(screen.getByText("Acetaminophen")).toBeInTheDocument();
    userEvent.type(searchInput, "nonsteroidal");
    expect(screen.getByText("Ibuprofen")).toBeInTheDocument();
    userEvent.type(searchInput, "anti");
    expect(screen.getByText("Aspirin")).toBeInTheDocument();
  });
  test("displays the list of medications correctly, including their name, summary, and bookmark status", () => {
    render(
      <CardList medications={medications} toggleBookmark={mockToggleBookmark} />
    );
    expect(screen.getByText("Acetaminophen")).toBeInTheDocument();
    expect(screen.getByText("Ibuprofen")).toBeInTheDocument();
    expect(screen.getByText("Aspirin")).toBeInTheDocument();
    expect(
      screen.getByText(
        "a pain reliever commonly found in over-the-counter medications such as Tylenol."
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "a nonsteroidal anti-inflammatory drug (NSAID) that reduces inflammation and pain, found in products such as Advil or Motrin."
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "medication that belongs to the class of drugs called nonsteroidal anti-inflammatory drugs (NSAIDs). It works by inhibiting the production of prostaglandins, which are chemicals that cause pain, inflammation, and fever in the body."
      )
    ).toBeInTheDocument();
  });

  test("sorts medications in ascending order", () => {
    render(<CardList medications={medications} />);
    const filterSelect = screen.getByLabelText("");
    userEvent.selectOptions(filterSelect, "asc");
    expect(screen.getByText("Acetaminophen")).toBeInTheDocument();
    expect(screen.getByText("Aspirin")).toBeInTheDocument();
    expect(screen.getByText("Ibuprofen")).toBeInTheDocument();
  });
  test("sorts medications in descending order", () => {
    render(<CardList medications={medications} />);
    const filterSelect = screen.getByLabelText("");
    userEvent.selectOptions(filterSelect, "desc");
    expect(screen.getByText("Ibuprofen")).toBeInTheDocument();
    expect(screen.getByText("Aspirin")).toBeInTheDocument();
    expect(screen.getByText("Acetaminophen")).toBeInTheDocument();
  });
  test("sorts medications by bookmark status", () => {
    render(<CardList medications={medications} />);
    const filterSelect = screen.getByLabelText("");
    userEvent.selectOptions(filterSelect, "bookmarked");
    expect(screen.getByText("Ibuprofen")).toBeInTheDocument();
    expect(screen.getByText("Acetaminophen")).toBeInTheDocument();
    expect(screen.getByText("Aspirin")).toBeInTheDocument();
  });
});
