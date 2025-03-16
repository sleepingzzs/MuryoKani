import { Text } from "react-native";
export function PrimaryText({ children, className = "" }) {
	return <Text className={"text-[#EDEDED] " + className}>{children}</Text>;
}

export function SecondaryText({ children, className = "" }) {
	return (
		<Text
			className={className}
			style={{
				color: "#FFFFFF99",
			}}
		>
			{children}
		</Text>
	);
}

export function Radical({ children, className = "" }) {
	return (
		<Text
			className={className}
			style={{
				color: "#63b3ed",
			}}
		>
			{children}
		</Text>
	);
}
