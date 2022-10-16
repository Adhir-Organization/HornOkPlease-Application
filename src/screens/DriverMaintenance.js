import { Box, HStack, VStack, Input } from "native-base";

import DatePicker from "../components/maintenance/DatePicker";
import IssueSelector from "../components/maintenance/IssueSelector";

export default function DriverMaintenance(navigation) {
  return (
    <>
      <Box flex={1} safeArea>
        <HStack space="3" alignItems="center">
          {/* Date Picker */}
          <Box>
            <DatePicker />
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
            <DatePicker />
          </Box>
          {/* Garage Name */}
          <Box>
            <Input placeholder="Default Input" />
          </Box>

          {/* Remark Audio Record */}
          <Box></Box>
          {/* Submit Button */}
          <Box></Box>
        </HStack>
      </Box>
    </>
  );
}
