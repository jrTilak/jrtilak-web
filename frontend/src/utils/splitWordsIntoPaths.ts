/**
 * Splits an array of words into paths.
 * Each path is constructed by concatenating the previous path with the current word.
 * @param words - An array of words to be split into paths.
 * @returns An array of paths.
 */
const splitWordsIntoPaths = (words: string[]) => {
    const eachPaths: string[] = [];
    words.forEach((word, index) => {
      if (word) {
        if (index == 1) {
          eachPaths[index] = `/${word}`;
        } else {
          eachPaths[index] = `${eachPaths[index - 1]}/${word}`;
        }
      }
    });
    return eachPaths;
  };
  
  export default splitWordsIntoPaths;