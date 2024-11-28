// let a = "*"

// let bag = " "
// for(let i = 1;i<5 ; i++ ){
//     for( let j = 1 ; j<i ; j++)
//         bag= bag + a
// }
// console.log(bag)

var twoSum = function(nums, target) {
    let ans=[];
    loop1:
        for(let i=0; i<nums.length;i++)
        {
           let j=i+1;
            while(j<nums.length)
            {
                if(nums[i]+nums[j]==target)
                {
                    ans.push(i);
                    ans.push(j);
                    return ans;
                    break loop1;
                }
                j++;  
            }
        }
    };