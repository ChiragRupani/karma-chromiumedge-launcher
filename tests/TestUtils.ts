import assert from "node:assert/strict";

export function assertContains(vals: string[], searchElement: string) {
  let hasValue = vals.includes(searchElement);
  assert.ok(hasValue, `Expected [${vals}] to include '${searchElement}'`);
}

export function assertNotContains(vals: string[], searchElement: string) {
  let hasValue = vals.includes(searchElement);
  assert.ok(!hasValue, `Expected [${vals}] not to include '${searchElement}'`);
}
