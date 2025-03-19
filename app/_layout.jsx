import { Stack } from "expo-router";
import "./globals.css";
import { View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState, Suspense } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { SQLiteProvider } from "expo-sqlite";
import { loadDB } from "@/utils/database";
SplashScreen.preventAutoHideAsync();
export default function RootLayout() {
	const [db, setDb] = useState(false);
	useEffect(() => {
		(async () => {
			await loadDB()
				.then(() => setDb(true))
				.catch((e) => console.error(e));
			await SplashScreen.hideAsync();
		})();
	}, [db]);

	return (
		<Suspense fallback={<View className='flex-1 bg-bg'></View>}>
			<SQLiteProvider databaseName='muryokani.db' useSuspense>
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
			</SQLiteProvider>
		</Suspense>
	);
}
