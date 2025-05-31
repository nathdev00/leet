function mergeAlternately(word1: string, word2: string): string {
  var concat = "";

  for (var i = 0; i < word1.length || i < word2.length; i++) {
    word1[i] != undefined ? (concat = concat + word1[i]) : null;
    word2[i] != undefined ? (concat = concat + word2[i]) : null;
  }

  return concat;
}