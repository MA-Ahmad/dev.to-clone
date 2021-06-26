import {
  Box,
  Flex,
  Link,
  Heading,
  Text,
  Spacer,
  VStack,
  Skeleton
} from "@chakra-ui/react";
import useSWR from "swr";
import { useState } from "react";

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

const fetcher = url => fetch(url).then(res => res.json());

const List = () => {
  const { data, error } = useSWR("https://dev.to/api/listings", fetcher);

  if (error) return <Box>failed to load</Box>;
  if (!data)
    return (
      <Box as="section" bg="white" borderRadius="md" border="1px solid #E2E4E6" width="100%">
        <ListHeading />
        {[1, 2, 3, 4, 5].map(id => {
          return (
            <Box borderBottom="1px solid #E2E4E6" width="100%" p="3">
              <Skeleton height="15vh" borderRadius="5px" width="100%" />
            </Box>
          );
        })}
      </Box>
    );

  return (
    <Box as="section" bg="white" borderRadius="md" border="1px solid #E2E4E6">
      <ListHeading />
      {data.slice(0, 7).map(list => (
        <ListBox title={list.title} category={list.category} slug={list.slug} />
      ))}
    </Box>
  );
};

const ListBox = ({ title, category, slug }) => {
  return (
    <Link
      href={`https://dev.to/listings/${category}/${slug}`}
      _hover={{ textDecoration: "none", color: "blue" }}
      isExternal
    >
      <Box borderBottom="1px solid #E2E4E6" _hover={{ bg: "gray.50" }}>
        <Box p="3">
          <Text>{title}</Text>
          <Text mt="2" color="#4d5760" fontSize="14px">
            {category}
          </Text>
        </Box>
      </Box>
    </Link>
  );
};

const News = () => {
  return (
    <Box as="section" bg="white" borderRadius="md" border="1px solid #E2E4E6">
      <HashTagHeading />
      {[
        {
          title: "Javascript developer (~ 2 YOE) looking for remote work",
          category: "events",
          slug: ""
        },
        {
          title:
            "Want to know how a JavaScript framework works under the hood?",
          category: "education",
          slug: ""
        },
        { title: "Pair Programming with Jhey", category: "events", slug: "" }
      ].map(news => (
        <ListBox title={news.title} category={news.category} />
      ))}
    </Box>
  );
};

const Listing = props => {
  return (
    <VStack as="aside" spacing="4" {...props}>
      <List />
      <News />
    </VStack>
  );
};

export default Listing;
