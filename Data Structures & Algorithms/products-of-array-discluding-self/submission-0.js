class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const output = []
        for (let i=0; i<nums.length; i++) {
            const multiplication = nums.filter((item, index) => index !== i).reduce((acc, curr) => acc*curr)
            output.push(multiplication)
        }
        return output
    }
}
