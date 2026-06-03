class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let set = new Set()
        let i = 0
        let maxLength = 0
        
        for (let j = 0; j< s.length; j++) {

            while(set.has(s[j])) {
                set.delete(s[i])
                i++
            }
            maxLength = Math.max(maxLength, j-i +1)
            set.add(s[j])
        }
        return maxLength
    }
}
