class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const map = new Map()
        for (let i =0; i< nums.length; i++) {
            if (!map.has(nums[i])) {
                map.set(nums[i], i)
            }
        }
        if (nums.length !== map.size) return true
        else return false
    }
}
