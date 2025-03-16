import { useState } from "react";
import { TextInput, View, Text } from "react-native";
import wanakana from "wanakana";
import { PrimaryText, Radical } from "@/components/ThemedText";
export function Review() {
	const [text, setText] = useState("");

	const handleChange = (input) => {
		setText(wanakana.toHiragana(input.trim(), { IMEMode: true }));
	};
	return (
		<View style={{ gap: 20 }}>
			<PrimaryText className='self-center'>0/15</PrimaryText>
			<View className='border border-[#242424] bg-[#1C1C1C] rounded-md items-center justify-center py-5'>
				<Radical className='text-6xl text-center leading-[80px]'>
					白
				</Radical>
			</View>

			<Text className='text-center rounded-md bg-white py-1'>
				Radical Meaning
			</Text>
			<TextInput
				className='border border-border bg-box rounded-md py-2 text-2xl text-center placeholder-gray-500'
				placeholder='かな'
				style={{ color: "#EDEDED" }}
				placeholderTextColor='#FFFFFF99'
				cursorColor='white'
				selectionColor='white'
				value={text}
				onChangeText={handleChange}
				multiline={true}
				numberOfLines={1}
				autoFocus
				importantForAutofill='no'
			/>

			<View className='flex flex-row justify-between mt-5'>
				<PrimaryText>Don't know</PrimaryText>
				<PrimaryText>Submit</PrimaryText>
			</View>
		</View>
	);
}
