import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	ScrollView,
} from "react-native";
import React from "react";
import { PrimaryText, SecondaryText, Scroll, Box } from "@/components/Themes";

const library = () => {
	return (
		<Scroll>
			<TextInput
				className='border border-secondary bg-primary text-bg rounded-md px-5 py-4 w-full text-lg'
				placeholder='Search'
				cursorColor='black'
				autoFocus
			/>
			<SecondaryText className='self-center font-semibold'>
				Select a level
			</SecondaryText>
			<View className='flex-row flex-wrap w-full'>
				{Array.from({ length: 60 }, (_, i) => i + 1).map((num) => (
					<TouchableOpacity
						key={num}
						activeOpacity={0.6}
						className='w-[10%] aspect-square flex items-center justify-center bg-[#242424] border border-[#161616] -ml-[0.01px] -mt-[0.5px]'
					>
						<PrimaryText>{num}</PrimaryText>
					</TouchableOpacity>
				))}
			</View>
		</Scroll>
	);
};

export default library;
