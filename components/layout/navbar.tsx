import {
  Box,
  Avatar,
  Button,
  HStack,
  Image,
  Input,
  Spacer
} from "@chakra-ui/react";
import Container from "./container";
import { ReactNode } from "react";

type IconButtonProps = {
  children: ReactNode;
};

const IconButton = ({ children }: IconButtonProps) => {
  return (
    <Button
      padding="0.4rem"
      width="auto"
      height="auto"
      borderRadius="100%"
      bg="transparent"
      _hover={{ bg: "#f6f6f6" }}
    >
      {children}
    </Button>
  );
};

const Navbar = () => {
  return (
    <Box
      py="2"
      boxShadow="sm"
      border="0 solid #e5e7eb"
      position="fixed"
      top="0"
      bg="#fff"
      width="100%"
      zIndex="1"
    >
      <Container>
        <HStack spacing={4}>
          <Image src="/assets/images/logo.svg" />
          <Input
            maxW="26rem"
            placeholder="Search..."
            borderColor="#b5bdc4"
            borderRadius="5px"
            d={{ base: "none", md: "block" }}
          />
          <Spacer />
          <HStack spacing={3}>
            <Button
              color="#fff"
              borderRadius="4px"
              bg="#3b49df"
              _hover={{ bg: "#323ebe" }}
            >
              Create a post
            </Button>
            <IconButton>
              <Image src="/assets/images/notification.svg" />
            </IconButton>
            <IconButton>
              <Image src="/assets/images/bell.svg" />
            </IconButton>
            <Avatar
              size={"sm"}
              src={"https://avatars2.githubusercontent.com/u/37842853?v=4"}
            />
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
};

export default Navbar;
