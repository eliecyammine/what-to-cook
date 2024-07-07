/** @type {import('prettier').Config} */
module.exports = {
  semi: true,
  singleQuote: true,
  bracketSpacing: true,
  tabWidth: 2,
  printWidth: 100,
  parser: 'typescript',
  trailingComma: 'all',
  arrowParens: 'always',

  // Import sorting
  importOrder: [
    '^(react/(.*)$)|^(react$)',
    '^(next/(.*)$)|^(next$)',
    '<THIRD_PARTY_MODULES>',
    '^types$',
    '^@/env(?:/.*)?',
    '^@/types(?:/.*)?',
    '^@/store(?:/.*)?',
    '^@/config(?:/.*)?',
    '^@/routes(?:/.*)?',
    '^@/app(?:/.*)?',
    '^@/lib(?:/.*)?',
    '^@/providers(?:/.*)?',
    '^@/layouts(?:/.*)?',
    '^@/sections(?:/.*)?',
    '^@/components(?:/.*)?',
    '^@/styles(?:/.*)?',
    '^@/assets(?:/.*)?',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],

  plugins: ['@trivago/prettier-plugin-sort-imports', 'prettier-plugin-tailwindcss'],
};
