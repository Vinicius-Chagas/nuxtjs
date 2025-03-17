// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import vueParser from 'vue-eslint-parser'
import tseslint from 'typescript-eslint'

export default withNuxt(
  {
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tseslint.parser,
        extraFileExtensions: ['.vue'],
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    rules: {
      'vue/no-v-html': 'off',
      'vue/multi-word-component-names': 'off',
      'vue/no-unused-vars': [
        'error',
        {
          ignorePattern: '^_'
        }
      ],
      "vue/require-default-prop": 'off'
    },
  },
)
