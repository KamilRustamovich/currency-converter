export const HttpModuleConfig = {
	useFactory: () => ({
		timeout: 5000,
		maxRedirects: 5,
	}),
}