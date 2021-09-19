import React from "react";
import { Box, Text, Heading } from "theme-ui";

export default function SectionHeader({ title, description }) {
  return (
    <Box sx={{ variant: "sectionHeader" }}>
      <Heading
        as="h2"
        sx={{
          variant: "sectionHeader.title",
        }}
      >
        {title}
      </Heading>
      <Text sx={styles.description} as="p">
        {description}
      </Text>
    </Box>
  );
}

const styles = {
  description: {
    color: "text",
    variant: "sectionHeader.description",
  },
};
