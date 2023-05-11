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
    <Button onClick={() => toggleBookmark(medication.id)}>
      {medication.isBookmarked ? (
        <Image
          src={"/redBookmark.svg"}
          alt="bookmarked"
          width={25}
          height={25}
        ></Image>
      ) : (
        <Image
          src={"/bookmark.svg"}
          alt="not bookmarked"
          width={25}
          height={25}
        ></Image>
      )}
    </Button>
  );
}
