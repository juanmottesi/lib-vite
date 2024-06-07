import type { Preview } from "@storybook/react";
import { withThemeByClassName } from "@storybook/addon-themes";

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
  decorators: [
    withThemeByClassName({
      themes: {
        Light: 'light',
        Dark: 'dark'
      },
      defaultTheme: 'Light',
    }),
  ],
};

export default preview;
