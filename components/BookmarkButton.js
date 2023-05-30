import Image from "next/image";
import styled from "styled-components";
const Button = styled.button`
  position: absolute;
  justify-self: flex-end;
  border: none;
  background-color: transparent;
  cursor: pointer;
  ${({ isDarkMode }) =>
    isDarkMode &&
    `
    filter: invert(1);
  `}
`;
export default function BookmarkButton({
  toggleBookmark,
  medication,
  isDarkMode,
}) {
  return (
    <Button
      type="button"
      onClick={() => toggleBookmark(medication.id)}
      aria-label={medication.isBookmarked ? "remove bookmark" : "bookmark"}
      isDarkMode={isDarkMode}
    >
      <Image
        src={medication.isBookmarked ? "/redBookmark.svg" : "/bookmark.svg"}
        width={25}
        height={25}
        alt="bookmark"
      />
    </Button>
  );
}
