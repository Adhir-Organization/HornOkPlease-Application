import { View, Text } from "react-native";
import React from "react";
import Draw from "../../Component/Dashboard/Draw";
import { SafeAreaProvider } from "react-native-safe-area-context";
const NotificationFleet = () => {
  return (
    <SafeAreaProvider>
      <Draw />
    </SafeAreaProvider>
  );
};

export default NotificationFleet;
