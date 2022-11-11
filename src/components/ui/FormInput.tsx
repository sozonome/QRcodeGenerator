import type { FormControlProps, InputProps } from "@chakra-ui/react";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";

type FormInputProps = Pick<
  FormControlProps,
  "isInvalid" | "isDisabled" | "isRequired"
> & {
  label?: string;
  errorMsg?: string;
} & InputProps;

const FormInput = ({
  isDisabled,
  isInvalid,
  isRequired,
  label,
  errorMsg,
  ...inputProps
}: FormInputProps) => {
  const defaultInputProps: InputProps = {
    borderRadius: 24,
    size: "lg",
  };

  return (
    <FormControl
      isInvalid={isInvalid}
      isDisabled={isDisabled}
      isRequired={isRequired}
    >
      {label && <FormLabel>{label}</FormLabel>}
      <Input {...defaultInputProps} {...inputProps} />
      {errorMsg && <FormErrorMessage>{errorMsg}</FormErrorMessage>}
    </FormControl>
  );
};

export default FormInput;
