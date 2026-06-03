class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const string = s.replace(/[^a-z0-9]/gi, '').toLowerCase()
        let left = 0
        let right = string.length-1

        while(left < right) {
            if(string[left] !== string[right]) return false
            left++
            right--
        }
        return true
    }
}
