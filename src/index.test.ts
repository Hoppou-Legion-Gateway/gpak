import { expect, test } from "vitest";
import { graphpack } from "./index.ts";

test("adds 1 + 2 to equal 3", () => {
	expect(graphpack.add(1, 2)).toBe(3);
});