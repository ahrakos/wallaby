module.exports = (w) => {
  return {
    trace: true,
    files: ["src/code/**/*.ts"],
    env: {
      type: "node",
      runner: "node",
    },
    autoDetect: true,

    testFramework: "jest",

    tests: ["src/tests/*spec.ts", "src/tests/*test.ts"],
  };
};
