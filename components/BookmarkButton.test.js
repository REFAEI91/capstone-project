import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BookmarkButton from "./BookmarkButton";

test("calls toggleBookmark when clicked with medication id", async () => {
  const toggleBookmark = jest.fn();
  const user = userEvent.setup();

  const medication = {
    id: 1,
    isBookmarked: false,
  };

  render(
    <BookmarkButton
      toggleBookmark={toggleBookmark}
      medication={medication}
      isDarkMode={false}
    />
  );

  const button = screen.getByRole("button", { name: "bookmark" });
  await user.click(button);

  expect(toggleBookmark).toHaveBeenCalledWith(1);
});
