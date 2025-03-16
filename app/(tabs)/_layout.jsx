import { Tabs } from "expo-router";
import React from "react";
import { KeyboardAvoidingView } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
export default function TabLayout() {
	return (
		<Tabs
			screenOptions={{
				headerShown: false,
				tabBarStyle: {
					backgroundColor: "#161616",
					borderTopWidth: 0,
					height: 75,
					shadowOpacity: 0,
					shadowColor: "transparent",
				},
				tabBarActiveTintColor: "#ededed",
				tabBarHideOnKeyboard: true,
				tabBarItemStyle: {
					alignItems: "center",
					flexDirection: "row",
				},
			}}
		>
			<Tabs.Screen
				name='index'
				options={{
					title: "Home",
					tabBarIcon: ({ color, focused }) => (
						<Ionicons
							name='home'
							size={24}
							color={focused ? "#ededed" : "#ffffff99"}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name='library'
				options={{
					title: "Library",
					tabBarIcon: ({ color, focused }) => (
						<Ionicons
							name='library'
							size={24}
							color={focused ? "#ededed" : "#ffffff99"}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name='settings'
				options={{
					title: "Settings",
					tabBarIcon: ({ color, focused }) => (
						<Ionicons
							name='settings'
							size={24}
							color={focused ? "#ededed" : "#ffffff99"}
						/>
					),
				}}
			/>
		</Tabs>
	);
}
