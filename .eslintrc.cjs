module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended", // Add TypeScript recommended
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser", // Use @typescript-eslint/parser for TypeScript files
  parserOptions: {
    ecmaVersion: 2020, // You can specify a specific ECMAScript version
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: { react: { version: "detect" } }, // Detect React version
  plugins: ["react", "@typescript-eslint"], // Add @typescript-eslint as a plugin
  rules: {
    "react/jsx-no-target-blank": "off",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "react/prop-types": 0,
    // TypeScript specific rules
    "@typescript-eslint/explicit-module-boundary-types": "off", // You might want to turn this on eventually
    "@typescript-eslint/no-empty-function": "off", // You might want to turn this on eventually
  },
};
