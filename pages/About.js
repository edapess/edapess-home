import { Container, Text } from "@chakra-ui/react";
import AboutBlocks from "../src/components/AboutBlocks";
import anauLogo from "../src/assets/anauLogo.png";
import dictionary from "../src/data/dictionary.json";

const About = () => {
  console.log(dictionary);
  return (
    <Container>
      <AboutBlocks
        title={dictionary.aboutScreen.university.universityTitle}
        description={dictionary.aboutScreen.university.universityDescription}
        imageSource={anauLogo}
        years={dictionary.aboutScreen.university.universityYears}
      />
    </Container>
  );
};

export default About;
