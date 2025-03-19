// codegen.ts
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'http://localhost:3333/graphql',
  documents: ['src/queries/**/*.gql'],
  generates: {
    'src/types/graphql.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-vue-apollo'
      ],
      config: {
        skipTypename: false,
        withCompositionFunctions: true,
        vueCompositionApiImportFrom: 'vue',
        addDocBlocks:true,
        scalars: {
            DateTime: 'Date'
        },
        useTypeImports: true
      }
    },
  },
};

export default config;