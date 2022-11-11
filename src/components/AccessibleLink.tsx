import type { LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { Link as ChakraLink } from "@chakra-ui/react";
import type { LinkProps } from "next/link";
import Link from "next/link";

type AccessibleLinkProps = LinkProps & ChakraLinkProps;

const AccessibleLink = ({
  href,
  isExternal,
  children,
}: AccessibleLinkProps) => {
  return (
    <ChakraLink as={Link} href={href} isExternal={isExternal}>
      {children}
    </ChakraLink>
  );
};

export default AccessibleLink;
