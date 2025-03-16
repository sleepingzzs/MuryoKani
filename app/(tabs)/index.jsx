import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { PrimaryText, SecondaryText, Scroll, Box } from "@/components/Themes";
import LevelChart from "@/components/LevelChart";
export default function Home() {
	const Lessons = 5;
	const Reviews = 10;
	const router = useRouter();
	const stageData = { bronze: 2.5, silver: 2.5, locked: 2.5 };
	return (
		<Scroll>
			<View className='flex flex-row gap-5 '>
				<PrimaryText>Level 1</PrimaryText>
				<PrimaryText>95.6%</PrimaryText>
			</View>
			<Box className='flex-col gap-1'>
				<SecondaryText>Available</SecondaryText>
				<View className='flex flex-row gap-2'>
					<PrimaryText className='text-3xl font-semibold'>
						Lessons
					</PrimaryText>
					<Text className='text-black bg-white rounded-full self-center px-2'>
						{Lessons == 0 && "Done!"}
						{Lessons > 0 && Lessons}
					</Text>
				</View>
				<View className='mt-5'></View>
				<SecondaryText>
					{Lessons == 0 &&
						"You've completed all your lessons! Keep doing your reviews to unlock more lessons."}
					{Lessons > 0 && (
						<TouchableOpacity
							onPress={() => router.push("/lessons")}
							activeOpacity={0.8}
							className='rounded-md bg-white p-2 text-black w-full'
						>
							<Text className='text-center'>Start Lessons</Text>
						</TouchableOpacity>
					)}
				</SecondaryText>
			</Box>
			<Box className='flex-col gap-1'>
				<SecondaryText>Available</SecondaryText>
				<View className='flex flex-row gap-2'>
					<PrimaryText className='text-3xl font-semibold'>
						Reviews
					</PrimaryText>
					<Text className='text-black bg-white rounded-full self-center px-2'>
						{Reviews == 0 && "None!"}
						{Reviews > 0 && Reviews}
					</Text>
				</View>
				<View className='mt-5'></View>
				<SecondaryText>
					{Reviews == 0 &&
						"You've completed all your reviews for now! You have 23 reviews upcoming in the next 24 hours."}
					{Reviews > 0 && (
						<TouchableOpacity
							onPress={() => router.push("/reviews")}
							activeOpacity={0.8}
							className='rounded-md bg-white p-2 text-black w-full'
						>
							<Text className='text-center'>Start Reviews</Text>
						</TouchableOpacity>
					)}
				</SecondaryText>
			</Box>

			<View className='flex-row flex-wrap -mx-1 -my-1'>
				{[
					{ name: "Bronze", color: "#8C6239" },
					{ name: "Silver", color: "#A6A6A6" },
					{ name: "Gold", color: "#D4AF37" },
					{ name: "Platinum", color: "#4A90E2" },
					{ name: "Diamond", color: "#8E44AD" },
				].map((item, index) => (
					<TouchableOpacity
						key={index}
						activeOpacity={0.8}
						className='w-1/3 px-1 py-1'
					>
						<View
							className='font-bold items-center p-3 text-center rounded-md'
							style={{ backgroundColor: item.color }}
						>
							<PrimaryText className='font-semibold'>
								{item.name}
							</PrimaryText>
							<PrimaryText className='text-4xl font-semibold'>
								0
							</PrimaryText>
						</View>
					</TouchableOpacity>
				))}
			</View>
			<Box className='gap-5'>
				<SecondaryText className='font-semibold'>
					Level Progression
				</SecondaryText>
				<View className='flex flex-col gap-2 items-center'>
					<PrimaryText className='text-sm shrink-0 '>
						lvl 1 radicals
					</PrimaryText>
					<LevelChart stages={stageData} />
				</View>
				<View className='flex flex-col gap-2 items-center'>
					<PrimaryText className='text-sm shrink-0'>
						lvl 1 kanji
					</PrimaryText>
					<LevelChart stages={stageData} />
				</View>
				<View className='flex flex-col gap-2 items-center'>
					<PrimaryText className='text-sm shrink-0'>
						lvl 1 vocabulary
					</PrimaryText>
					<LevelChart stages={stageData} />
				</View>
				<View className='flex flex-row justify-between mt-5'>
					<View className='flex flex-row gap-2 items-center'>
						<View className='bg-blue-400 h-3 w-3 rounded-full'></View>
						<PrimaryText className='text-sm '>
							In progress
						</PrimaryText>
					</View>
					<View className='flex flex-row gap-2 items-center'>
						<View className='bg-green-400 h-3 w-3 rounded-full'></View>
						<PrimaryText className='text-sm '>Passed</PrimaryText>
					</View>
					<View className='flex flex-row gap-2 items-center'>
						<View className='bg-red-400 h-3 w-3 rounded-full'></View>
						<PrimaryText className='text-sm '>Locked</PrimaryText>
					</View>
				</View>
			</Box>
			<Box className='gap-2'>
				<SecondaryText className='mb-3 font-semibold'>
					Unlocked in the last 30 days
				</SecondaryText>
				<View className='flex flex-row justify-between'>
					<PrimaryText>広げる</PrimaryText>
					<PrimaryText>Feb 12</PrimaryText>
				</View>
				<View className='flex flex-row justify-between'>
					<PrimaryText>広い</PrimaryText>
					<PrimaryText>Feb 12</PrimaryText>
				</View>
				<View className='flex flex-row justify-between'>
					<PrimaryText>戸</PrimaryText>
					<PrimaryText>Feb 11</PrimaryText>
				</View>
			</Box>
		</Scroll>
	);
}
