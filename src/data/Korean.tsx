import { disassemble } from 'hangul-js'

const replaceMap: { [key: string]: string } = {
  ㄲ: 'ㄱㄱ',
  ㄸ: 'ㄷㄷ',
  ㅃ: 'ㅂㅂ',
  ㅆ: 'ㅅㅅ',
  ㅉ: 'ㅈㅈ',
  ㅒ: 'ㅐㅐ',
  ㅖ: 'ㅔㅔ',
}

export const disassembledWords = (words: string[]): string[] => {
  return words.map((word) => {
    word = disassemble(word).join('')
    for (let replace in replaceMap) {
      word = word.replace(replace, replaceMap[replace])
    }
    return word
  })
}

export const stringArrayToWords = (words: string[]): { [key: string]: boolean } => {
  const dict: { [key: string]: boolean } = {}
  for (let word of words) {
    dict[word] = true
  }
  return dict
}
