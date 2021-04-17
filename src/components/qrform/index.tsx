import { Button } from "@chakra-ui/button";
import { Box, Center, Grid } from "@chakra-ui/layout";
import FormInput from "components/ui/FormInput";
import { useFormik } from "formik";
import { useRef } from "react";
import { QRCode } from "react-qrcode-logo";

import { QRFormType } from "./types";

const QRForm = () => {
  const qrcodeRef = useRef<QRCode>(null);

  const { values, handleChange } = useFormik<QRFormType>({
    initialValues: {
      value: "https://google.com",
    },
    onSubmit: () => {},
  });
  const { value } = values;

  return (
    <Grid gap={8}>
      <Center>
        <Box>
          <QRCode ref={qrcodeRef} {...values} size={200} />
          <Button isFullWidth>Save QR Code</Button>
        </Box>
      </Center>

      <Grid gap={4}>
        <FormInput
          label="Content"
          name="value"
          value={value}
          onChange={handleChange}
          placeholder="URL / texts"
        />
      </Grid>
    </Grid>
  );
};

export default QRForm;
