import { View } from "react-native";

const stageColors = {
	bronze: "#60A5FA",
	silver: "#4ADE80",
	locked: "#F87171",
};

export default function LevelChart({ stages }) {
	const total = Object.values(stages).reduce((acc, val) => acc + val, 0);

	return (
		<View
			style={{
				width: "100%",
				height: 12,
				borderRadius: 9999,
				overflow: "hidden",
				flexDirection: "row",
			}}
		>
			{Object.entries(stages).map(([stage, count], index) => {
				const percentage = (count / total) * 100;
				return (
					<View
						key={index}
						style={{
							width: `${percentage}%`,
							height: "100%",
							backgroundColor: stageColors[stage] || "#000",
						}}
					/>
				);
			})}
		</View>
	);
}
