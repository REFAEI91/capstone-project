import Image from "next/image";
import styled from "styled-components";

export default function BookmarkButton({ toggleBookmark, medication }) {
  const Button = styled.button`
    position: absolute;
    justify-self: flex-end;
    border: none;
    background-color: transparent;
    .bookmarked {
      background-color: goldenrod;
    }
  `;
  return (
    <Button onClick={() => toggleBookmark(medication.id)}>
      <Image
        src="/bookmark.svg"
        width={23}
        height={23}
        alt="bookmark"
        className={medication.isBookmarked ? "bookmarked" : ""}
      />
    </Button>
  );
}
