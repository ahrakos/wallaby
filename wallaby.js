module.exports = (w) => {
  return {
    trace: true,
    files: [
      "src/**/*.+(js|jsx|ts|tsx|json|snap|css|less|sass|scss|jpg|jpeg|gif|png|svg)",
      "!src/**/*.test.[jt]s?(x)",
    ],
    env: {
      type: "node",
      runner: "node",
    },
    autoDetect: true,

    testFramework: {
      configFile: "vitest.config.ts",
    },
    debug: true,
    tests: ["src/tests/*spec.ts", "src/tests/*test.ts", "src/tests/*test.tsx"],
  };
};
