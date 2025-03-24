import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import React, { useCallback, useState } from "react";
import { useFocusEffect, useRouter } from "expo-router";
import { PrimaryText, SecondaryText, Scroll, Box } from "@/components/Themes";
import LevelChart from "@/components/LevelChart";
import { useSQLiteContext, openDatabaseAsync } from "expo-sqlite";

export default function Home() {
	const router = useRouter();
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
					const res = await db.getAllAsync(
						`
						SELECT
							MAX(level) AS level,
							COUNT(CASE WHEN stage = 0 THEN 1 END) AS lessons,
							COUNT(CASE WHEN next_review <= datetime('now') THEN 1 END) AS reviews,
							COUNT(CASE WHEN next_review BETWEEN datetime('now') AND datetime('now', '+24 hours') THEN 1 END) AS upcoming,
							COUNT(CASE WHEN stage > 0 AND stage <= 4 THEN 1 END) AS bronze,
							COUNT(CASE WHEN stage > 4 AND stage <= 6 THEN 1 END) AS silver,
							COUNT(CASE WHEN stage > 6 AND stage <= 7 THEN 1 END) AS gold,
							COUNT(CASE WHEN stage > 7 AND stage <= 8 THEN 1 END) AS platinum,
							COUNT(CASE WHEN stage > 8 AND stage <= 9 THEN 1 END) AS diamond,
							COUNT(CASE WHEN passed = 1 AND level = (SELECT MAX(level) FROM progress) THEN 1 END) AS passed,
							(SELECT COUNT(CASE WHEN level = (SELECT MAX(level) FROM progress) THEN 1 END) FROM radicals) AS radicals,
							(SELECT COUNT(CASE WHEN level = (SELECT MAX(level) FROM progress) THEN 1 END) FROM kanji) AS kanji
						FROM progress;
						`
					);
					setData(res[0]);
					// console.log("Tables in DB:", res);
				} catch (error) {
					console.error("DB Query Error:", error);
				}
			})();
		}, [db])
	);

	const stageData = {
		learning: data.bronze,
		passed: data.passed,
		locked: 2.5,
	};

	return (
		<Scroll>
			<View className='flex flex-row gap-5 '>
				<PrimaryText>Level {data.level}</PrimaryText>
				<PrimaryText>
					{Number(
						(data.passed * 100) / (data.radicals + data.kanji * 0.9)
					).toFixed(2)}
					%
				</PrimaryText>
			</View>
			<Box className='flex-col gap-1'>
				<SecondaryText>Available</SecondaryText>
				<View className='flex flex-row gap-2'>
					<PrimaryText className='text-3xl font-semibold'>
						Lessons
					</PrimaryText>
					<Text className='text-black bg-white rounded-full self-center px-2'>
						{data.lessons == 0 && "Done!"}
						{data.lessons > 0 && data.lessons}
					</Text>
				</View>
				<View className='mt-5'></View>
				<SecondaryText>
					{data.lessons == 0 &&
						data.reviews == 0 &&
						"You've completed all your lessons! Keep doing your reviews to unlock more lessons."}
					{data.lessons == 0 &&
						data.reviews > 0 &&
						"Complete your reviews to unlock more lessons."}
					{data.lessons > 0 && data.reviews == 0 && (
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
						{data.reviews == 0 && "None!"}
						{data.reviews > 0 && data.reviews}
					</Text>
				</View>
				<View className='mt-5'></View>
				<SecondaryText>
					{data.reviews == 0 &&
						`You've completed all your reviews for now! You have ${data.upcoming} reviews upcoming in the next 24 hours.`}
					{data.reviews > 0 && (
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
					{ name: "Bronze", color: "#8C6239", count: data.bronze },
					{ name: "Silver", color: "#A6A6A6", count: data.silver },
					{ name: "Gold", color: "#D4AF37", count: data.gold },
					{
						name: "Platinum",
						color: "#4A90E2",
						count: data.platinum,
					},
					{ name: "Diamond", color: "#8E44AD", count: data.diamond },
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
								{item.count}
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
						<View className='bg-white h-3 w-3 rounded-full'></View>
						<PrimaryText className='text-sm '>
							In progress
						</PrimaryText>
					</View>
					<View className='flex flex-row gap-2 items-center'>
						<View className='bg-yellow-400 h-3 w-3 rounded-full'></View>
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
