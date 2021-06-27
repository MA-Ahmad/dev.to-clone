import {
  Box,
  Avatar,
  Button,
  HStack,
  VStack,
  Image,
  Input,
  Spacer,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  Link,
  useDisclosure,
  MenuDivider
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
  const { isOpen, onOpen, onClose } = useDisclosure();

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
            <Menu isLazy>
              {({ isOpen, onClose }) => (
                <>
                  <MenuButton
                    as={Button}
                    size="sm"
                    px={0}
                    py={0}
                    rounded="full"
                  >
                    <Avatar
                      size={"sm"}
                      src={
                        "https://avatars2.githubusercontent.com/u/37842853?v=4"
                      }
                    />
                  </MenuButton>
                  <MenuList
                    zIndex={5}
                    border="2px solid"
                    borderColor="gray.700"
                    boxShadow="4px 4px 0"
                    boxColor="gray.700"
                  >
                    <Link
                      href="https://dev.to/m_ahmad"
                      _hover={{ textDecoration: "none" }}
                      onClick={onClose}
                      isExternal
                    >
                      <MenuItem>
                        <VStack justify="start" alignItems="left">
                          <Text fontWeight="500">Muhammad Ahmad</Text>
                          <Text size="sm" color="gray.500" mt="0 !important">
                            @m_ahmad
                          </Text>
                        </VStack>
                      </MenuItem>
                    </Link>
                    <MenuDivider />
                    <MenuItem>
                      <Text fontWeight="500">Dashboard</Text>
                    </MenuItem>
                    <MenuItem>
                      <Text fontWeight="500">Create Post</Text>
                    </MenuItem>
                    <MenuItem>
                      <Text fontWeight="500">Reading List</Text>
                    </MenuItem>
                    <MenuItem>
                      <Text fontWeight="500">Settings</Text>
                    </MenuItem>
                    <MenuDivider />
                    <MenuItem>
                      <Text fontWeight="500">Sign Out</Text>
                    </MenuItem>
                  </MenuList>
                </>
              )}
            </Menu>
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
};

export default Navbar;
