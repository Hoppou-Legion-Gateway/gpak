import type {
	UnityColor,
	UnityObjectReference,
	UnityVector2,
} from "./common.ts";

/** A single texture slot entry (`m_Texture`/`m_Scale`/`m_Offset`) */
export interface UnityTexEnv {
	m_Texture: UnityObjectReference;
	m_Scale: UnityVector2;
	m_Offset: UnityVector2;
}

/** An entry mapping a single shader property name to its value */
export type UnityNamedEntry<T> = Record<string, T>;

/** The `m_SavedProperties` block that stores all shader property values */
export interface UnitySavedProperties {
	serializedVersion: number;
	m_TexEnvs: UnityNamedEntry<UnityTexEnv>[];
	m_Ints: UnityNamedEntry<number>[];
	m_Floats: UnityNamedEntry<number>[];
	m_Colors: UnityNamedEntry<UnityColor>[];
}

/** The body of the `Material` */
export interface UnityMaterial {
	serializedVersion: number;
	m_ObjectHideFlags: number;
	m_CorrespondingSourceObject: UnityObjectReference;
	m_PrefabInstance: UnityObjectReference;
	m_PrefabAsset: UnityObjectReference;
	m_Name: string;
	m_Shader: UnityObjectReference;
	m_Parent: UnityObjectReference;
	m_ModifiedSerializedProperties: number;
	m_ValidKeywords: string[];
	m_InvalidKeywords: string[];
	m_LightmapFlags: number;
	m_EnableInstancingVariants: number;
	m_DoubleSidedGI: number;
	m_CustomRenderQueue: number;
	stringTagMap: Record<string, string>;
	disabledShaderPasses: string[];
	m_LockedProperties: string;
	m_SavedProperties: UnitySavedProperties;
	m_BuildTextureStacks: unknown[];
}

/** A parsed Unity `.mat` asset */
export interface DeserializedUnityMaterial {
	Material: UnityMaterial;
}