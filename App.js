import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import "react-native-gesture-handler";

//import app screens
import { SignUpScreen } from "./screens";
import { ScanScreen } from "./screens";

//import navigation
import { useFonts } from "expo-font";
import Tabs from "./navigation/tabs";

//define app theme
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent",
  },
};

//stack navigator
const Stack = createStackNavigator();

//app logic with navigation stack
const App = () => {
  //load required fonts
  const [loaded] = useFonts({
    "Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={"SignUpScreen"}
      >
        <Stack.Screen name="HomeScreen" component={Tabs} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="ScanScreen" component={ScanScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
