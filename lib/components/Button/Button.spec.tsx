import React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';

import { checkIfContiansClass } from '../../../test/utils';

import { Button } from './index';

test('Should render component', async ({ mount }) => {
  const component = await mount(<Button id="action" variant="fill-primary">Default</Button>);
  await expect(component).toContainText('Default');
});

test('Should contain className same as variant', async ({ mount }) => {
  const component = await mount(<Button id="action" variant="fill-secondary">Default</Button>);
  await checkIfContiansClass(component, 'button');
  await checkIfContiansClass(component, 'fill-secondary');
});

test('Should contain default size', async ({ mount }) => {
  const component = await mount(<Button id="action" variant="fill-secondary">Default</Button>);
  await checkIfContiansClass(component, 'md');
});

test('Should contain custom size (lg)', async ({ mount }) => {
  const component = await mount(<Button id="action" size="lg" variant="fill-secondary">Default</Button>);
  await checkIfContiansClass(component, 'lg');
});

test('Should execute onClick', async ({ mount }) => {
  let clicked = false;
  const component = await mount(<Button
    id="action"
    variant="fill-primary"
    onClick={() => {
      clicked = true;
    }}
  >
    Default
  </Button>);
  await component.click();
  await expect(clicked).toBeTruthy();
});
