import { Button } from "@chakra-ui/button";
import html2canvas from "html2canvas";

const SaveQRButton = () => {
  const handleSaveImage = async () => {
    html2canvas(document.querySelector("#react-qrcode-logo")!).then(
      (canvas) => {
        const link = document.createElement("a");
        link.download = "qrcode.png";
        link.href = canvas.toDataURL();
        link.click();
      }
    );
  };

  return (
    <Button onClick={handleSaveImage} colorScheme="green" isFullWidth>
      Save QR Code
    </Button>
  );
};

export default SaveQRButton;
