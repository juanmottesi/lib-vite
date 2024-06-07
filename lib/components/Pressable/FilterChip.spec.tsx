import { test, expect } from '@playwright/experimental-ct-react';

import { checkIfContiansClass } from '../../../test/utils';

import { FilterChip } from './FilterChip';

test('Should render component', async ({ mount }) => {
  const component = await mount(<FilterChip id="action" label="Default" options={[]} />);
  await expect(component).toContainText('Default');
});

test('Should contain defaults classNames', async ({ mount }) => {
  const component = await mount(<FilterChip id="action" label="Default" options={[]} />);
  await checkIfContiansClass(component, 'pressable');
  await checkIfContiansClass(component, 'filter-chip');
  await checkIfContiansClass(component, 'sm');
});

test('Should show options', async ({ mount }) => {
  const component = await mount(<FilterChip id="action" label="Default" options={[ { name: 'text' }]} />);
  await checkIfContiansClass(component, 'pressable');
  await checkIfContiansClass(component, 'filter-chip');
  await expect(component).toContainText('Default:');
  await expect(component).toContainText('text');
});

test('Should show pill when have 2 option', async ({ mount }) => {
  const component = await mount(<FilterChip id="action" label="Default" options={[{ name: 'text' }, { name: 'anotherText' }]} />);
  await checkIfContiansClass(component, 'pressable');
  await checkIfContiansClass(component, 'filter-chip');
  await expect(component).not.toContainText('anotherText');
  await expect(component).toContainText('+1');  
});

test('Should execute onClick', async ({ mount }) => {
  let clicked = false;
  const component = await mount(<FilterChip
    id="action"
    label="Default"
    options={[]}
    onClick={() => {
      clicked = true;
    }}
  />);
  await component.click();
  await expect(clicked).toBeTruthy();
});
