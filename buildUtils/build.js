import fs from 'fs'

// get all the functions and the types
const functionNames = fs
  .readdirSync('./content/functions')
  .map(removeMdExtension)

const functionPaths = functionNames
  .map((name) => 'functions/' + name)
  .map(removeMdExtension)

const typeNames = fs.readdirSync('./content/types')
const typePaths = typeNames
  .map((name) => 'types/' + name)
  .map(removeMdExtension)

const entityNames = functionNames.concat(typeNames)
const entityPaths = functionPaths.concat(typePaths)

function removeMdExtension(name) {
  return name.replace('.md', '')
}

// save json file for list of functions and types
const json = {
  functions: functionNames,
  types: typeNames,
}

fs.writeFileSync('./content/entitiesList.json', JSON.stringify(json))

export {
  functionNames,
  functionPaths,
  typeNames,
  typePaths,
  entityNames,
  entityPaths,
}
