import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
} from "@chakra-ui/react";
import { SkillData } from "./SkillData.interface";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: SkillData;
}

const SkillModal: React.FC<ModalProps> = (props) => {
  const { isOpen, onClose, data } = props;
  const { name, proficiency, description } = data;
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent mx="10px">
        <ModalHeader>{name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text fontWeight="medium">Proficiency: {proficiency}%</Text>
          <Text>{description}</Text>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SkillModal;
