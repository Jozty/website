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
            <select class="select">
              <option>v0.6.2</option>
              <option>v0.5.0</option>
              <option>v0.4.0</option>
            </select>
            <div class="icon-actions">
              <b-icon class="icon-run" icon="play" @click.native="runCode" />
            </div>
          </div>
          <div class="panel__output-title">Output:</div>
          <div class="panel__output-dump" v-html="output"></div>
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
      value: '',
      options: {},
      version: '0.6.2',
      editor: null,
      monaco: null,
      output: ``,
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

    faeModels() {
      if (!this.monaco) return []
      return this.monaco.editor.getModels().filter((a) => {
        return a.uri.toString().includes('fae')
      })
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
      this.panelE.classList.add('resized')

      if (panelWidth <= 500 && panelWidth >= 250) {
        this.panelE.style.width = panelWidth + 'px'

        document.querySelector('.monaco_editor_container').style.width =
          window.innerWidth - panelWidth + 'px'
        if (this.editor) this.editor.layout()
      }
    },

    onChange(value) {
      this.value = value
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
      this.monaco = monaco
      // window.editor = editor
      fetch('/declarations/v0.6.2/mod.d.ts')
        .then((res) => res.text())
        .then((code) => {
          monaco.languages.typescript.typescriptDefaults.addExtraLib(
            code,
            'node_modules/@types/fae@0.6.2/index.d.ts'
          )

          let x
          if (this.faeModels.length) {
            x = this.faeModels[0]
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

    async runCode() {
      console.log('jere')
      try {
        const res = await this.$axios.post('/api/run', {
          code: this.value,
        })
        console.log(res)
        this.output = res.data
      } catch (e) {
        console.error(e)
      }
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
  color: white;
  display: flex;
  flex-direction: column;
  overflow: hidden;

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

  &.resized {
    padding-right: 16px;
  }

  &__options {
    height: 64px;
    background-color: #1a1a1a;
    border-bottom: black solid 1px;
    display: flex;
    align-items: center;
    padding: 4px 12px;
  }

  &__output-title {
    padding: 8px 16px;
  }

  &__output-dump {
    padding: 8px 16px;
    overflow: auto;
    flex: 1;
    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0.5);
    }

    &::-webkit-scrollbar-thumb {
      background: #555;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: #444;
    }
  }
}
.select {
  -webkit-appearance: none;
  align-items: center;
  box-shadow: none;
  padding: 6px 24px;
  position: relative;
  vertical-align: top;
  cursor: pointer;
  display: block;
  font-size: 1em;
  max-width: 100%;
  outline: none;
  background: $editor-background;
  color: white;
  border: none;
  height: unset;
}
.icon-run {
  color: green;
  cursor: pointer;
}
.icon-actions {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
}
</style>
<style lang="scss">
.monaco-editor {
  overflow: hidden !important;
}
</style>
