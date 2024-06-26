import { Redirect, Tabs } from "expo-router";
import React from "react";
import { Image, Text, View } from "react-native";

import { Loader } from "@/components";
import { useGlobalContext } from "@/context/GlobalProvider";
import { StatusBar } from "expo-status-bar";
import { icons } from "../../constants";

const TabIcon = ({ icon, color, name, focused }: any) => {
  return (
    <View className="items-center justify-center gap-2">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />
      <Text
        className={`${
          focused ? "font-psemibold" : "font-pregular"
        } text-white text-sm`}
      >
        {name}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  const { loading, isLogged }: any = useGlobalContext();

  if (!loading && !isLogged) return <Redirect href="/sign-in" />;
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#14b8a6",
          tabBarInactiveTintColor: "#cdcde0",
          tabBarStyle: {
            height: 84,
            backgroundColor: "#161622",
            borderTopColor: "#232533",
            borderTopWidth: 0,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.home}
                color={color}
                name="Home"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="bookmark"
          options={{
            title: "Bookmark",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.bookmark}
                color={color}
                name="Bookmark"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="create"
          options={{
            title: "Create",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.plus}
                color={color}
                name="Create"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.profile}
                color={color}
                name="Profile"
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>
      <Loader isLoading={loading} />
      <StatusBar backgroundColor="#161622" style="light" />
    </>
  );
};

export default TabsLayout;
