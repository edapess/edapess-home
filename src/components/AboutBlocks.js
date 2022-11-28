import { Box, Heading, Text, useColorMode } from "@chakra-ui/react";
import Image from "next/image";

const AboutBlocks = ({ title, description, imageSource, years }) => {
  const { colorMode } = useColorMode();

  return (
    <Box
      backgroundColor={colorMode === "dark" ? "orangeLight" : "backgroundDark"}
      as="div"
      width={300}
      height={300}
      display="flex"
      flexDirection={"column"}
      justifyContent="space-between"
      alignItems={"center"}
      borderRadius="20"
      padding={10}
    >
      <Box>
        <Heading textAlign={"center"} as="h3" variant={"h3-heading"}>
          {title}
        </Heading>
      </Box>
      <Box>
        <Text textAlign={"center"} variant={"aboutParagraph"}>
          {description}
        </Text>
        <Text textAlign={"center"} variant={"aboutParagraph"}>
          {years}
        </Text>
      </Box>

      <Box
        backgroundColor={"backgroundDark"}
        display={"flex"}
        justifyContent="center"
        alignItems={"center"}
        width="20%"
        height="20%"
        borderRadius={30}
      >
        <Image src={imageSource} alt="logo" layout="intrinsic" />
      </Box>
    </Box>
  );
};

export default AboutBlocks;
