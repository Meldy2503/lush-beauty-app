// "use client";

// import {
//   Button,
//   CloseButton,
//   DialogActionTrigger,
//   DialogBackdrop,
//   DialogBody,
//   DialogCloseTrigger,
//   DialogContent,
//   DialogFooter,
//   DialogHeader,
//   DialogRoot,
//   DialogTitle,
// } from "@chakra-ui/react";
// import React from "react";

// interface ContactUsModalProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// const ContactUsModal = ({ isOpen, onClose }: ContactUsModalProps) => {
//   return (
//     <DialogRoot
//       open={isOpen}
//       onOpenChange={(details) => {
//         if (!details.open) {
//           onClose();
//         }
//       }}
//       size="md"
//       placement="center"
//       motionPreset="slide-in-bottom"
//     >
//       <DialogBackdrop />
//       <DialogContent w="600px" h="400px" bg="black" color="white">
//         <DialogHeader>
//           <DialogTitle>Contact Us</DialogTitle>
//         </DialogHeader>

//         <DialogBody p="6" bg="red" color="white">
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua.
//           </p>
//         </DialogBody>

//         <DialogFooter>
//           <DialogActionTrigger asChild>
//             <Button variant="outline" onClick={onClose}>
//               Cancel
//             </Button>
//           </DialogActionTrigger>
//           <Button>Save</Button>
//         </DialogFooter>

//         <DialogCloseTrigger />

//         <DialogCloseTrigger asChild>
//           <CloseButton fontSize="7rem" onClick={onClose} bg='red.500' />
//         </DialogCloseTrigger>
//       </DialogContent>
//     </DialogRoot>
//   );
// };

// export default ContactUsModal;



"use client";
import {
  Button,
  CloseButton,
  DialogActionTrigger,
  DialogBackdrop,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
} from "@chakra-ui/react";
import React from "react";

interface ContactUsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactUsModal = ({ isOpen, onClose }: ContactUsModalProps) => {
  return (
    <DialogRoot
      open={isOpen}
      onOpenChange={(details) => {
        if (!details.open) {
          onClose();
        }
      }}
      size="md"
      placement="center"
      motionPreset="slide-in-bottom"
    >
      <DialogBackdrop bg="blackAlpha.600" />
      <DialogContent
        w="600px"
        h="400px"
        bg="black"
        color="white"
        position="relative"
        maxW="90vw"
        maxH="90vh"
      >
        <DialogCloseTrigger asChild>
          <CloseButton
            position="absolute"
            top="4"
            right="4"
            onClick={onClose}
            bg="red.500"
            color="white"
            zIndex="1"
            _hover={{ bg: "red.600" }}
          />
        </DialogCloseTrigger>

        <DialogHeader>
          <DialogTitle>Contact Us</DialogTitle>
        </DialogHeader>

        <DialogBody p="6" bg="red" color="white">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </DialogBody>

        <DialogFooter>
          <DialogActionTrigger asChild>
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
          </DialogActionTrigger>
          <Button>Save</Button>
        </DialogFooter>
      </DialogContent>
    </DialogRoot>
  );
};

export default ContactUsModal;

