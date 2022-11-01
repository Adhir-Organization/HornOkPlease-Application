import { Box } from "native-base";

export default function DriverProfile() {
  return (
    <>
      <Box>
        <VStack space="3">
          {/* Image */}
          <Center>
            <Image
              source={{
                uri: "https://wallpaperaccess.com/full/317501.jpg",
              }}
              alt="Alternate Text"
              size="xs"
            />
            <Heading size={""}>John Doe</Heading>
          </Center>
        </VStack>
      </Box>
    </>
  );
}
