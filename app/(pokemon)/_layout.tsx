import { FontAwesome } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tabs.Screen
        name="pikachu"
        options={{
          tabBarLabel: "นก",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="bolt" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="charmander"
        options={{
          tabBarLabel: "หน้าหลัก",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="fire" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="Ivysour"
        options={{
          tabBarLabel: "Ivysour",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="leaf" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
