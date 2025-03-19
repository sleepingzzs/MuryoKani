import * as FileSystem from "expo-file-system";
import { Asset } from "expo-asset";

export const loadDB = async () => {
	const dbName = "muryokani.db";
	const dbAsset = require("@/assets/databases/muryokani.db");
	const dbUri = Asset.fromModule(dbAsset).uri;
	const dbFilePath = `${FileSystem.documentDirectory}SQLite/${dbName}`;
	const fileInfo = await FileSystem.getInfoAsync(dbFilePath);
	console.log(fileInfo);
	/**
	 * THIS CONDITION IS ONLY REMOVED IN DEBUGGING ENVIRONMENT
	 */
	// if (!fileInfo.exists) {
	await FileSystem.makeDirectoryAsync(
		`${FileSystem.documentDirectory}SQLite`,
		{ intermediates: true }
	);
	await FileSystem.downloadAsync(dbUri, dbFilePath);
	// }
};
