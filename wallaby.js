module.exports = (w) => {
  return {
    trace: true,
    files: ["src/**/*.ts"],
    env: {
      type: "node",
      runner: "node",
    },
    autoDetect: true,

    testFramework: {
      configFile: "./vitest.config.ts",
    },

    tests: ["src/tests/*spec.ts", "src/tests/*test.ts", "src/tests/*test.tsx"],
  };
};
