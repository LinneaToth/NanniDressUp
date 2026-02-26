import { HachiMaruPop_400Regular } from "@expo-google-fonts/hachi-maru-pop/400Regular";
import { useFonts } from "@expo-google-fonts/hachi-maru-pop/useFonts";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";

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
          tabBarActiveTintColor: "#FFF",
          headerStyle: {
            backgroundColor: "#6a4c93",
          },
          headerShadowVisible: false,
          headerTintColor: "#fff",
          tabBarStyle: {
            backgroundColor: "#6a4c93",
          },
        }}>
        <Tabs.Screen
          name="index"
          options={{
            title: "Nanni Dress Up",
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
                size={24}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="about"
          options={{
            title: "About",
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={
                  focused ? "information-circle" : "information-circle-outline"
                }
                color={color}
                size={24}
              />
            ),
          }}
        />
      </Tabs>
    );
  }
}
