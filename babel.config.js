module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ["@babel/plugin-proposal-unicode-property-regex", "nativewind/babel", 'react-native-reanimated/plugin'],
  }
};
