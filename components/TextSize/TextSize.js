import styled from "styled-components";

const RangeInput = styled.input`
  appearance: none;
  width: 70%;
  height: 10px;
  border-radius: 5px;
  background-color: #ddd;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: green;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #4caf50;
    cursor: pointer;
  }
`;

export default function TextSize({ textSize, handleTextSizeChange }) {
  return (
    <>
      <label htmlFor="text-size-range">Text Size : {textSize}</label>
      <RangeInput
        type="range"
        id="text-size-range"
        name="text-size-range"
        min="12"
        max="20"
        value={textSize}
        onChange={handleTextSizeChange}
      />
    </>
  );
}
