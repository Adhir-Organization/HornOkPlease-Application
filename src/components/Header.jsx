import { Box, Center, Text } from "native-base";
import React from "react";

export default function Header(props) {
  return (
    <Box background="#0058DB" padding="3">
      <Center>
        <Text fontSize="xl" color="white">
          {props.headerName}
        </Text>
      </Center>
    </Box>
  );
}
