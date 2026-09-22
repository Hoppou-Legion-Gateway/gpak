import { add } from "@graphpack/lib";
import { expect, test } from "vitest";

test("cli can reach @graphpack/lib exports", () => {
	expect(add(1, 2)).toBe(3);
});