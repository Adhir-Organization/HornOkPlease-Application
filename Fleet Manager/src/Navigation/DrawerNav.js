import React from "react";

import { Button, View } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import Driver from "../Screens/Driver";
import ExpenseSummary from "../../src/Screens/ExpenseSummary";
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="opendrawer"
        onPress={() => props.navigation.openDrawer()}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>
  );
}
const DrawerNav = () => {
  const Drawer = createDrawerNavigator();
  return (
    <View>
      <Drawer.Navigator
      // drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen name="Driver" component={Driver} />
        <Drawer.Screen name="ExpenseSummary" component={ExpenseSummary} />
      </Drawer.Navigator>
    </View>
  );
};

export default DrawerNav;
