/**
 * Adds two numbers and returns the result
 * @example
 * ```ts
 * add(1, 2); // 3
 * ```
 */
export function add(a: number, b: number) {
	return a + b;
}

export interface PropertyMap<T> {
	key: string;
	value: T;
}

export interface ColorRGBA {
	red: number;
	green: number;
	blue: number;
	alpha: number;
}

export interface Operation {
	run(): void;
}

export class Extract {}

export class Invert {}

/**
 * Example: a fully-opaque red used as a placeholder channel value
 * @example
 * ```ts
 * const red = exampleColor;
 * ```
 */
export const exampleColor: ColorRGBA = {
	red: 1.0,
	green: 0.5,
	blue: 0.25,
	alpha: 1.0,
};