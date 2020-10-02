<template>
  <div class="try">
    <div class="editor-columns columns is-gapless">
      <div ref="editor-pane" class="column">
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
      <div class="column is-narrow">
        <div ref="panel" class="panel">
          <div class="panel__options">
            <select>
              <option>v0.6.2</option>
            </select>
          </div>
        </div>
      </div>
    </div>
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
      editor: null,
      panel: {
        BORDER_SIZE: 8,
        mousePosition: null,
      },
    }
  },

  computed: {
    panelE() {
      return this.$refs.panel
    },
  },

  mounted() {
    this.panelE.addEventListener('mousedown', this.onPanelResize, false)

    document.addEventListener(
      'mouseup',
      () => {
        document.removeEventListener('mousemove', this.resizePanel, false)
      },
      false
    )
  },

  methods: {
    onPanelResize(e) {
      if (e.offsetX < this.panel.BORDER_SIZE) {
        this.panel.mousePosition = e.x
        document.addEventListener('mousemove', this.resizePanel, false)
      }
    },

    resizePanel(e) {
      const dx = this.panel.mousePosition - e.x
      this.panel.mousePosition = e.x
      console.log(dx, e.x, getComputedStyle(this.panelE, '').width)
      const panelWidth = parseInt(getComputedStyle(this.panelE, '').width) + dx

      if (panelWidth <= 500 && panelWidth >= 250) {
        this.panelE.style.width = panelWidth + 'px'

        document.querySelector('.monaco_editor_container').style.width =
          window.innerWidth - panelWidth + 'px'
        if (this.editor) this.editor.layout()
      }
    },

    onChange(value) {
      // console.log(value)
    },

    editorBeforeMount(monaco) {
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
      this.editor = editor
      // window.editor = editor
      fetch('/declarations/v0.6.2/mod.d.ts')
        .then((res) => res.text())
        .then((code) => {
          monaco.languages.typescript.typescriptDefaults.addExtraLib(
            code,
            'node_modules/@types/fae@0.6.2/index.d.ts'
          )

          let x
          if (monaco.editor.getModels().length) {
            x = monaco.editor.getModels()[0]
          } else {
            x = monaco.editor.createModel(
              `import * as Fae from "fae@0.6.2"`,
              'typescript',
              new monaco.Uri('fae0-6.2.ts')
            )
          }

          editor.setModel(x)
          this.layoutEditor()
        })
    },

    layoutEditor() {
      const rect = this.$refs['editor-pane'].getBoundingClientRect()
      this.editor.layout({
        width: rect.width,
        height: rect.height,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
$panel-width: 300px;
$editor-background: #1e1e1e;

.try {
  background-color: $editor-background;
}

.columns {
  height: calc(100vh - 82px);
}
.panel {
  width: $panel-width;
  background-color: $editor-background;
  height: 100%;
  position: relative;

  &:after {
    content: ' ';
    background-color: black;
    position: absolute;
    left: 0;
    top: 0;
    width: 2px;
    height: 100%;
    cursor: w-resize;
  }

  &__options {
    height: 64px;
    background-color: #1a1a1a;
    border-bottom: black solid 1px;
    display: flex;
    align-items: center;
    padding: 4px;
  }
}
</style>
<style lang="scss">
.monaco-editor {
  overflow: hidden !important;
}
</style>
