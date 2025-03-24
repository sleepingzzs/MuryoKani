const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);
config.resolver.assetExts.push("db");
config.transformer.babelTransformerPath = require.resolve(
	"react-native-svg-transformer"
);
config.resolver.assetExts = config.resolver.assetExts.filter(
	(ext) => ext !== "svg"
);
config.resolver.sourceExts.push("svg");
module.exports = withNativeWind(config, { input: "./app/globals.css" });
