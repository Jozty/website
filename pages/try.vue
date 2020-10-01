<template>
  <div>
    <monaco-editor
      theme="vs-dark"
      language="typescript"
      :height="height"
      :width="width"
      :options="options"
      value=""
      :editor-before-mount="editorBeforeMount"
      :editor-mounted="editorMounted"
      @change="onChange"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      width: '100%',
      height: '100%',
      options: {},
      version: '0.6.2',
    }
  },

  mounted() {
    this.width = window.innerWidth + 'px'
    this.height = window.innerHeight - 80 + 'px'
  },

  methods: {
    onChange(value) {
      // console.log(value)
    },

    editorBeforeMount(monaco) {
      this.width = window.innerWidth + 'px'
      this.height = window.innerHeight - 80 + 'px'

      // compiler options
      monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
        target: monaco.languages.typescript.ScriptTarget.ES2016,
        allowNonTsExtensions: true,
        moduleResolution:
          monaco.languages.typescript.ModuleResolutionKind.NodeJs,
        module: monaco.languages.typescript.ModuleKind.CommonJS,
        noEmit: true,
        typeRoots: ['node_modules/@types'],
      })

      monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
        noSemanticValidation: false,
        noSyntaxValidation: false,
      })
    },

    editorMounted(editor, monaco) {
      fetch('/declarations/v0.6.2/mod.d.ts')
        .then((res) => res.text())
        .then((code) => {
          monaco.languages.typescript.typescriptDefaults.addExtraLib(
            code,
            'node_modules/@types/fae@0.6.2/index.d.ts'
          )

          const x = monaco.editor.createModel(
            `import * as Fae from "fae@0.6.2"`,
            'typescript',
            new monaco.Uri('fae0-6.2.ts')
          )

          editor.setModel(x)
        })
    },
  },
}
</script>

<style lang="scss" scoped></style>
