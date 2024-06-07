import React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';

import { checkIfContiansClass } from '../../../test/utils';

import { Card } from './index';

test('Should render component', async ({ mount }) => {
  const component = await mount(<Card>Hola</Card>);
  await expect(component).toContainText('Hola');
});

test('Should contain className same as variant', async ({ mount }) => {
  const component = await mount(<Card>Hola</Card>);
  await checkIfContiansClass(component, 'card');
  await checkIfContiansClass(component, 'default');
});

test('Should contain className same as variant (active)', async ({ mount }) => {
  const component = await mount(<Card>Hola</Card>);
  await checkIfContiansClass(component, 'pill');
  await checkIfContiansClass(component, 'active');
});
