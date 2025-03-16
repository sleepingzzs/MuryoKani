import { View, Text } from "react-native";
import React from "react";
import { Kanji, Radical, Vocabulary } from "@/components/Cards";

const Lessons = () => {
	return (
		<View className='flex-1 w-full flex-col gap-5'>
			{/* <Radical></Radical> */}
			{/* <Kanji /> */}
			<Vocabulary />
		</View>
	);
};

export default Lessons;
