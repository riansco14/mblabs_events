import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Dashboard } from "../screens/App/Dashboard";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MenuCustomIcon } from "../components/MenuCustomIcon";
import { useTheme } from "styled-components";

const { Navigator, Screen } = createStackNavigator();

const Tab = createBottomTabNavigator();

function BottomTabs() {
  const theme = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: theme.colors.menu_active,
        tabBarInactiveTintColor: theme.colors.menu_inactive,
        tabBarStyle: {backgroundColor: theme.colors.font_light},
        
      }}
      
    >

      <Tab.Screen
        name="Home"
        component={Dashboard}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MenuCustomIcon
              color={color}
              name="home"
              width={size}
              height={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Ticket"
        component={Dashboard}
        options={{
          tabBarIcon: ({ color, focused, size }) => (
            <MenuCustomIcon
              color={color}
              name="ticket"
              width={size}
              height={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Dashboard}
        options={{
          tabBarIcon: ({ color, focused, size }) => (
            <MenuCustomIcon
              color={color}
              name="heart"
              width={size}
              height={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="UserInfo"
        component={Dashboard}
        options={{
          tabBarIcon: ({ color, focused, size }) => (
            <MenuCustomIcon
              color={color}
              name="user"
              width={size}
              height={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="BottomTabs" component={BottomTabs} />
    </Navigator>
  );
}
