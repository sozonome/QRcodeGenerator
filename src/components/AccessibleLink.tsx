import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/layout";
import Link, { LinkProps } from "next/link";

type AccessibleLinkProps = LinkProps & ChakraLinkProps;

const AccessibleLink = ({
  href,
  isExternal,
  children,
  as,
}: AccessibleLinkProps) => {
  return (
    <ChakraLink as={Link} href={href} isExternal={isExternal}>
      {children}
    </ChakraLink>
  );
};

export default AccessibleLink;
