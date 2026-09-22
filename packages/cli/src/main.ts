#!/usr/bin/env node
import { add, exampleColor } from "@graphpack/lib";

/**
 * Entry point for the `gpak` command-line interface
 * @example
 * ```sh
 * gpak
 * ```
 */
function main() {
	console.log("graphpack CLI");
	console.log("example computation from @graphpack/lib:", add(1, 2));
	console.log("example channel value from @graphpack/lib:", exampleColor);
}

main();