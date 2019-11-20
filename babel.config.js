module.exports = api => {
  api.cache(true);
  const enviroment = process.env.NODE_ENV;
  return {
    presets: [
      ["@babel/preset-env"],
      ["@babel/preset-react"],
      ["@babel/preset-typescript"]
    ],
    plugins: [
      enviroment !== "test" && [
        "babel-plugin-remove-test-ids",
        {
          attributes: ["data-testid"]
        }
      ]
    ].filter(p => !!p)
  };
};

// PROOF THAT data test attribute is removed from compiled code.
