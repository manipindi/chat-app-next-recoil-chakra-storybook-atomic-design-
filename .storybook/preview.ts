import type { Preview } from "@storybook/react";

// const theme = require('../theme/theme');
import { theme } from "../theme/theme";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    chakra: {
      theme,
    },
  },
};

export default preview;
