import type { UUID } from "node:crypto";

import type { UnityObjectReference } from "./common.ts";

/** The `NativeFormatImporter` block found in `.meta` files for native (non-imported) assets like materials */
export interface UnityNativeFormatImporter {
	/** Overridden object references, keyed by their original source reference */
	externalObjects: Record<string, UnityObjectReference>;
	mainObjectFileID: number;
	userData: string;
	assetBundleName: string;
	assetBundleVariant: string;
}

/** A parsed Unity `.meta` sidecar file */
export interface DeserializedUnityMeta {
	fileFormatVersion: number;
	guid: UUID;
	NativeFormatImporter: UnityNativeFormatImporter;
}