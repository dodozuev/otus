module.exports = {
  stories: ["../stories/**/*.stories.js", "../src/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-knobs/register",
    "@storybook/addon-storysource",
    "storybook-addon-react-docgen/register",
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null,
      },
    },
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve("babel-loader"),
        },
        // // Optional
        // {
        //   loader: require.resolve("react-docgen-typescript-loader"),
        // },
      ],
    });
    config.resolve.extensions.push(".ts", ".tsx");
    return config;
  },
};
