import {Box, Heading, Image, Text, VStack, HStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
    return (
        <Box p={4} bg="white" boxShadow="md"  borderRadius="md">
            <VStack spacing={4} alignItems="flex-start">
            <Image
                src={imageSrc}
                alt={title}
                borderRadius="md"
            />
            <Heading color="black" as="h3" size="md">
                {title}
            </Heading>
            <Text color="gray.600">{description}</Text>
                <HStack spacing={2}>
                    <Text color="black">See more</Text>
                    <FontAwesomeIcon color="black" icon={faArrowRight} size="1x" />
                </HStack>
            </VStack>
        </Box>
    );
};
export default Card;
