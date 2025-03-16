import { View, Text, ScrollView } from "react-native";

export function PrimaryText({ children, className = "" }) {
	return <Text className={"text-primary " + className}>{children}</Text>;
}

export function SecondaryText({ children, className = "" }) {
	return <Text className={"text-secondary " + className}>{children}</Text>;
}
export function Radical({ children, className = "" }) {
	return <Text className={"text-blue-400 " + className}>{children}</Text>;
}
export function Kani({ children, className = "" }) {
	return <Text className={"text-yellow-400 " + className}>{children}</Text>;
}
export function Vocabulary({ children, className = "" }) {
	return <Text className={"text-green-400 " + className}>{children}</Text>;
}
export function Box({ children, className = "" }) {
	return (
		<View
			className={
				"p-5 border-border bg-box border rounded-md w-full " + className
			}
		>
			{children}
		</View>
	);
}

export function Scroll({ children, className = "" }) {
	return (
		<ScrollView
			className={"flex-1 w-full bg-bg flex-col" + className}
			contentContainerStyle={{
				gap: 20,
				alignItems: "center",
			}}
			showsVerticalScrollIndicator={false}
		>
			{children}
		</ScrollView>
	);
}
