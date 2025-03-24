import { View, Text } from "react-native";
import { useState, useCallback } from "react";
import { useFocusEffect } from "expo-router";
import { Kanji, Radical, Vocabulary } from "@/components/Cards";
import { useSQLiteContext } from "expo-sqlite";

const Lessons = () => {
	const db = useSQLiteContext();
	const [data, setData] = useState({
		level: 1,
		lessons: 10,
		reviews: 0,
		upcoming: 0,
		bronze: 0,
		silver: 0,
		gold: 0,
		platinum: 0,
		diamond: 0,
		passed: 0,
		radicals: 0,
		kanji: 0,
	});
	useFocusEffect(
		useCallback(() => {
			(async () => {
				try {
					// const res = await db.getAllAsync();
					// setData(res[0]);
					// console.log("Tables in DB:", res);
				} catch (error) {
					console.error("DB Query Error:", error);
				}
			})();
		}, [db])
	);

	return (
		<View className='flex-1 w-full flex-col gap-5'>
			{/* <Radical></Radical> */}
			{/* <Kanji /> */}
			<Vocabulary />
		</View>
	);
};

export default Lessons;
