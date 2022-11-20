import React from "react"
import { Text } from "@chakra-ui/react";
import dictionary from '../../data/dictionary.json'
const Story = () => {
    return (
        <Text
        textAlign='center'
        lineHeight={2}
        variant='paragraph'
        >
          {dictionary.homepage.about}
        </Text> 
    )
}

export default Story;
