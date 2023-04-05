import type { StorybookConfig } from "@storybook/nextjs";
const config: any = {
  stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@chakra-ui/storybook-addon"
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  features: {
    emotionAlias: false,
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
