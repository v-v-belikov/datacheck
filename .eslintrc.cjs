// module.exports = {
//   root: true,
//   env: { browser: true, es2020: true },
//   extends: [
//     'eslint:recommended',
//     'plugin:@typescript-eslint/recommended',
//     'plugin:react-hooks/recommended',
//   ],
//   ignorePatterns: ['dist', '.eslintrc.cjs'],
//   parser: '@typescript-eslint/parser',
//   plugins: ['react-refresh'],
//   rules: {
//     'react-refresh/only-export-components': [
//       'warn',
//       { allowConstantExport: true },
//     ],
//   },
// }

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    "react",
    "jest",
    "react-hooks",
    "import",
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'airbnb-typescript',
    "plugin:react/recommended",
  ],
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname
  },
  rules: {
    // indents
    "react/jsx-indent": [
      "warn",
      4,
    ],
    "react/jsx-indent-props": [
      "warn",
      {
        indentMode: 4,
        ignoreTernaryOperator: true,
      },
    ],
    "@typescript-eslint/indent": [
      "warn",
      4,
      {
        "ignoredNodes": [
          "TSTypeParameterInstantiation",
          "JSXElement",
          "JSXElement > *",
          "JSXAttribute",
          "JSXIdentifier",
          "JSXNamespacedName",
          "JSXMemberExpression",
          "JSXSpreadAttribute",
          "JSXExpressionContainer",
          "JSXOpeningElement",
          "JSXClosingElement",
          "JSXFragment",
          "JSXOpeningFragment",
          "JSXClosingFragment",
          "JSXText",
          "JSXEmptyExpression",
          "JSXSpreadChild",
          // In generic functions with currying.
          // It was mistakenly required to make an additional indentation for "params2" and "body"
          // <T>(
          //    params...
          // ) => (
          //    params2...
          // ) => {
          //    body...
          // }
          "ArrowFunctionExpression[typeParameters.type='TSTypeParameterDeclaration'] > ArrowFunctionExpression"
        ],
        "SwitchCase": 1,
      }
    ],

    // typescript
    "@typescript-eslint/quotes": ["warn", "double", {"avoidEscape": true}],
    "@typescript-eslint/semi": ["warn", "always", { "omitLastInOneLineBlock": true }],
    "@typescript-eslint/object-curly-spacing": ["warn", "never"],
    "@typescript-eslint/no-shadow": "off",
    "@typescript-eslint/no-use-before-define": ["off"],
    "@typescript-eslint/no-explicit-any": ["warn"],
    "@typescript-eslint/consistent-type-assertions": ["warn", {assertionStyle: "never"}],
    "@typescript-eslint/no-empty-interface": ["off"],
    "@typescript-eslint/member-delimiter-style": ["warn"],
    "@typescript-eslint/lines-between-class-members": ["warn", "always", { "exceptAfterSingleLine": true }],
    "@typescript-eslint/no-unused-vars": ["warn", {argsIgnorePattern: "^_"}],

    // imports
    "import/no-cycle": "off",
    "import/prefer-default-export": "off",
    // "import/no-restricted-paths": [
    //   "warn",
    //   {
    //     zones: [
    //       {
    //         // glob which disallows imports from api/domain
    //         // in whole project excluding api/domain sub-dirs and entities.
    //         target: "./src/es6/*/!(domain|entities.ts){,/**}",
    //         from: "./src/es6/api/domain",
    //         message: "Domain layer can only be imported from the same directory or from the entities.",
    //       },
    //     ],
    //   },
    // ],
    // "import/order": [
    //   "warn",
    //   {
    //     "newlines-between": "always",
    //     pathGroupsExcludedImportTypes: [
    //         "builtin",
    //     ],
    //     pathGroups: [
    //       {
    //         pattern: "react-hook-form",
    //         group: "external",
    //         position: "after",
    //       },
    //       {
    //         pattern: "@material-ui/**",
    //         group: "external",
    //         position: "after",
    //       },
    //       {
    //         pattern: deepNestedPath + "testUtils/**",
    //         group: "parent",
    //         position: "before",
    //         patternOptions: {matchBase: true},
    //       },
    //       {
    //         pattern: "entities",
    //         group: "parent",
    //         position: "before",
    //         patternOptions: {matchBase: true},
    //       },
    //       {
    //         pattern: deepNestedPath + "{,/src/es6/}utils/{monads,types}",
    //         group: "parent",
    //         position: "before",
    //         patternOptions: {matchBase: true},
    //       },
    //       {
    //         pattern: deepNestedPath + "{,/src/es6/}{stores/**,reducers/**}",
    //         group: "parent",
    //         position: "before",
    //         patternOptions: {matchBase: true},
    //       },
    //       {
    //         pattern: deepNestedPath + "{,/src/es6/}api/**",
    //         group: "parent",
    //         position: "before",
    //         patternOptions: {matchBase: true},
    //       },

    //       {
    //         pattern: deepNestedPath + "{,/src/es6/}actions/**",
    //         group: "parent",
    //         position: "before",
    //         patternOptions: {matchBase: true},
    //       },
    //       {
    //         pattern: deepNestedPath + "{,/src/es6/}**/thunks/**",
    //         group: "parent",
    //         position: "before",
    //         patternOptions: {matchBase: true},
    //       },
    //       {
    //         pattern: deepNestedPath + "{,/src/es6/}utils/**",
    //         group: "parent",
    //         position: "before",
    //         patternOptions: {matchBase: true},
    //       },
    //     ],
    //     groups: ["builtin", "external", "parent", "sibling", "index"],
    //   }
    // ],

    // react
    "react/jsx-wrap-multilines": "off",
    "react/destructuring-assignment": "off",
    "react/jsx-props-no-spreading": "off",
    "react/require-default-props": "off",
    "react/jsx-closing-tag-location": ["warn"],
    "react/function-component-definition": [
      "warn",
      {
        "namedComponents": "arrow-function",
      },
    ],
    "react/jsx-tag-spacing": [
      "warn", 
      {
        "beforeSelfClosing": "never",
        "beforeClosing": "never",
        "afterOpening": "never",
        "closingSlash": "never",
      }
    ],
    "react/react-in-jsx-scope": "off",
    "react/sort-comp": [
      "warn",
      {
        order: [
          'static-methods',
          'lifecycle',
          'everything-else',
          'render'
        ],
        groups: {
          lifecycle: [
            'displayName',
            'propTypes',
            'contextTypes',
            'childContextTypes',
            'mixins',
            'statics',
            'defaultProps',
            'constructor',
            'getDefaultProps',
            'state',
            'getInitialState',
            'getChildContext',
            'getDerivedStateFromProps',
            'componentWillMount',
            'UNSAFE_componentWillMount',
            'componentDidMount',
            'componentWillReceiveProps',
            'UNSAFE_componentWillReceiveProps',
            'shouldComponentUpdate',
            'componentWillUpdate',
            'UNSAFE_componentWillUpdate',
            'getSnapshotBeforeUpdate',
            'componentDidUpdate',
            'componentDidCatch',
            'componentWillUnmount'
          ]
        }
      }
    ],

    // jsx-a11y
    // "jsx-a11y/control-has-associated-label": "off",

    // react-hooks
    "react-hooks/rules-of-hooks": "warn",
    "react-hooks/exhaustive-deps": "warn",

    // others
    "block-spacing": ["warn", "never"],
    "function-paren-newline": ["warn", "consistent"],
    "no-warning-comments": ["warn", { "terms": ["todo", "fixme", "fix"], "location": "anywhere" }],
    "implicit-arrow-linebreak": "off",
    "class-methods-use-this": "off",
    "no-prototype-builtins": "off",
    "max-classes-per-file": "off",
    "linebreak-style": "off",
    "indent": "off",
    "no-underscore-dangle": "off",
    "max-len": [
      "warn",
      {
        code: 120,
        ignoreTemplateLiterals: true,
      },
    ],
    "arrow-parens": ["warn", "as-needed"],
    "no-console": ["warn", {"allow": ["warn", "error"]}],
    "array-element-newline": ["warn", "consistent"],

    // OLD FROM Microservice-organizer could be used to configure)
    // // "@typescript-eslint/dot-notation": "warn",
    //
    //
    // // "quote-props": ["warn", "consistent-as-needed"],
    // // "no-param-reassign": ["warn", { "props": false }],
    // "max-nested-callbacks": ["warn", {"max": 2}],
    // "max-depth": ["warn", {"max": 2}],
    //
    // // "function-paren-newline": "off",
    // "no-param-reassign": ["warn", { "props": true, "ignorePropertyModificationsFor": ["options", "userService", "contactsService"] }],

  },

  // "overrides": [
  //   {
  //     "files": [ "*.test.tsx", "*.test.ts" ],
  //     "rules": {
  //       "max-nested-callbacks": ["warn", {"max": 5}],
  //       "max-depth": ["warn", {"max": 5}]
  //     }
  //   }
  // ]
};
