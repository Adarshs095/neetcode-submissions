class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const array = []
        for (let i=0; i<strs.length; i++) {
            const length = strs[i].length
            array.push(length)
            array.push('#')
            array.push(strs[i])
        }
        return array.join('')
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i = 0
        const result = []
        while(i<str.length) {
            let j = i+1
            while(str[j] != '#') j++
            const length = Number(str.substring(i, j))
            result.push(str.substring(j+1, j+1+length))
            i = j+1+length
        }
        return result
    }
}
