module.exports = function (w) {
	return {
		files: ["src/**/*.ts"],

		tests: ["**/*spec.ts", "**/*test.ts"],

		compilers: {
			"**/*.ts?(x)": w.compilers.typeScript({ isolatedModules: true }),
		},
	};
};
