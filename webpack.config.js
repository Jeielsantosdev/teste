module.exports = {
    module: {
      rules: [
        {
          test: /\.js$/,
          include: /node_modules\/@itseasy21\/react-elastic-carousel/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
              sourceType: "module",
            },
          },
        },
        // Other rules...
      ],
    },
  };