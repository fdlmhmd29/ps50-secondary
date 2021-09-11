import React from "react";
import { Box, Text, Heading } from "theme-ui";

export default function SectionHeaderWorkflow({ title, slogan, isWhite }) {
  return (
    <Box sx={{ variant: "sectionHeader" }}>
      <Text
        as="p"
        sx={{
          variant: "sectionHeader.subTitle",
          color: "text_secondary",
          fontWeight: "bold",
        }}
      >
        {slogan}
      </Text>
      <Heading
        as="h2"
        sx={{
          variant: "sectionHeader.title",
          color: "text_secondary",
        }}
      >
        {title}
      </Heading>
    </Box>
  );
}
