import type { StorybookConfig } from "@storybook/react-webpack5";
import path from "path";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";
import custom from "../webpack.config.js";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config, { configType }) => {
    // config!.resolve!.plugins = [
    //   new TsconfigPathsPlugin({
    //     configFile: path.resolve(__dirname, "../tsconfig.json"),
    //   }),
    // ];

    // config.module?.rules?.push({
    //   test: /\.s[ac]ss$/i,
    //   use: ["style-loader", "css-loader", "sass-loader"],
    // });
    // config.module?.rules?.push({
    //   test: /\.css$/i,
    //   use: [
    //     "style-loader",
    //     "css-loader",
    //     {
    //       loader: "postcss-loader",
    //       options: {
    //         postcssOptions: {
    //           plugins: ["postcss-nesting"],
    //         },
    //       },
    //     },
    //   ],
    // });
    // return config;
    const merge = {
      ...config,
      module: {
        ...config.module,
        rules: [...config!.module!.rules!, ...custom.module.rules],
      },
    };

    merge!.resolve!.plugins = [
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, "../tsconfig.json"),
      }),
    ];

    return merge;
  },
};
export default config;
