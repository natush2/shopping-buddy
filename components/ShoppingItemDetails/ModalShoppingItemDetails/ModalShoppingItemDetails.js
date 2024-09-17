import {
  StyledOverlay,
  StyledModalContent,
  StyledCloseButton,
  StyledModalImage,
} from "./StyledModalShoppingItemDetails";

const ModalImageDetails = ({ imageUrl, altName, onClose, placeholder }) => {
  return (
    <StyledOverlay onClick={onClose}>
      <StyledModalContent onClick={(event) => event.stopPropagation()}>
        <StyledCloseButton onClick={onClose}>&times;</StyledCloseButton>
        <StyledModalImage
          src={imageUrl ? imageUrl : placeholder}
          alt={altName ? altName : "Image"}
          width={1200}
          height={800}
        />
      </StyledModalContent>
    </StyledOverlay>
  );
};

export default ModalImageDetails;
