import type { UUID } from "node:crypto";

/** A Unity `PPtr`-style reference to another serialized object */
export interface UnityObjectReference {
	fileID: number;
	guid?: UUID;
	type?: number;
}

/** A 2D vector as serialized by Unity (e.g. texture scale/offset) */
export interface UnityVector2 {
	x: number;
	y: number;
}

/** An RGBA color as serialized by Unity */
export interface UnityColor {
	r: number;
	g: number;
	b: number;
	a: number;
}