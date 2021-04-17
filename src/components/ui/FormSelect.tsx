import {
  FormControl,
  FormControlProps,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/form-control";
import { Select, SelectProps } from "@chakra-ui/select";

type FormSelectProps = Pick<
  FormControlProps,
  "isInvalid" | "isDisabled" | "isRequired"
> & {
  label?: string;
  errorMsg?: string;
} & SelectProps;

const FormSelect = ({
  isInvalid,
  isDisabled,
  isRequired,
  label,
  errorMsg,
  ...selectProps
}: FormSelectProps) => {
  const defaultSelectProps: SelectProps = {
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
      <Select {...defaultSelectProps} {...selectProps} />
      {errorMsg && <FormErrorMessage>{errorMsg}</FormErrorMessage>}
    </FormControl>
  );
};

export default FormSelect;
