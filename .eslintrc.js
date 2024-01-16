module.exports = {
  root: true,
  extends: ['eslint:recommended', '@react-native', 'plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'react/react-in-jsx-scope': 'off',
  },
};
