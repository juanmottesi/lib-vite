import { test, expect } from '@playwright/experimental-ct-react';

import { checkIfContiansClass } from '../../../test/utils';

import { ChoiceChip } from './ChoiceChip';

test('Should render component', async ({ mount }) => {
  const component = await mount(<ChoiceChip id="action">Default</ChoiceChip>);
  await expect(component).toContainText('Default');
});

test('Should contain defaults classNames', async ({ mount }) => {
  const component = await mount(<ChoiceChip id="action">Default</ChoiceChip>);
  await checkIfContiansClass(component, 'pressable');
  await checkIfContiansClass(component, 'choice-chip');
  await checkIfContiansClass(component, 'sm');
});

test('Should contain className selected when is selected', async ({ mount }) => {
  const component = await mount(<ChoiceChip id="action" selected>Default</ChoiceChip>);
  await checkIfContiansClass(component, 'pressable');
  await checkIfContiansClass(component, 'choice-chip');
  await checkIfContiansClass(component, 'selected');
});

test('Should contain custom size (lg)', async ({ mount }) => {
  const component = await mount(<ChoiceChip id="action" size="lg">Default</ChoiceChip>);
  await checkIfContiansClass(component, 'choice-chip');
  await checkIfContiansClass(component, 'lg');
});

test('Should contain defaults icons', async ({ mount }) => {
  const component = await mount(<ChoiceChip id="action" withIcons>Default</ChoiceChip>);
  await checkIfContiansClass(component, 'choice-chip');
  await expect(component).toContainText('+');
});

test('Should contain defaults icons (selected)', async ({ mount }) => {
  const component = await mount(<ChoiceChip id="action" withIcons selected>Default</ChoiceChip>);
  await checkIfContiansClass(component, 'choice-chip');
  await expect(component).toContainText('✓');
});

test('Should contain icons not defaults', async ({ mount }) => {
  const component = await mount(<ChoiceChip id="action" withIcons icons={{ selected: 'a', unselected: 'b' }}>Default</ChoiceChip>);
  await checkIfContiansClass(component, 'choice-chip');
  await expect(component).toContainText('b');
});

test('Should contain defaults icons not defaults (selected)', async ({ mount }) => {
  const component = await mount(<ChoiceChip id="action" withIcons icons={{ selected: 'a', unselected: 'b' }} selected>Default</ChoiceChip>);
  await checkIfContiansClass(component, 'choice-chip');
  await expect(component).toContainText('a');
});

test('Should execute onClick', async ({ mount }) => {
  let clicked = false;
  const component = await mount(<ChoiceChip
    id="action"
    onClick={() => {
      clicked = true;
    }}
  >
    Default
  </ChoiceChip>);
  await component.click();
  await expect(clicked).toBeTruthy();
});
