export const stringArrayToWords = (words: string[]): { [key: string]: boolean } => {
  const dict: { [key: string]: boolean } = {}
  for (let word of words) {
    dict[word] = true
  }
  return dict
}
