import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'eslint/config';
import eslintPluginNext from '@next/eslint-plugin-next';
import { createBaseConfig } from '@piplup/code-infra/eslint';

const $filename = fileURLToPath(import.meta.url);
const $dirname = dirname($filename);

const ENABLE_REACT_COMPILER_PLUGIN = false;

const OneLevelImportMessage = [
  'Prefer one level nested imports to avoid bundling everything in dev mode or breaking CJS/ESM split.',
].join('\n');

const NO_RESTRICTED_IMPORTS_PATTERNS_DEEPLY_NESTED = [
  {
    group: ['@mui/*/*/*'],
    message: OneLevelImportMessage,
  },
];

export default defineConfig(
  {
    extends: [
      createBaseConfig({
        baseDirectory: $dirname,
        enableReactCompiler: ENABLE_REACT_COMPILER_PLUGIN,
      }),
    ],
    name: 'Eslint Configuration',
    rules: {
      '@typescript-eslint/ban-ts-comment': 'warn',
      '@typescript-eslint/no-empty-object-type': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          args: 'after-used',
          argsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^(_|ignore)',
          destructuredArrayIgnorePattern: '^_',
          ignoreRestSiblings: false,
          vars: 'all',
          varsIgnorePattern: '^_',
        },
      ],
      'import/prefer-default-export': 'off',
      'no-restricted-imports': [
        'error',
        {
          patterns: NO_RESTRICTED_IMPORTS_PATTERNS_DEEPLY_NESTED,
        },
      ],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  eslintPluginNext.flatConfig.recommended,
  {
    files: ['src/app/(payload)/admin/importMap.js'],
    rules: {
      'import/prefer-default-export': 'off',
    },
  },
);
