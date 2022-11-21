import { Center, Select, FormControl } from "native-base";
import { useState } from "react";

export default function IssueSelector() {
  const [issue, setIssue] = useState("");

  return (
    <Center>
      <FormControl isRequired isInvalid>
        <FormControl.Label>Select Issue</FormControl.Label>

        <Select
          placeholder="Select Issue"
          selectedValue={issue}
          accessibilityLabel="Select Issue"
          _selectedItem={{
            bg: "blue.200",
          }}
          onValueChange={(itemValue) => setIssue(itemValue)}
        >
          <Select.Item label="Issue 1" value="js" />
          <Select.Item label="TypeScript" value="ts" />
          <Select.Item label="C" value="c" />
          <Select.Item label="Python" value="py" />
          <Select.Item label="Java" value="java" />
        </Select>
      </FormControl>
    </Center>
  );
}
