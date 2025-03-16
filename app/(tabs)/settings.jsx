import { View, Text, ScrollView, Switch } from "react-native";
import { useState } from "react";
import { PrimaryText, SecondaryText, Scroll, Box } from "@/components/Themes";
const settings = () => {
	const [isEnabled, setIsEnabled] = useState(false);
	const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
	return (
		<Scroll>
			<SecondaryText className='font-semibold'>App</SecondaryText>
			<Box className='gap-5'>
				<View className='flex-col '>
					<View className='flex-row justify-between items-center w-full'>
						<PrimaryText className='text-lg'>
							Ignore typos
						</PrimaryText>
						<Switch
							trackColor={{ false: "#767577", true: "#81b0ff" }}
							thumbColor={false ? "#f5dd4b" : "#f4f3f4"}
							onValueChange={toggleSwitch}
							value={isEnabled}
						/>
					</View>
					<View className='flex-row justify-between items-center w-full'>
						<PrimaryText className='text-lg'>
							Disable incognito keyboard
						</PrimaryText>
						<Switch
							trackColor={{ false: "#767577", true: "#81b0ff" }}
							thumbColor={false ? "#f5dd4b" : "#f4f3f4"}
							ios_backgroundColor='#3e3e3e'
							onValueChange={toggleSwitch}
							value={isEnabled}
						/>
					</View>
				</View>
			</Box>
		</Scroll>
	);
};

export default settings;
