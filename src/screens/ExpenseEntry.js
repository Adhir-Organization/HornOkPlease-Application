import * as React from "react";
import {
  Box,
  Center,
  Input,
  Stack,
  Select,
  TextArea,
  VStack,
  Heading,
  Text,
  Image,
  HStack,
  ScrollView,
  IconButton,
  Button,
} from "native-base";
import HeroBox from "../components/contacts/HeroBox";

export default function ExpenseEntry({ }) {
  const [service, setService] = React.useState("");
  return (
    <Box safeArea>
      <Box background="#0058DB" padding="3">
        <Center>
          <Text fontSize="xl" color="white">
            Expense Entry
          </Text>
        </Center>
      </Box>
      <Box marginTop="6">
        <Stack space={4} w="75%" maxW="300px" mx="auto">
          <Box marginTop="3">
            <Text fontSize="md">Expense Name</Text>
            <Select
              minWidth="200"
              marginTop="2"
              accessibilityLabel="Choose Service"
              placeholder="Select Expense Name"
              fontSize="md"
              _selectedItem={{
                bg: "teal.600",
              }}
              mt={1}
              onValueChange={(itemValue) => setService(itemValue)}
            >
              <Select.Item label="Fuel" value="ux" />
              <Select.Item label="Driver Allowance" value="web" />
              <Select.Item label="Toll" value="cross" />
              <Select.Item label="Mamoon" value="ui" />
              <Select.Item label="Statutory" value="backend" />
              <Select.Item label="Tyre" value="backend" />
              <Select.Item label="Engine" value="backend" />
              <Select.Item label="Gearbox" value="backend" />
              <Select.Item label="Housing" value="backend" />
              <Select.Item label="Bodyworks" value="backend" />
              <Select.Item label="Overhead" value="backend" />
              <Select.Item label="Depreciation" value="backend" />
              <Select.Item label="Others" value="backend" />
            </Select>
          </Box>
          <Box>
            <Text fontSize="md">Expense Category</Text>
            <Select
              minWidth="200"
              marginTop="2"
              accessibilityLabel="Choose Service"
              placeholder="Select Expense Category"
              fontSize="md"
              _selectedItem={{
                bg: "teal.600",
              }}
              mt={1}
              onValueChange={(itemValue) => setService(itemValue)}
            >
              <Select.Item label="Direct" value="ux" />
              <Select.Item label="Preventive" value="web" />
            </Select>
          </Box>
          <Box>
            <Text fontSize="md">Amount</Text>
            <Input size="xs" placeholder="200" fontSize="md" marginTop="2" />
          </Box>
          <Box>
            <Text fontSize="md">Remark</Text>
            <Input
              size="xs"
              h="20"
              placeholder="Write your remark.."
              fontSize="md"
              marginTop="2"
            />
          </Box>
          <Box>
            <Text fontSize="md">Upload Receipt</Text>
            {/* <input type='file' id='multi' multiple /> */}
          </Box>
          {/* <Box>
                        <Box marginTop="1">
                            <Text marginTop="2">
                                <TextArea h="40" placeholder="Write Your Remark.." fontSize="md" w="75%" maxW="300" />
                            </Text>
                        </Box>
                    </Box> */}
          <Box flex="1" alignItems="center" marginTop="2">
            <Button marginY="10" size="lg" w="40" h="12">
              Submit
            </Button>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}
