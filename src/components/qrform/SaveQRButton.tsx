import { Button } from "@chakra-ui/button";
import {
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
} from "@chakra-ui/popover";
import FormInput from "components/ui/FormInput";
import html2canvas from "html2canvas";
import { ChangeEventHandler, useState } from "react";

const SaveQRButton = () => {
  const [size, setSize] = useState<number>(2000);

  const handleSetSize: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSize(Number(event.target.value));
  };

  const handleSaveImage = async () => {
    html2canvas(document.querySelector("#react-qrcode-logo")!).then(
      (canvas) => {
        const resizedCanvas = document.createElement("canvas");
        resizedCanvas.setAttribute("width", size.toString());
        resizedCanvas.setAttribute("height", size.toString());
        let ctx = resizedCanvas.getContext("2d");
        ctx?.drawImage(
          canvas,
          0,
          0,
          canvas.width,
          canvas.height,
          0,
          0,
          size,
          size
        );

        const link = document.createElement("a");
        link.download = "qrcode.png";
        link.href = resizedCanvas.toDataURL();
        link.click();
      }
    );
  };

  return (
    <Popover>
      <PopoverTrigger>
        <Button colorScheme="blue" isFullWidth>
          Save QR Code
        </Button>
      </PopoverTrigger>

      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />

        <PopoverHeader>configuration</PopoverHeader>

        <PopoverBody>
          <FormInput
            label="size (px)"
            type="number"
            value={size}
            onChange={handleSetSize}
          />
        </PopoverBody>

        <PopoverFooter>
          <Button onClick={handleSaveImage} isFullWidth colorScheme="green">
            Download
          </Button>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
};

export default SaveQRButton;
