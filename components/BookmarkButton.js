import Image from "next/image";
import styled from "styled-components";

export default function BookmarkButton({ toggleBookmark, medication }) {
  const Button = styled.button`
    position: absolute;
    justify-self: flex-end;
    border: none;
    background-color: transparent;
  `;
  return (
    <Button
      onClick={() => toggleBookmark(medication.id)}
      aria-label={medication.isBookmarked ? "remove bookmark" : "bookmark"}
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
