module.exports = {
  extends: ["react-app", "airbnb", "prettier", "prettier/react"],
  plugins: ["prettier"],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  settings: {
    "import/resolver": {
      node: {
        moduleDirectory: ["node_modules", "src/"],
      },
    },
  },
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/jsx-props-no-spreading": [0],
    "jsx-a11y/label-has-associated-control": [
      2,
      {
        depth: 3,
      },
    ],
    "import/prefer-default-export": [0],
    "global-require": 0,
  },
};
