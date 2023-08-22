import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screens/App/Home";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MenuCustomIcon } from "../components/MenuCustomIcon";
import { useTheme } from "styled-components";
import { Tickets } from "../screens/App/Tickets";
import { Favorites } from "../screens/App/Favorites";
import { UserInfo } from "../screens/App/UserInfo";
import { TicketInfo } from "../screens/App/TicketsBuy/TicketInfo";
import { SelectCity } from "../screens/App/SelectCity";
import { TicketPay } from "../screens/App/TicketsBuy/TicketPay";
import { TicketQRCode } from "../screens/App/Tickets/TicketQRCode";

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
        component={Home}
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
        name="Tickets"
        component={Tickets}
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
        component={Favorites}
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
        component={UserInfo}
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
      <Screen name="TicketInfo" component={TicketInfo} />
      <Screen name="TicketPay" component={TicketPay} />
      <Screen name="TicketQRCode" component={TicketQRCode} />
      <Screen name="SelectCity" component={SelectCity} />
    </Navigator>
  );
}
