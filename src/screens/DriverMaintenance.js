import { Box, VStack, Input } from "native-base";

import DateSelector from "../components/maintenance/DateSelector";
import IssueSelector from "../components/maintenance/IssueSelector";

export default function DriverMaintenance(navigation) {
  return (
    <>
      <Box flex={1} safeArea>
        <VStack space="3" alignItems="center">
          {/* Date Picker */}
          <Box>
            <DateSelector />
          </Box>
          {/* Select Issue */}
          <Box>
            <IssueSelector />
          </Box>
          {/* Amount Input */}
          <Box>
            <Input placeholder="Enter Amount" />
          </Box>
          {/* Done date picker */}
          <Box>
            <DateSelector />
          </Box>
          {/* Garage Name */}
          <Box>
            <Input placeholder="Default Input" />
          </Box>

          {/* Remark Audio Record */}
          <Box></Box>
          {/* Submit Button */}
          <Box></Box>
        </VStack>
      </Box>
    </>
  );
}
