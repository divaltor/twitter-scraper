import { genericPlatform, type PlatformExtensions } from "./platform-interface";

export * from "./platform-interface";

export class Platform implements PlatformExtensions {
	async randomizeCiphers() {
		const platform = await Platform.importPlatform();
		await platform?.randomizeCiphers();
	}

	private static async importPlatform(): Promise<null | PlatformExtensions> {
		const { platform } = await import("./node/index.js");
		return platform as PlatformExtensions;
	}
}
