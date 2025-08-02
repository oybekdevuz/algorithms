function lengthOfLongestSubstring(s) {
  let seen = new Array(26).fill(false); 
  let left = 0;
  let right = 0;
  let maxLen = 0;

  while (right < s.length) {
    const charIndex = s.charCodeAt(right) - 97; 

    if (!seen[charIndex]) {
      seen[charIndex] = true;
      maxLen = Math.max(maxLen, right - left + 1);
      right++;
    } else {
      const leftCharIndex = s.charCodeAt(left) - 97;
      seen[leftCharIndex] = false;
      left++;
    }
  }

  return maxLen;
}

console.log(lengthOfLongestSubstring("abcabcbb")); 
