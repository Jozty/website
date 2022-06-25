import { globalData } from '../plugins/global-data'

const importRegEx = /^import[\s\t]?/
const fromRegEx = /from\s["'][^"']+["']$/i
const moduleNameRegEx = /["'][^"']+["']$/i
const versionRegEx = /(?<version>v([0-9]+)\.([0-9]+)\.([0-9]+)(?:-([0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*))?(?:\+[0-9A-Za-z-]+)?)/
const faeDenoUrlRegEx = new RegExp('/x/fae@' + versionRegEx.source)
const faePlaygroundUrlRegEx = new RegExp(
  // eslint-disable-next-line no-useless-escape
  `import [\*] as Fae from ["']fae@${versionRegEx.source}["']`
)

function _removeImport(codeLines, startLine, endLine) {
  for (let i = startLine; i <= endLine; i++) codeLines[i] = ''
}

export function removeImports(code = '') {
  const codeLines = code.split('\n')
  let importStart = -1
  let importEnd = -1
  for (let i = 0; i < codeLines.length; i++) {
    const line = codeLines[i].trim()

    if (importRegEx.test(line)) importStart = i
    if (fromRegEx.test(line)) importEnd = i
    if (line === 'from' && moduleNameRegEx.test(codeLines[i + 1].trim())) {
      importEnd = ++i
    }

    if (importStart !== -1 && importEnd !== -1) {
      _removeImport(codeLines, importStart, importEnd)
      importStart = -1
      importEnd = -1
    }
  }
  return codeLines.join('\n')
}

export function getFaeVersion(code) {
  let match = faeDenoUrlRegEx.exec(code) || {}

  if (match.groups && match.groups.version) return match.groups.version

  match = faePlaygroundUrlRegEx.exec(code) || {}

  if (match.groups && match.groups.version) return match.groups.version

  return globalData.latestVersion
}

export function addFaeDenoUrlImport(code, version) {
  version = version || globalData.latestVersion

  const codeLines = code.split('\n')
  const importUrl = `import * as Fae from "https://deno.land/x/fae@${version}/mod.ts"`

  codeLines[0] = importUrl

  return codeLines.join('\n')
}

export function addFaePlaygroundImport(code, version) {
  version = version || globalData.latestVersion

  const codeLines = code.split('\n')
  const importUrl = `import * as Fae from "fae@${version}"`

  codeLines[0] = importUrl

  return codeLines.join('\n')
}

export function updateIcons() {
  document.querySelectorAll('.icon').forEach((e) => {
    e.className = e.className.replace(/icon/g, 'mdi')
  })
}

export function getPlaygroundLink(code, version) {
  version = version || globalData.latestVersion

  return `${globalData.baseUrl}/playground?code=${code}&version=${version}`
}

export function updateTryPlaygroundLink() {
  document.querySelectorAll('.try-on-playground').forEach((e) => {
    e.innerHTML += `<span class="mdi mdi-open-in-new" />`
    const functionName = e.getAttribute('data-function-name')
    const version = e.getAttribute('data-version') || ''

    e.addEventListener('click', async () => {
      const response = await fetch(
        `/api/download-example?functionName=${functionName}&version=${version}`
      )
      if (response.status === 200) {
        const playgroundLink = await response.text()
        window.open(playgroundLink, '_blank')
      } else {
        alert('Oops! Some problem occured')
      }
    })
  })
}

const BASE64_TO_URL_SAFE = {
  '+': '-',
  '/': '_',
  '=': '.',
}
const URL_SAFE_TO_BASE64 = {
  '-': '+',
  _: '/',
  '.': '=',
}

export const encodeToBase64UrlSafe = (base64) => {
  return base64.replace(/[+/=]/g, (m) => BASE64_TO_URL_SAFE[m])
}

export const decodeToBase64 = (safe) => {
  return safe.replace(/[-_.]/g, (m) => URL_SAFE_TO_BASE64[m])
}

export function getEncodedCodeString(codeString) {
  codeString = codeString || ''

  const encoded = Buffer
    ? Buffer.from(codeString).toString('base64')
    : window.btoa(codeString)

  return encodeToBase64UrlSafe(encoded)
}

export function getDecodedCodeString(encodedCodeString) {
  encodedCodeString = encodedCodeString || ''

  encodedCodeString = decodeToBase64(encodedCodeString)

  if (Buffer) {
    return Buffer.from(encodedCodeString, 'base64').toString('utf-8')
  } else {
    return window.atob(encodedCodeString)
  }
}
