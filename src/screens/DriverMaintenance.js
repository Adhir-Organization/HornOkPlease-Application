import {
  Box,
  VStack,
  Input,
  Button,
  Text,
  HStack,
  Pressable,
  FormControl,
} from "native-base";
import IssueSelector from "../components/maintenance/IssueSelector";
import DateSelector from "../components/maintenance/DateSelector";
import { useState } from "react";

export default function DriverMaintenance(navigation) {
  const [todayDate, setTodayDate] = useState();
  const [doneDate, setDoneDate] = useState();

  return (
    <>
      <Box flex="1" safeArea>
        <Box p={5}>
          <FormControl isRequired isInvalid>
            <VStack space="5">
              {/* Date Picker */}
              <DateSelector />
              {/* Select Issue */}
              <Box>
                <IssueSelector />
              </Box>
              {/* Amount Input */}
              <Box>
                <FormControl.Label>Enter Amount</FormControl.Label>
                <Input placeholder="5000" />
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
          </FormControl>
        </Box>
      </Box>
    </>
  );
}
