import { Box } from "native-base";

export default function ProfileDataTab() {
  return (
    <>
      <Box flex={1}>
        {/* Icon */}
        <Box>
          {/* Title */}
          <Text fontSize="lg">Phone Number</Text>
          {/* Data */}
          <Text fontSize="xs">+91 1234567890</Text>
        </Box>
      </Box>
    </>
  );
}
