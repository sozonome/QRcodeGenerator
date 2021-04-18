import { Box, Flex } from "@chakra-ui/layout";
import { ReactNode } from "react";

import Header from "./Header";
import Footer from "./Footer";
import Meta from "./Meta";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box margin="0 auto" maxWidth={800} transition="0.5s ease-out">
      <Meta />
      <Flex padding={8} minHeight="100vh" wrap="wrap">
        <Header />
        <Box as="main" width="full" marginY={22}>
          {children}
        </Box>
        <Footer />
      </Flex>
    </Box>
  );
};

export default Layout;
