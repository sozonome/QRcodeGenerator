import { Flex, Link, Text } from "@chakra-ui/layout";

const Footer = () => {
  return (
    <Flex as="footer" width="full" align="center" alignSelf="flex-end">
      <Text>
        {new Date().getFullYear()} -{" "}
        <Link href="https://sznm.dev" isExternal fontWeight="semibold">
          sznm.dev
        </Link>
      </Text>
    </Flex>
  );
};

export default Footer;
