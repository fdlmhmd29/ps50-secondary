import React from "react";
import { Box, Text, Heading } from "theme-ui";

export default function SectionHeaderTestimonial({ title, slogan, isWhite }) {
  return (
    <Box sx={{ variant: "sectionHeader" }}>
      <Text
        as="p"
        sx={{
          variant: "sectionHeader.subTitle",
          color: "text",
          fontWeight: "bold",
        }}
      >
        {slogan}
      </Text>
      <Heading
        as="h2"
        sx={{
          variant: "sectionHeader.title",
          color: "primary",
        }}
      >
        {title}
      </Heading>
    </Box>
  );
}
