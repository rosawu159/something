import {
  Heading,
  VStack,
  Container,
  Text,
  Button,
  chakra,
  Box,
} from "@chakra-ui/react";

export default function HomeHero() {
  return (
    <Box height="100vh" position="relative">
      <Box
        sx={{
          video: {
            position: "absolute",
            zIndex: -1,
            height: "100%",
            width: "100%",
            objectFit: "cover",
            objectPosition: "center top",
            top: 0,
            left: 0,
          },
        }}
      >
        <video muted={true} autoPlay={true} loop={true}>
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-friends-playing-monopoly-5235-large.mp4"
            type="video/mp4"
          ></source>
        </video>
      </Box>
      <Box
        height="100%"
        background="rgba(29, 29, 36, 0.5)"
        backdropFilter="blur(3px)"
      >
        <Container maxW="container.lg" height="100%">
          <VStack
            alignItems="flex-start"
            justifyContent="center"
            flexDir="column"
            height="100%"
            spacing={6}
          >
            <Heading
              size="4xl"
              textShadow="0px 0px 15px rgba(255, 255, 255, 0.8)"
              color="#fff"
              fontWeight="500"
              lineHeight="base"
            >
              Unlock Your Imagination
            </Heading>
            <Button variant="solid-primary">START NOW</Button>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
}
