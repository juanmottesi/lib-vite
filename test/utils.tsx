import { expect } from "@playwright/experimental-ct-react";
import { Locator } from '@playwright/test';

export const checkIfContiansClass = (locator: Locator, className: string) => expect(locator).toHaveClass(new RegExp(`.*${className}.*`));