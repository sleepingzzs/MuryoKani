import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { PrimaryText, SecondaryText, Scroll, Box } from "./Themes";

export function Kanji() {
	return (
		<Scroll>
			<PrimaryText className='self-center'>0/15</PrimaryText>
			<Box className='flex-row items-center'>
				<Text className='text-6xl text-center leading-[80px] pr-10 pl-5 text-yellow-400'>
					万
				</Text>
				<View className='flex flex-col gap-2'>
					<SecondaryText>Level 1 Kanji</SecondaryText>
					<PrimaryText>Power, Strength, Ability</PrimaryText>
					<PrimaryText>りょく, りき</PrimaryText>
				</View>
			</Box>

			<Box className='gap-2'>
				<View className='flex-row'>
					<SecondaryText>On'yomi: </SecondaryText>
					<PrimaryText>りょく, りき</PrimaryText>
				</View>
				<View className='flex-row'>
					<SecondaryText>Kun'yomi: </SecondaryText>
					<PrimaryText>ちから</PrimaryText>
				</View>
			</Box>

			<Text className='text-white/60 font-semibold self-center'>
				Radicals used
			</Text>

			<View className='flex-row flex-wrap -mx-1 -my-1'>
				{[
					{ char: "力", meaning: "Power" },
					{ char: "力", meaning: "Power" },
					{ char: "力", meaning: "Power" },
					{ char: "力", meaning: "Power" },
				].map((item, index) => (
					<TouchableOpacity
						key={index}
						activeOpacity={0.8}
						className='w-1/3 px-1 py-1'
					>
						<View className='border border-border bg-box rounded-md flex items-center p-2 gap-1 justify-center max-w-60 max-h-60'>
							<Text className='text-2xl text-blue-400'>
								{item.char}
							</Text>
							<Text className='text-sm text-white/60'>
								{item.meaning}
							</Text>
						</View>
					</TouchableOpacity>
				))}
			</View>

			<View className='border border-[#242424] bg-[#1C1C1C] rounded-md p-5 gap-5'>
				<SecondaryText className='font-semibold'>
					Meaning mnemonic
				</SecondaryText>
				<PrimaryText>
					The radical and the meaning of this kanji are the same. Both
					are <Text className='text-blue-400'>power</Text>.
				</PrimaryText>
				<PrimaryText>
					If you know the radical, you should be feeling fine… No, you
					should feel powerful!
				</PrimaryText>
			</View>

			<View className='border border-[#242424] bg-[#1C1C1C] rounded-md p-5 gap-5'>
				<SecondaryText className='font-semibold'>
					Reading mnemonic
				</SecondaryText>
				<PrimaryText>
					Who has the most power of anyone? It's the{" "}
					<Text className='text-blue-400'>Power</Text> Rangers. They
					are battling their arch enemy{" "}
					<Text className='font-semibold'>Ricky</Text> (りき). They
					defeat him and <Text className='font-semibold'>lock</Text>{" "}
					(りょく) him up, so that he can't hurt anyone ever again.
				</PrimaryText>
				<PrimaryText>
					Know anyone named{" "}
					<Text className='font-semibold'>Ricky</Text> (りき), even a
					famous person like Ricky Ricardo or Ricky Gervais? Imagine
					that person's face on the monster the{" "}
					<Text className='text-blue-400'>Power</Text> Rangers are
					fighting. Now, imagine the Power Rangers{" "}
					<Text className='font-semibold'>lock</Text>ing (りょく) him
					up. He looks much less scary once he's locked up. Phew.
				</PrimaryText>
			</View>

			<Text className='text-white/60 font-semibold self-center'>
				Found in
			</Text>
			<View className='flex flex-col gap-5 w-full'>
				{[
					{ kanji: "力", reading: "ちから", meaning: "Power" },
					{
						kanji: "力いっぱい",
						reading: "ちからいっぱい",
						meaning: "With All One's Strength",
					},
					{
						kanji: "入力",
						reading: "にゅうりょく",
						meaning: "Input",
					},
				].map((item, index) => (
					<TouchableOpacity
						key={index}
						activeOpacity={0.8}
						className='flex-row justify-between items-center px-5 py-2 border border-[#242424] bg-[#1C1C1C] rounded-md'
					>
						<Text className='text-xl text-green-400'>
							{item.kanji}
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
			<View className='h-5'></View>
		</Scroll>
	);
}

export function Radical() {
	return (
		<Scroll>
			<PrimaryText className='self-center'>0/15</PrimaryText>
			<Box className='flex-row items-center'>
				<Text className='text-6xl text-blue-400 text-center leading-[80px] pl-5 pr-10'>
					幺
				</Text>
				<View className='flex flex-col gap-2'>
					<SecondaryText>Level 1 Radical</SecondaryText>
					<PrimaryText>Poop</PrimaryText>
				</View>
			</Box>
			<Box className='gap-5'>
				<SecondaryText className='font-semibold'>
					Meaning mnemonic
				</SecondaryText>
				<PrimaryText>
					For better or worse, this looks enough like the poop emoji
					(💩) to make this{" "}
					<Text className='text-blue-400'>poop</Text> radical. Try to
					remember it for its distinct outline. If it helps you can
					also note the private radical on the bottom of this one,
					since you should probably be in private when you poop…feel
					powerful!
				</PrimaryText>
			</Box>
			<SecondaryText className='font-semibold'>Found in</SecondaryText>
			<View className='flex-row flex-wrap -mx-1 -my-1'>
				{[
					{ char: "後", meaning: "Behind", reading: "ご" },
					{ char: "幻", meaning: "Illusion", reading: "げん" },
					{ char: "機", meaning: "Machine", reading: "き" },
					{ char: "率", meaning: "Percent", reading: "りつ" },
				].map((item, index) => (
					<TouchableOpacity
						key={index}
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
			<View className='h-5'></View>
		</Scroll>
	);
}

export function Vocabulary() {
	return (
		<Scroll>
			<PrimaryText className='self-center'>0/15</PrimaryText>
			<Box className='items-center flex-col gap-2'>
				<Text className='text-green-400 text-6xl leading-[80px]'>
					確率
				</Text>
				<SecondaryText>Level 1 Vocabulary</SecondaryText>
				<PrimaryText>Probability, Likelihood, Chances</PrimaryText>
				<PrimaryText>かくりつ</PrimaryText>
				<PrimaryText>Word type: noun</PrimaryText>
			</Box>

			<SecondaryText className='font-semibold self-center'>
				Used Kanji
			</SecondaryText>
			<View className='flex-row flex-wrap -mx-1 -my-1'>
				{[
					{ char: "確", meaning: "Certain", reading: "かく" },
					{ char: "率", meaning: "Percent", reading: "りつ" },
				].map((item, index) => (
					<TouchableOpacity
						key={index}
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
			<Box className='gap-5'>
				<SecondaryText className='font-semibold'>
					Meaning mnemonic
				</SecondaryText>
				<PrimaryText>
					You're certain there is this percent chance it will happen?
					You know that this is the probability?
				</PrimaryText>
			</Box>
			<Box className='gap-5'>
				<SecondaryText className='font-semibold'>
					Reading mnemonic
				</SecondaryText>
				<PrimaryText>
					This is a jukugo word, which usually means on'yomi readings
					from the kanji. If you know the readings of your kanji
					you'll know how to read this as well.
				</PrimaryText>
			</Box>
			<SecondaryText className='font-semibold self-center'>
				Context sentences
			</SecondaryText>
			<View className='flex flex-col gap-5 w-full'>
				{[
					{
						jp: "宝くじに当たる確率がどのくらいか知っていますか？",
						en: "Do you know how likely it is to win the lottery?",
					},
					{
						jp: "なんか金曜日は高確率でカレーを食べてる気がする。",
						en: "It feels like I have curry on Fridays with a high probability.",
					},
					{
						jp: "ミドリちゃんと付き合える確率、自分では五分五分かなって思ってるんだけど、もっと低いと思う？",
						en: "I feel like the chances of dating Midori-chan are fifty-fifty, but do you think they're even lower?",
					},
				].map((item, index) => (
					<Box key={index} className='gap-2'>
						<PrimaryText>{item.jp}</PrimaryText>
						<SecondaryText>{item.en}</SecondaryText>
					</Box>
				))}
			</View>
			<View className='h-5'></View>
		</Scroll>
	);
}
