import { globalData } from '../plugins/global-mixin'

const importRegEx = /^import/
const fromRegEx = /from\s["'][^"']+["']$/i
const faeUrlRegEx = /fae@v([0-9]+)\.([0-9]+)\.([0-9]+)(?:-([0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*))?(?:\+[0-9A-Za-z-]+)?/

function _removeImport(codeLines, startLine, endLine) {
  if (codeLines[endLine].search(faeUrlRegEx) !== -1) return

  for (let i = startLine; i <= endLine; i++) codeLines[i] = ''
}

export function removeImports(code) {
  const codeLines = code.split('\n')
  let importStart = -1
  let importEnd = -1
  for (let i = 0; i < codeLines.length; i++) {
    const line = codeLines[i].trim()

    if (importRegEx.test(line)) importStart = i
    if (fromRegEx.test(line)) importEnd = i

    if (importStart !== -1 && importEnd !== -1) {
      _removeImport(codeLines, importStart, importEnd)
      importStart = -1
      importEnd = -1
    }
  }
  return codeLines.join('\n')
}

export function replaceFaeImport(
  code,
  version = undefined,
  versionOnly = false
) {
  const codeLines = code.split('\n')

  let importUrl
  if (versionOnly) {
    importUrl = `fae@${version || globalData.latestVersion}`
  } else if (!version) importUrl = `https://deno.land/x/fae/mod.ts`
  else importUrl = `https://deno.land/x/fae@${version}/mod.ts`

  for (let i = 0; i < codeLines.length; i++) {
    codeLines[i] = codeLines[i].replace(faeUrlRegEx, importUrl)
  }

  return codeLines.join('\n')
}
