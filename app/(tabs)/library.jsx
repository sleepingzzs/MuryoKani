import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	ScrollView,
} from "react-native";
import { useEffect, useState } from "react";
import { PrimaryText, SecondaryText, Scroll, Box } from "@/components/Themes";
import { radicalsvg } from "@/assets/radicals";
import { SvgXml } from "react-native-svg";
import { useSQLiteContext } from "expo-sqlite";
const library = () => {
	const [level, setLevel] = useState(0);
	const [kanji, setKanji] = useState([]);
	const [vocabulary, setVocabulary] = useState([]);
	const [radicals, setRadicals] = useState([]);
	const db = useSQLiteContext();
	function cleanSVG(svg) {
		return svg
			.replace(/<defs>[\s\S]*?<\/defs>/g, "")
			.replace(/<clipPath[^>]*>[\s\S]*?<\/clipPath>/g, "")
			.replace(/var\(--color-text, #[0-9A-Fa-f]{3,6}\)/g, "#60a5fa")
			.replace(/<g[^>]*clip-path="[^"]*"[^>]*>([\s\S]*?)<\/g>/g, "$1")
			.replace(
				/<path /g,
				'<path stroke="#60a5fa" stroke-width="68" fill="none" stroke-linecap="square" stroke-miterlimit="2" '
			);
	}

	useEffect(() => {
		(async () => {
			try {
				const kanji = await db.getAllAsync(`
			 	SELECT
					id, 
					characters AS char,
					SUBSTR(meanings, 1, INSTR(meanings || ',', ',') - 1) AS meaning,
					SUBSTR(accepted_readings, 1, INSTR(accepted_readings || ',', ',') - 1) AS reading
				FROM kanji
					WHERE level = ${level}
				`);
				const vocabulary = await db.getAllAsync(`
				SELECT 
					id,
				    characters AS vocabulary,
    				SUBSTR(meanings, 1, INSTR(meanings || ',', ',') - 1) AS meaning,
    				SUBSTR(accepted_readings, 1, INSTR(accepted_readings || ',', ',') - 1) AS reading
				FROM vocabulary
					WHERE level = ${level}
				`);
				const radicals = await db.getAllAsync(
					`
				SELECT
					id,
					characters AS char,
					SUBSTR(meanings, 1, INSTR(meanings || ',', ',') - 1) AS meaning
				FROM radicals
					WHERE level = ${level}
				`
				);

				setRadicals(radicals);
				setKanji(kanji);
				setVocabulary(vocabulary);
			} catch (error) {
				console.error("Database Error:", error);
			}
		})();
	}, [level]);
	return (
		<Scroll>
			<TextInput
				className='border border-secondary bg-primary text-bg rounded-md px-5 py-4 w-full text-lg'
				placeholder='Search'
				cursorColor='black'
			/>
			<SecondaryText className='self-center font-semibold'>
				Select a level
			</SecondaryText>
			<View className='flex-row flex-wrap w-full'>
				{Array.from({ length: 60 }, (_, i) => i + 1).map((num) => (
					<TouchableOpacity
						key={num}
						activeOpacity={0.6}
						onPress={() => setLevel(num)}
						className={`w-[10%] aspect-square flex items-center justify-center border border-[#161616] ${num === level ? "bg-white" : "bg-[#242424]"} -ml-[0.01px] -mt-[0.5px]`}
					>
						<Text
							className={
								num === level ? "text-black" : "text-primary"
							}
						>
							{num}
						</Text>
					</TouchableOpacity>
				))}
			</View>
			{level != 0 && (
				<View className='flex-col gap-5 w-full -mt-12'>
					<SecondaryText className='font-semibold self-center'>
						Radicals
					</SecondaryText>

					<View className='flex-row flex-wrap -mx-1 -my-1'>
						{radicals.map((item) => (
							<TouchableOpacity
								key={item.id}
								activeOpacity={0.8}
								className='w-1/3 px-1 py-1'
							>
								<View className='border border-border bg-box rounded-md flex items-center p-2 gap-1 justify-center max-w-60 max-h-60'>
									{item.char ? (
										<Text className='text-2xl text-blue-400'>
											{item.char}
										</Text>
									) : (
										<SvgXml
											xml={cleanSVG(radicalsvg[item.id])}
											width={28}
											height={28}
										/>
									)}
									<SecondaryText className='text-sm'>
										{item.meaning}
									</SecondaryText>
								</View>
							</TouchableOpacity>
						))}
					</View>
					<SecondaryText className='self-center font-semibold'>
						Kanji
					</SecondaryText>
					<View className='flex-row flex-wrap -mx-1 -my-1'>
						{kanji.map((item, index) => (
							<TouchableOpacity
								key={item.id}
								activeOpacity={0.8}
								className='w-1/3 px-1 py-1'
							>
								<View className='border border-[#242424] bg-[#1C1C1C] rounded-md flex items-center p-2 gap-1 justify-center max-w-60 max-h-60'>
									<Text className='text-2xl text-yellow-400'>
										{item.char}
									</Text>
									<SecondaryText className='text-sm'>
										{item.reading}
									</SecondaryText>
									<SecondaryText className='text-sm'>
										{item.meaning}
									</SecondaryText>
								</View>
							</TouchableOpacity>
						))}
					</View>
					<SecondaryText className='self-center font-semibold'>
						Vocabulary
					</SecondaryText>
					<View className='flex flex-col gap-5 w-full'>
						{vocabulary.map((item, index) => (
							<TouchableOpacity
								key={item.id}
								activeOpacity={0.8}
								className='flex-row justify-between items-center px-5 py-2 border border-[#242424] bg-[#1C1C1C] rounded-md'
							>
								<Text className='text-xl text-green-400'>
									{item.vocabulary}
								</Text>
								<View className='flex flex-col gap-1'>
									<PrimaryText className='text-sm text-right'>
										{item.reading}
									</PrimaryText>
									<SecondaryText className='text-sm text-right'>
										{item.meaning}
									</SecondaryText>
								</View>
							</TouchableOpacity>
						))}
					</View>
				</View>
			)}
		</Scroll>
	);
};

export default library;
