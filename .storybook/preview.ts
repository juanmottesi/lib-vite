import type { Preview } from "@storybook/react";

import '../lib/global.scss';
import '../lib/theme/ppi.scss';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
