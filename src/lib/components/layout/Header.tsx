import { Box, Flex, Heading, Text } from "@chakra-ui/react";

import AccessibleLink from "lib/components/AccessibleLink";

import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <Flex as="header" width="full" align="center" alignSelf="flex-start">
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
