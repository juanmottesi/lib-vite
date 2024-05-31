import React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';

import { checkIfContiansClass } from '../../../test/utils';

import { Button } from './Button';

test('Should render component', async ({ mount }) => {
  const component = await mount(<Button id="action">Default</Button>);
  await expect(component).toContainText('Default');
});

test('Should contain className same as default variant', async ({ mount }) => {
  const component = await mount(<Button id="action">Default</Button>);
  await checkIfContiansClass(component, 'pressable');
  await checkIfContiansClass(component, 'fill-primary');
});

test('Should contain className same as variant', async ({ mount }) => {
  const component = await mount(<Button id="action" variant="flat-neutral">Default</Button>);
  await checkIfContiansClass(component, 'pressable');
  await checkIfContiansClass(component, 'flat-neutral');
});

test('Should contain default size', async ({ mount }) => {
  const component = await mount(<Button id="action" variant="flat-neutral">Default</Button>);
  await checkIfContiansClass(component, 'md');
});

test('Should contain custom size (lg)', async ({ mount }) => {
  const component = await mount(<Button id="action" size="lg" variant="flat-neutral">Default</Button>);
  await checkIfContiansClass(component, 'lg');
});

test('Should execute onClick', async ({ mount }) => {
  let clicked = false;
  const component = await mount(<Button
    id="action"
  
    onClick={() => {
      clicked = true;
    }}
  >
    Default
  </Button>);
  await component.click();
  await expect(clicked).toBeTruthy();
});
