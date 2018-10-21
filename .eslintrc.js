module.exports = {
    "plugins": [
        "react-native"
    ],
    "parser": "babel-eslint",
    "env": {
        "react-native/react-native": true,
    },
    "extends": "airbnb",
    "rules": {
        "no-console": 0,
        "max-len": 0,

        // indentation
        "indent": ["error", 4, {
            SwitchCase: 1,
            VariableDeclarator: 1,
            outerIIFEBody: 1,
            // MemberExpression: null,
            FunctionDeclaration: {
              parameters: 1,
              body: 1
            },
            FunctionExpression: {
              parameters: 1,
              body: 1
            },
            CallExpression: {
              arguments: 1
            },
            ArrayExpression: 1,
            ObjectExpression: 1,
            ImportDeclaration: 1,
            flatTernaryExpressions: false,
            // list derived from https://github.com/benjamn/ast-types/blob/HEAD/def/jsx.js
            ignoredNodes: ['JSXElement', 'JSXElement > *', 'JSXAttribute', 'JSXIdentifier', 'JSXNamespacedName', 'JSXMemberExpression', 'JSXSpreadAttribute', 'JSXExpressionContainer', 'JSXOpeningElement', 'JSXClosingElement', 'JSXText', 'JSXEmptyExpression', 'JSXSpreadChild'],
            ignoreComments: false
        }],

        // strings
        "quotes": ["error", "double", { avoidEscape: true }],

        // make it meaningful
        "prefer-const": 1,

        // react
        "react/jsx-filename-extension": 0,
        "react/jsx-indent": ["error", 4 ],
        "react/jsx-indent-props": ["error", 4],
        "react/destructuring-assignment": ["never"],
        "react/jsx-curly-spacing": [ 2, "always" ],

        "global-require": 0,
    },
}
