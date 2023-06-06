import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

const LandingSection = () => (
    <FullScreenSection
        justifyContent="center"
        alignItems="center"
        isDarkBackground
        backgroundColor="#2A4365"
    >
     <VStack spacing={4} alignItems="center">
         <Avatar
             size="x1"
             src="https://i.pravatar.cc/150?img=7"
             alt="User Avatar"
          />
         <Heading as="h1" size="x1" color="white">
             {greeting}
         </Heading>
         <Heading as="h2" size="lg" color="white">
             {bio1}
             <br />
             {bio2}
         </Heading>
     </VStack>
    </FullScreenSection>
);

export default LandingSection;
