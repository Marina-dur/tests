import { test as base } from "@playwright/test";

export type Fixtures = Record<string, never>;

export const test = base.extend<Fixtures>({});
export const expect = test.expect;
