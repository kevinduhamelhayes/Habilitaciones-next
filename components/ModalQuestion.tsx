import React from "react";

import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

interface ModalQuestionProps {
  question: string;
  answer: string;
}

const ModalQuestion: React.FC<ModalQuestionProps> = ({ question, answer }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [backdrop, setBackdrop] = React.useState<'opaque' | 'transparent'>('opaque')


  const handleOpen = () => {
    setBackdrop('transparent');
    onOpen();
  }

  return (
    <>
      <Button
        variant="solid"
        color="primary"
        onPress={handleOpen}
        className="capitalize whitespace-normal rounded-md text-center block w-full h-auto text-lg font-semibold"
      >
        {question}
      </Button>
      <Modal backdrop={backdrop} isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{question}</ModalHeader>
              <ModalBody>
                <p>{answer}</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button as="a" color="success" className="" href="https://api.whatsapp.com/send/?phone=%2B543415883040" variant="light">
            Wats App
          </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
export default ModalQuestion;
