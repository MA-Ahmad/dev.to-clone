import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  Spacer
} from "@chakra-ui/react";
import { ReactNode } from "react";

type LinkButtonProps = {
  children: ReactNode;
};

const LinkButton = ({ children }: LinkButtonProps) => {
  return (
    <Button
      _hover={{ color: "#323ebe", bg: "#e2e4e6" }}
      bg="transparent"
      width="14rem"
      padding="8px"
      fontWeight="normal"
      justifyContent="flex-start"
    >
      {children}
    </Button>
  );
};

const Links = () => {
  return (
    <Box as="nav">
      <LinkButton>
        <Image src="/assets/images/sidebar/home.svg" mr="3" />
        Home
      </LinkButton>
      <LinkButton>
        <Image src="/assets/images/sidebar/reading.svg" mr="3" />
        Reading List
      </LinkButton>
      <LinkButton>
        <Image src="/assets/images/sidebar/listing.svg" mr="3" />
        Listings
      </LinkButton>
      <LinkButton>
        <Image src="/assets/images/sidebar/podcast.svg" mr="3" />
        Podcasts
      </LinkButton>
      <LinkButton>
        <Image src="/assets/images/sidebar/video.svg" mr="3" />
        Videos
      </LinkButton>
      <LinkButton>
        <Image src="/assets/images/sidebar/tag.svg" mr="3" />
        Tags
      </LinkButton>
      <LinkButton>
        <Text fontWeight="normal" color="#4d5760" ml="2.3rem">
          More...
        </Text>
      </LinkButton>
    </Box>
  );
};

const TagList = ({ children }) => {
  return (
    <Box>
      {children &&
        children.map((item, idx) => <LinkButton key={idx}>#{item}</LinkButton>)}
    </Box>
  );
};

const Tags = () => {
  return (
    <Box mt="6">
      <Flex pl="2" py="4">
        <Heading as="h3" fontSize="1rem">
          My Tags
        </Heading>
        <Spacer />
        <Image src="/assets/images/settings.svg" />
      </Flex>
      <Box maxH="50vh" overflowY="auto">
        <TagList>
          {[
            "Nextjs",
            "react",
            "javascript",
            "ruby",
            "ruby on rails",
            "css",
            "beginners",
            "html",
            "typescript"
          ]}
        </TagList>
      </Box>
    </Box>
  );
};

const Sidebar = (props) => {
  return (
    <Box as="aside" {...props}>
      <Links />
      <Tags />
    </Box>
  );
};

export default Sidebar;
