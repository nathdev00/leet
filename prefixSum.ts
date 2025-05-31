class NumArray {
    public prefixA: number[]
    
    constructor(nums: number[]) {
        for(let i=1; i<nums.length;i++){
            console.log(nums[i]=nums[i-1]+nums[i]);
        }
        console.log(nums);
        this.prefixA=nums;
    }

    sumRange(left: number, right: number): number {
        if(left==0){
            return this.prefixA[right];
        }
        return this.prefixA[right]-this.prefixA[left-1]
    }
}

const numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
console.log(numArray.sumRange(0, 2)); // return (-2) + 0 + 3 = 1
//console.log(numArray.sumRange(2, 5)); // return 3 + (-5) + 2 + (-1) = -1
//console.log(numArray.sumRange(0, 5)); // return (-2) + 0 + 3 + (-5) + 2 + (-1) = -3

