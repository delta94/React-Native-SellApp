import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListingScreen from "../screens/ListingScreen";
import ListingEditScreen from "../screens/ListingEditScreen";
import AccountScreen from "../screens/AccountScreen";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Listings" component={ListingScreen} />
      <Tab.Screen name="ListingsEdit" component={ListingEditScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
