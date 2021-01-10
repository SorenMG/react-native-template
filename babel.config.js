module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "module-resolver", {
          "root": ["./src"],
            "extensions": [".js", ".ios.js", ".android.js"],
            "alias": {
                "@models": "./src/models",
                "@assets": "./src/assets",
                "@components": "./src/components",
                "@navigations": "./src/navigations",
                "@scenes": "./src/scenes",
                "@services": "./src/services",
                "@styles": "./src/styles",
                "@utils": "./src/utils",
                "@stores": "./src/stores"
            }
        }
      ]
    ]
  };
};
