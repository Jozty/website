import {
  removeImports,
  getFaeVersion,
  addFaeDenoUrlImport,
  addFaePlaygroundImport,
} from '../../utilities/noDep'
import { globalData } from '../../plugins/global-data'

describe('removeImports', () => {
  it.each([
    `import XYZ from 'module-name'   `,
    `import XYZ from "module-name"`,
    `import\nXYZ\nfrom\n"module-name"`,
    `import XYZ from './module-name'`,
    `import XYZ from '../module-name'`,
    `import XYZ from "../module-name"`,
    `import XYZ, { abc } from "module-name"`,
    `import XYZ, { abc } from 'module-name' `,
    `import XYZ, {abc} from 'module-name'`,
    `import XYZ,{abc} from 'module-name'`,
    `import XYZ, {abc} from './module-name'`,
    `import XYZ,{abc} from '../module-name'`,
    `import XYZ,{abc,def,ghi} from '../module-name'\t  \t \n\n`,
    `import XYZ, { abc, def, ghi } from '../module'`,
    `\t\timport { abc, def, ghi } from 'module-name'`,
    ` import {abc,def, ghi} from 'module-name'`,
    `   \t import \n\nXYZ\n\n from '../module'`,
    `import \n\nXYZ\n\n {abc} from 'module'`,
    `import\nXYZ\n{abc}\nfrom\n'module'\n`,
    `import  \t \n \t  XYZ  \n  \t \t  {abc}  \t  \n \t  from \t  \n 'module'  \n`,
    `import \n\nXYZ\n\n {abc,def,ghi,\njkl\n,xyz} from 'module'  `,
    `import \n{abc,\ndef,\n  ghi,\n\t\tjkl\n,xyz \n\t  } from 'module'`,
  ])('should remove first line imports- %s', (importStatement) => {
    const actualCode = 'const abc = 3'
    const importRemoved = removeImports(importStatement + '\n' + actualCode)
    const linesCount = importStatement.split('\n').length

    expect(importRemoved).toBe(''.padStart(linesCount, '\n') + actualCode)
  })
})

describe('getFaeVersion', () => {
  it.each([
    {
      code: 'import * as Fae from "https://deno.land/x/fae/mod.ts"',
      expected: globalData.latestVersion,
    },
    {
      code: 'import * as Fae from "https://deno.land/x/fae@v1.2.3/mod.ts"',
      expected: 'v1.2.3',
    },
    {
      code: 'import * as Fae from "https://deno.land/x/fae@v1.2.3-rc/mod.ts"',
      expected: 'v1.2.3-rc',
    },
    { code: 'import * as Fae from "fae@v1.2.3"', expected: 'v1.2.3' },
    { code: 'import * as Fae from "fae@v1.2.3-rc"', expected: 'v1.2.3-rc' },
  ])('should get correct version- $code', ({ code, expected }) => {
    expect(getFaeVersion(code)).toBe(expected)
  })
})

describe('addFaePlaygroundImport', () => {
  it.each(['v1.0.0', 'v2.3.2', 'v1.2.4-rc'])(
    'should return the playground import with given version- %s',
    (version) => {
      expect(
        addFaePlaygroundImport('\n\nconst a = 3\nconst b = 4', version)
      ).toBe(
        `import * as Fae from "fae@${version}"\n\nconst a = 3\nconst b = 4`
      )
    }
  )

  it('should return the playground import with default version- %s', () => {
    expect(addFaePlaygroundImport('\n\nconst a = 3\nconst b = 4')).toBe(
      `import * as Fae from "fae@${globalData.latestVersion}"\n\nconst a = 3\nconst b = 4`
    )
  })
})

describe('addFaeDenoUrlImport', () => {
  it.each(['v1.0.0', 'v2.3.2', 'v1.2.4-rc'])(
    'should return the playground import with given version- %s',
    (version) => {
      expect(addFaeDenoUrlImport('\n\nconst a = 3\nconst b = 4', version)).toBe(
        `import * as Fae from "https://deno.land/x/fae@${version}/mod.ts"\n\nconst a = 3\nconst b = 4`
      )
    }
  )

  it('should return the playground import with default version- %s', () => {
    expect(addFaeDenoUrlImport('\n\nconst a = 3\nconst b = 4')).toBe(
      `import * as Fae from "https://deno.land/x/fae@${globalData.latestVersion}/mod.ts"\n\nconst a = 3\nconst b = 4`
    )
  })
})
