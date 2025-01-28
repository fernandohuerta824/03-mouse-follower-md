import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import promise from 'eslint-plugin-promise'
import importPlugin from 'eslint-plugin-import'

export default [
  { ignores: ['dist'] },
  {
    files: ['src/**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      promise,
      import: importPlugin,
    },
    rules: {
      // Reglas recomendadas de ESLint para JS, React y Hooks
      ...js.configs.recommended.rules, 
      ...react.configs.recommended.rules, 
      ...react.configs['jsx-runtime'].rules, 
      ...reactHooks.configs.recommended.rules,
    
      // Reglas de Promesas (plugin eslint-plugin-promise)
      ...promise.configs['flat/recommended'].rules,
    
      // Variables
      'no-unused-vars': ['warn', { 
        vars: 'all', 
        args: 'all', 
        ignoreRestSiblings: true,
        varsIgnorePattern: '^_', // Ignorar variables que comiencen con _
        argsIgnorePattern: '^_' // Ignorar argumentos que comiencen con _
      }],
    // Advertencia por variables no utilizadas, pero sin chequear los argumentos de funciones y con desestructuración
    
      // Mejoras generales
      'no-var': 'error', // Prohibir el uso de 'var', usar 'let' o 'const' en su lugar
      'prefer-const': 'error', // Preferir 'const' cuando no se reasigna una variable
      'object-shorthand': 'error', // Usar la notación abreviada para propiedades de objetos (e.g., { a } en lugar de { a: a })
      'quote-props': ['error', 'as-needed'], // Usar comillas solo cuando sea necesario en las propiedades de objetos
      'arrow-spacing': ['error', { before: true, after: true }], // Requiere espacios alrededor de la flecha en funciones flecha (e.g., (a) => {})
      'no-useless-rename': 'error', // Prohibir cambios de nombres innecesarios de variables
      'no-duplicate-imports': 'error', // Prohibir importaciones duplicadas
      'object-curly-spacing': ['error', 'always'],
      // Estilo de código
      'semi': ['error', 'never'], // Prohibir punto y coma al final de las sentencias
      'quotes': ['error', 'single', { avoidEscape: true }], // Usar comillas simples para cadenas de texto, a menos que se necesiten comillas dobles para evitar escapar
      'comma-dangle': ['error', 'always-multiline'], // Requerir coma al final en listas de objetos o arrays multilinea
      'no-mixed-operators': 'error', // Prohibir el uso de operadores sin paréntesis para evitar ambigüedades
      'space-before-function-paren': ['error', 'always'], // Requerir un espacio antes de los paréntesis de las funciones
      'space-infix-ops': 'error', // Requerir espacios alrededor de los operadores infijos (e.g., a + b)
      'no-multi-spaces': 'error', // Prohibir múltiples espacios innecesarios
      'key-spacing': ['error', { beforeColon: false, afterColon: true }], // Requerir espacio después de los dos puntos en objetos
      'indent': ['error', 4], // Usar 4 espacios para la indentación
      'eol-last': ['error', 'always'], // Requerir salto de línea al final de cada archivo
      'newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }], // Exigir saltos de línea entre llamadas encadenadas (excepto cuando la cadena tiene profundidad 2)
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: 'block-like', next: '*' }, // Requerir una línea en blanco entre bloques de código
        { blankLine: 'always', prev: '*', next: 'return' }, // Requerir una línea en blanco antes de los 'return'
      ],
      'no-trailing-spaces': 'error', // Prohibir espacios al final de las líneas
      'lines-between-class-members': ['error', 'always'], // Requerir líneas en blanco entre miembros de una clase
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }], // Limita el uso de líneas vacías consecutivas.
      'curly': ['error', 'all'], // Requerir llaves en bloques de código (incluso si son opcionales)
      'eqeqeq': ['error', 'always'] , // Requerir el uso de '===' y '!==' en lugar de '==' y '!=',
      'default-case': 'warn', // Advertencia si no hay una cláusula 'default' en las sentencias 'switch'
      
      // Manejo de errores
      'no-console': 'warn', // Advertencia por uso de 'console.log' y similares
      'no-debugger': 'warn', // Advertencia por uso de 'debugger'
      
      // Reglas específicas para React
      'react/jsx-no-target-blank': 'off', // Desactivar la advertencia para 'target="_blank"' sin 'rel="noopener noreferrer"'
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }], // Advertencia si se exporta algo que no es un componente de React cuando se usa React Fast Refresh
      'import/no-unresolved': 'error', // Prohibir importaciones que no se puedan resolver
      'import/named': 'error', // Requiere que las importaciones de miembros sean válidas
      'import/default': 'error', // Asegura que las importaciones por defecto sean válidas
      'import/namespace': 'error', // Requiere que las importaciones de espacio de nombres sean válidas
      'import/no-absolute-path': 'error', // Prohibir las importaciones con rutas absolutas
      'import/no-dynamic-require': 'error', // Prohibir el uso de require() dinámico
      'import/no-cycle': 'warn', // Detecta ciclos de dependencias
      'import/no-self-import': 'error', // Evitar la auto-importación (importarse a sí mismo)
      'import/order': ['error', { // Ordenar las importaciones
        'groups': [
          ['builtin', 'external'],  // Primero las importaciones de módulos internos y luego los módulos externos
          ['internal'], // Luego las importaciones internas
          ['sibling', 'parent'], // Después las importaciones de los archivos hermanos y padres
          ['index'], // Y finalmente las importaciones de archivos de índice
        ],
        'newlines-between': 'always', // Requiere saltos de línea entre las importaciones de diferentes grupos
      }],
    }
    
  },
]