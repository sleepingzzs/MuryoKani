import { useState } from "react";
import { TextInput, View, Text } from "react-native";
import wanakana from "wanakana";
import { PrimaryText, Radical } from "@/components/ThemedText";
import { Review } from "@/components/Review";

const reviews = () => {
	return (
		<View className='w-full'>
			<Review></Review>
		</View>
	);
};

export default reviews;
