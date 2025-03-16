import { Stack } from "expo-router";
import "./globals.css";
import { View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
// import { setupDatabases } from "@/utils/database";
SplashScreen.preventAutoHideAsync();
export default function RootLayout() {
	useEffect(() => {
		(async () => {
			// await setupDatabases();
			await SplashScreen.hideAsync();
		})();
	}, []);

	return (
		<SafeAreaView
			style={{ flex: 1, backgroundColor: "#161616" }}
			edges={["bottom"]}
		>
			<View className='flex-1 bg-[#161616]'>
				<Stack
					screenOptions={{
						headerShown: false,
						contentStyle: {
							backgroundColor: "#161616",
							paddingHorizontal: 15,
							paddingTop: 15,
						},
						animation: "slide_from_right",
					}}
				>
					<Stack.Screen
						name='(tabs)'
						options={{ headerShown: false }}
					/>
				</Stack>
			</View>
		</SafeAreaView>
	);
}
