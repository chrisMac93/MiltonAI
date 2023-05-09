import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "react-native";

import { ConversationProvider } from "./src/components/ConversationContext";
import IndexPage from "./src/IndexPage";
import TextForm from "./src/components/TextForm";
import AboutMILTON from "./src/components/AboutMILTON";
import SplashScreen from "./src/components/SplashScreen"; // Import SplashScreen component

const Stack = createStackNavigator();

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  const onAnimationEnd = () => {
    setShowSplash(false);
  };

  if (showSplash) {
    return <SplashScreen onAnimationEnd={onAnimationEnd} />;
  }

  return (
    <>
      <StatusBar backgroundColor="#1a1a1a" barStyle="light-content" />
      <ConversationProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="IndexPage"
            screenOptions={{
              headerShown: false,
              animationEnabled: false,
            }}
          >
            <Stack.Screen name="IndexPage" component={IndexPage} />
            <Stack.Screen name="TextForm" component={TextForm} />
            <Stack.Screen name="AboutMILTON" component={AboutMILTON} />
          </Stack.Navigator>
        </NavigationContainer>
      </ConversationProvider>
    </>
  );
};

export default App;
