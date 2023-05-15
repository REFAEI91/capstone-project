import Modal from "react-modal";
import styled from "styled-components";

Modal.setAppElement("#__next");

const StyledModal = styled(Modal)`
  display: flex;
  position: absolute;
  top: 17rem;
  left: 4rem;
`;

const ModalContent = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  padding: 20px;
  max-width: 400px;
  width: 100%;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  button {
    background-color: #0e7c7b;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    margin-right: 10px;

    &:last-child {
      margin-right: 0;
    }

    &:hover {
      background-color: #0b5655;
    }
  }
`;
const CardPreview = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  padding: 20px;
  max-width: 400px;
  width: 100%;
  text-align: center;
  margin-top: 20px;
`;

const CardTitle = styled.h3`
  margin-bottom: 10px;
`;

const CardDescription = styled.p`
  color: #666;
`;
export default function ConfirmationModal({ isOpen, onConfirm, onCancel }) {
  return (
    <StyledModal isOpen={isOpen}>
      <ModalContent>
        <h2>Do you want to save?</h2>
        <ButtonGroup>
          <button onClick={onConfirm}>Yes</button>
          <button onClick={onCancel}>Cancel</button>
        </ButtonGroup>
      </ModalContent>
    </StyledModal>
  );
}
