import Convert from 'ansi-to-html'

const convert = new Convert({
  newline: true,
})

export function covertToHtml(str) {
  return convert.toHtml(str)
}
