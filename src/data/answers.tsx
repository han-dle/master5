import { COMMON_NOUNS } from 'pd-korean-noun-list-for-wordles'
import { disassembledWords } from './Korean'

const answers = disassembledWords(COMMON_NOUNS).filter((word) => {
  return word.length === 5
})

export default answers
