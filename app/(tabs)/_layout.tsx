import { HachiMaruPop_400Regular } from "@expo-google-fonts/hachi-maru-pop/400Regular";
import { useFonts } from "@expo-google-fonts/hachi-maru-pop/useFonts";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";

//read this: https://docs.expo.dev/router/advanced/custom-tabs/

export default function TabLayout() {
  let [fontsLoaded] = useFonts({
    HachiMaruPop_400Regular,
  });

  let fontSize = 28;

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#FFF",
          headerStyle: {
            backgroundColor: "#6a4c93",
          },
          headerShadowVisible: false,
          headerTintColor: "#fff",
          tabBarStyle: {
            backgroundColor: "#6a4c93",
            height: 100,
          },
        }}>
        <Tabs.Screen
          name="index"
          options={{
            title: "DressUp",
            headerShown: true,
            headerStyle: {
              backgroundColor: "#6A4C93",
            },
            headerTitleAlign: "center",
            headerTitleStyle: {
              alignSelf: "center",
              textAlign: "center",
              fontFamily: "HachiMaruPop_400Regular",
              fontSize: fontSize,
            },
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? "home-sharp" : "home-outline"}
                color={color}
                size={50}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="gallery"
          options={{
            title: "Gallery",
            headerStyle: {
              backgroundColor: "#6A4C93",
            },
            headerTitleAlign: "center",
            headerTitleStyle: {
              alignSelf: "center",
              textAlign: "center",
              fontFamily: "HachiMaruPop_400Regular",
              fontSize: fontSize,
            },
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? "book-sharp" : "book-outline"}
                color={color}
                size={50}
              />
            ),
          }}
        />
      </Tabs>
    );
  }
}
