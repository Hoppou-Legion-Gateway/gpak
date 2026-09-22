import { add, exampleColor } from "@gpak/parser";
import { Command, ux } from "@oclif/core";

/**
 * A simple example command demonstrating the `gpak` CLI
 * @example
 * ```sh
 * gpak hello
 * ```
 */
export default class Hello extends Command {
	static override description =
		"Say hello and print a couple of example values from @gpak/parser";

	static override examples = ["<%= config.bin %> hello"];

	async run(): Promise<void> {
		this.log(ux.colorize("green", "Hello from graphpack!"));
		this.log(
			`example computation from @gpak/parser: ${ux.colorize("cyan", String(add(1, 2)))}`,
		);
		this.log(
			`example channel value from @gpak/parser: ${ux.colorize("cyan", JSON.stringify(exampleColor))}`,
		);
	}
}