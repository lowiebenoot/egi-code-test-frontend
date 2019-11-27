module.exports = ctx => {
  return {
    plugins: {
      "postcss-import": {
        root: "./",
        path: "src",
      },
      "postcss-pseudoelements": {},
      "postcss-cssnext": {
        features: {
          customProperties: {
            warnings: false,
          },
        },
      },
      "postcss-nested": {},
      "postcss-reporter": {
        clearMessages: true,
      },
    },
  }
}
