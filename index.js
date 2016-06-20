module.exports = {
  parser: require('babel-eslint'),
  rules: {
    // possible errors
    'comma-dangle': [2, 'always-multiline'],
    'no-constant-condition': [2],
    'no-control-regex': [2],
    'no-debugger': [2],
    'no-dupe-args': [2],
    'no-dupe-keys': [2],
    'no-duplicate-case': [2],
    'no-empty-character-class': [2],
    'no-empty': [2],
    'no-extra-boolean-cast': [2],
    'no-extra-parens': [2, 'functions'],
    'no-extra-semi': [2],
    'no-func-assign': [2],
    'no-invalid-regexp': [2],
    'no-irregular-whitespace': [2],
    'no-negated-in-lhs': [2],
    'no-obj-calls': [2],
    'no-regex-spaces': [2],
    'no-sparse-arrays': [2],
    'no-unexpected-multiline': [2],
    'no-unreachable': [2],
    'use-isnan': [2],
    'valid-typeof': [2],

    // best practices
    'accessor-pairs': [2],
    'block-scoped-var': [2],
    'curly': [2, 'multi-line'],
    'dot-location': [2, 'property'],
    'eqeqeq': [2, 'allow-null'],
    'no-alert': [2],
    'no-caller': [2],
    'no-labels': [2, {allowLoop: true, allowSwitch: true}],
    'no-unused-labels': [2],
    'no-empty-pattern': [2],
    'no-extend-native': [2],
    'no-extra-bind': [2],
    'no-fallthrough': [2],
    'no-floating-decimal': [2],
    'no-implied-eval': [2],
    'no-invalid-this': [2],
    'no-iterator': [2],
    'no-lone-blocks': [2],
    'no-loop-func': [2],
    'no-multi-spaces': [2],
    'no-multi-str': [2],
    'no-native-reassign': [2],
    'no-new-wrappers': [2],
    'no-new': [2],
    'no-octal-escape': [2],
    'no-octal': [2],
    'no-proto': [2],
    'no-script-url': [2],
    'no-self-compare': [2],
    'no-throw-literal': [2],
    'no-unused-expressions': [2],
    'no-useless-call': [2],
    'no-useless-concat': [2],
    'no-void': [2],
    'no-warning-comments': [1],
    'no-with': [2],
    'radix': [2],
    'yoda': [2, 'never'],

    // strict mode
    'strict': [2, 'never'], // Assumes use of babel-plugin-transform-strict-mode

    // variables
    'no-delete-var': [2],
    'no-label-var': [2],
    'no-shadow-restricted-names': [2],
    'no-undef-init': [2],
    'no-undef': [2],
    'no-unused-vars': [2, {vars: 'all', args: 'none'}],
    'no-use-before-define': [2, 'nofunc'],

    // node.js
    'callback-return': [2],
    'handle-callback-err': [2],
    'no-new-require': [2],

    // stylistic issues
    'array-bracket-spacing': [2, 'never'],
    'block-spacing': [2, 'always'],
    'brace-style': [2, '1tbs', {allowSingleLine: true}],
    'comma-spacing': [2, {before: false, after: true}],
    'comma-style': [2, 'last'],
    'computed-property-spacing': [2, 'never'],
    'consistent-this': [2, 'self'],
    'eol-last': [2],
    'func-style': [2, 'declaration'],
    'indent': [2, 2, {SwitchCase: 1}],
    'jsx-quotes': [2, 'prefer-double'],
    'key-spacing': [2, {beforeColon: false, afterColon: true}],
    'linebreak-style': [2, 'unix'],
    'max-len': [1, 120, 2, {ignoreComments: true, ignoreUrls: true}],
    'new-cap': [2],
    'new-parens': [2],
    'no-array-constructor': [2],
    'no-confusing-arrow': [2, {allowParens: true}],
    'no-constant-condition': [2],
    'no-lonely-if': [2],
    'no-mixed-spaces-and-tabs': [2],
    'no-multiple-empty-lines': [2],
    'no-new-object': [2],
    'no-spaced-func': [2],
    'no-trailing-spaces': [2],
    'no-unneeded-ternary': [2],
    'object-curly-spacing': [2, 'never'],
    'one-var': [2, {initialized: 'never'}],
    'quote-props': [2, 'consistent'],
    'semi-spacing': [2, {before: false, after: true}],
    'semi': [2, 'always'],
    'keyword-spacing': [2, {before: true, after: true}],
    'space-before-blocks': [2, 'always'],
    'space-before-function-paren': [2, {anonymous: 'always', named: 'never'}],
    'space-in-parens': [2, 'never'],
    'space-infix-ops': [2],
    'space-unary-ops': [2, {words: true, nonwords: false}],
    'spaced-comment': [2, 'always', {exceptions: ['*']}],

    // ES6
    'arrow-spacing': [2],
    'constructor-super': [2],
    'generator-star-spacing': [2, {before: false, after: true}],

    'no-class-assign': [2],
    'no-const-assign': [2],
    'no-dupe-class-members': [2],
    'no-this-before-super': [2],
    'no-var': [2],
    'object-shorthand': [2, 'always'],
    'prefer-arrow-callback': [1],
    'prefer-const': [1],
    'prefer-spread': [2],
  },
  env: {
    browser: true,
    node: true,
    worker: true,
    mocha: true,
    jest: true,
    serviceworker: true,
    es6: true,
  },
};
