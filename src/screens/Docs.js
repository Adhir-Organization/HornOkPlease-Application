import * as React from "react";
import { Dimensions, StatusBar, Animated, Pressable } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import { NativeBaseProvider, Box, VStack, Button } from "native-base";
import { useColorModeValue } from "native-base";
import LR from "../components/Docs/LR";
import ConsigmentButton from "../components/Docs/ConsignmentButton";

//constant declare
const FirstRoute = () => (
  <>
    <VStack space={2}>
      {/* Rendered static : (Dynmaic when fetched from api) */}
      <ConsigmentButton />
      <ConsigmentButton />
      <ConsigmentButton />
    </VStack>
    <Button mx="32" my="8">
      Upload
    </Button>
  </>
);

const SecondRoute = () => (
  <>
    <LR DocsName={"Document 1"} />
    <LR DocsName={"Document 2"} />
    <LR DocsName={"Document 3"} />
    <LR DocsName={"Document 4"} />
    <LR DocsName={"Document 5"} />
  </>
);

const initialLayout = {
  width: Dimensions.get("screen").width,
};
const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

function Example() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: "first",
      title: "Consignment",
    },
    {
      key: "second",
      title: "LR",
    },
  ]);

  const renderTabBar = (props) => {
    const inputRange = props.navigationState.routes.map((x, i) => i);
    return (
      <Box flexDirection="row" backgroundColor={"gray.200"}>
        {props.navigationState.routes.map((route, i) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map((inputIndex) =>
              inputIndex === i ? 1 : 0.5
            ),
          });
          const color =
            index === i
              ? useColorModeValue("#000", "#e5e5e5")
              : useColorModeValue("#1f2937", "#a1a1aa");
          const borderColor =
            index === i
              ? "cyan.500"
              : useColorModeValue("coolGray.200", "gray.400");
          return (
            <Box
              key={i}
              borderBottomWidth="3"
              borderColor={borderColor}
              alignItems="center"
              flex={1}
              p="4"
              cursor="pointer"
            >
              <Pressable
                onPress={() => {
                  setIndex(i);
                  {
                    route.title;
                  }
                }}
              >
                <Animated.Text
                  style={{
                    color,
                  }}
                >
                  {route.title}
                </Animated.Text>
              </Pressable>
            </Box>
          );
        })}
      </Box>
    );
  };

  return (
    <TabView
      navigationState={{
        index,
        routes,
      }}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      style={{
        marginTop: StatusBar.currentHeight,
      }}
    />
  );
}

export default () => {
  return (
    <NativeBaseProvider>
      <Box safeArea flex={1}>
        {/* <Header headerName={"Documents"} /> */}
        <Example />
      </Box>
    </NativeBaseProvider>
  );
};
