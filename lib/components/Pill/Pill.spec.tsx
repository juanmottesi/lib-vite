import React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';

import { checkIfContiansClass } from '../../../test/utils';

import { Pill } from "./index";

test('Should render component', async ({ mount }) => {
  const component = await mount(<Pill variant="default">Hola</Pill>);
  await expect(component).toContainText('Hola');
});

test('Should contain className same as variant', async ({ mount }) => {
  const component = await mount(<Pill variant="default">Hola</Pill>);
  await checkIfContiansClass(component, 'pill');
  await checkIfContiansClass(component, 'default');
});

test('Should contain className same as variant (active)', async ({ mount }) => {
  const component = await mount(<Pill variant="active">Hola</Pill>);
  await checkIfContiansClass(component, 'pill');
  await checkIfContiansClass(component, 'active');
});
