class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        const result = []
        function findnext(array) {
            if (array.length == 1) {
                return result.push(-1)
            }
            let largest = array[1]
            for(let i=2; i<array.length; i++) {
                if (largest < array[i]) largest = array[i]
            }
            result.push(largest)
            return findnext(array.slice(1))
        }
        findnext(arr)
        return result
    }
}
