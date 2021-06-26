import {
  Box,
  Flex,
  Link,
  Heading,
  Text,
  Spacer,
  VStack
} from "@chakra-ui/react";

function ListHeading() {
  return (
    <Box borderBottom="1px solid #E2E4E6">
      <Flex align="center" p="3">
        <Heading fontSize="1.25rem">Listings</Heading>
        <Spacer />
        <Link fontSize="14px" color="#3b49df" fontWeight="medium">
          See all
        </Link>
      </Flex>
    </Box>
  );
}

function HashTagHeading() {
  return (
    <Box borderBottom="1px solid #E2E4E6" p="3">
      <Heading fontSize="20px">#news</Heading>
    </Box>
  );
}

const List = ({ headingType }) => {
  return (
    <Box as="section" bg="white" borderRadius="md" border="1px solid #E2E4E6">
      {headingType === "hashtag" ? <HashTagHeading /> : <ListHeading />}
      <Box borderBottom="1px solid #E2E4E6">
        <Box p="3">
          <Text>Javascript developer (~ 2 YOE) looking for remote work</Text>
          <Text mt="2" color="#4d5760" fontSize="14px">
            forhire
          </Text>
        </Box>
      </Box>
      <Box borderBottom="1px solid #E2E4E6">
        <Box p="3">
          <Text>
            Building Progressive Web Apps - Hands-on Workshop - 4/29 1pm ET (GMT
            -4)
          </Text>
          <Text mt="2" color="#4d5760" fontSize="14px">
            events
          </Text>
        </Box>
      </Box>
      <Box borderBottom="1px solid #E2E4E6">
        <Box p="3">
          <Text>
            Want to know how a JavaScript framework works under the hood?
          </Text>
          <Text mt="2" color="#4d5760" fontSize="14px">
            education
          </Text>
        </Box>
      </Box>
      <Box>
        <Box p="3">
          <Text>Pair Programming with Jhey</Text>
          <Text mt="2" color="#4d5760" fontSize="14px">
            events
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

const Listing = (props) => {
  return (
    <VStack as="aside" spacing="4" {...props}>
      <List headingType="link" />
      <List headingType="hashtag" />
    </VStack>
  );
};

export default Listing;
