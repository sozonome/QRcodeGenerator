import { Box, Flex, Heading, Text } from "@chakra-ui/layout";

import AccessibleLink from "components/AccessibleLink";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <Flex as="header" width="full" align="center">
      <AccessibleLink href="/">
        <Heading as="h1" size="md">
          QRcodeGen
        </Heading>
        <Text fontSize="xs">QR Code Generator</Text>
      </AccessibleLink>

      <Box marginLeft="auto">
        <ThemeToggle />
      </Box>
    </Flex>
  );
};

export default Header;
