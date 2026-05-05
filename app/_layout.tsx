import { ThemeProvider } from "@/hooks/useTheme";
import { Stack } from "expo-router";
import { StackScreen } from "react-native-screens";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <Stack screenOptions={{ headerShown: false }}> 
        <Stack.Screen name="(tabs)" options={ {title: "Home"} }/>
      </Stack>
    </ThemeProvider>   
);
}
