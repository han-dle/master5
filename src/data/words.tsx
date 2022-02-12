import { ALL_NOUNS } from 'pd-korean-noun-list-for-wordles'
import { stringArrayToWords, disassembledWords } from './Korean'

const words: { [key: string]: boolean } = stringArrayToWords(
  disassembledWords(ALL_NOUNS).filter((word) => {
    return word.length === 5
  })
)
console.log(words)
export default words
