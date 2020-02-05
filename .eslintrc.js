module.exports = {
  extends: ['react-app', 'airbnb', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  env: {
    jest: true,
    browser: true
  },
  globals: {
    cy: true,
    Cypress: true
  },
  plugins: ['@typescript-eslint'],
  settings: {
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            modules: ['node_modules', 'src'],
            extensions: ['.js', '.json', '.jsx', '.ts', '.tsx']
          }
        }
      }
    }
  },
  rules: {
    'indent': 'off',
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/camelcase': ['error', { allow: ['_'] }],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { varsIgnorePattern: '^_', argsIgnorePattern: '^_' } ],
    '@typescript-eslint/explicit-function-return-type': 'off',
    'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
    'comma-dangle': ['error', 'always-multiline'],
    'jsx-a11y/anchor-is-valid': ['error', { components: ['Link'], specialLink: ['to'] }],
    'spaced-comment': ['error', 'always', { markers: ['/'] }],
    'react/jsx-filename-extension': ['error', { extensions: [ '.tsx', '.js' ] }],
    'jsx-a11y/label-has-associated-control': 'error',
    'global-require': 'off',
    'import/extensions': [2, 'never', { json: 'always' }],
    'import/no-named-as-default': 'off',
    'import/prefer-default-export': 'off',
    'jsx-a11y/label-has-for': 'off',
    'object-curly-newline': 'off',
    'operator-linebreak': 'off',
    'no-unused-vars': 'off',
    'react/prop-types': 'off',
    'react/button-has-type': 'error',
    'react/destructuring-assignment': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/sort-comp': 'off',
  }
};
