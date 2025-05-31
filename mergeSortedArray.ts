function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let i = m -1
    let j = n -1
    let k = m + n -1

    while(i >= 0  && j >= 0){
        if(nums1[i] > nums2[j]){
            nums1[k] = nums1[i]
            i--
        }else{
            nums1[k] = nums2[j]
            j--
        }
        k--
    }

    while(j >= 0){
        nums1[k] = nums2[j]
        j--;
        k--;
    }

    console.log(nums1)

};

merge([4,5,6,0,0,0],3,[1,2,3],3);

