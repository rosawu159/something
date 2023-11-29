import Head from "next/head";
import { Box } from "@chakra-ui/react";
import HomeHero from "./HomeHero";


export default function Home({}) {

  return (
    <>
      <Box as="main">
        <HomeHero />
      </Box>
    </>
  );
}