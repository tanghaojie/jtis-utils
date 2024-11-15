import { parseCapitalize } from '../src/parse/parseCapitalize'
import { parseHyphenateToCamelize } from '../src/parse/parseHyphenateToCamelize'
import { parseCamelizeToHyphenate } from '../src/parse/parseCamelizeToHyphenate'

console.log('start')
console.log(parseHyphenateToCamelize('abc-abc-ABC'))
console.log(parseCamelizeToHyphenate('ABc-abc-ABC'))

export {}
