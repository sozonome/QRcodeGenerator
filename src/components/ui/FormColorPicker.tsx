import { IconButton } from "@chakra-ui/button";
import {
  FormControl,
  FormControlProps,
  FormLabel,
} from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { useState } from "react";
import { ColorPickerProps, SketchPicker } from "react-color";
import { MdFormatColorFill } from "react-icons/md";

type FormColorPickerProps = Pick<
  FormControlProps,
  "isInvalid" | "isDisabled" | "isRequired"
> & {
  label?: string;
  errorMsg?: string;
} & ColorPickerProps<SketchPicker>;

const FormColorPicker = ({
  label,
  color,
  ...sketchPickerProps
}: FormColorPickerProps) => {
  const [displayColorPicker, setDisplayColorPicker] = useState<boolean>();

  const toggleDisplayColorPicker = () =>
    setDisplayColorPicker(!displayColorPicker);

  return (
    <FormControl>
      {label && <FormLabel>{label}</FormLabel>}
      <InputGroup>
        <Input value={color as string} variant="outline" />
        <InputRightElement
          children={
            <IconButton
              aria-label="toggle-color-picker"
              icon={<MdFormatColorFill />}
              variant="solid"
              onClick={toggleDisplayColorPicker}
            />
          }
        />
      </InputGroup>
      {displayColorPicker && <SketchPicker {...sketchPickerProps} />}
    </FormControl>
  );
};

export default FormColorPicker;
