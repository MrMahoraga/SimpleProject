function maxValueFindToTarget(arr,max){
    
    let newarr = []
    for (let i = 0; i < arr.length; i++) {
        

        if (max <= arr[i +1]) {
            newarr.push(arr[i+1])
            max= arr[i+1]
        }
    }
    return newarr;
}

console.log(maxValueFindToTarget([1,5,5,8,5,3,80,10,3,2,5,0,3,2,1,20,100],5));



// const maxValueFindToTarget =(arr,max)=>{

//     let newarr = []
//     for (let i = 0; i < arr.length; i++) {
        
    
//         if (max <= arr[i +1]) {
//             newarr.push(arr[i+1])
//            max= arr[i+1]
//         }
//     }
//     return newarr;
//     }
//     console.log(maxValueFindToTarget([1,5,5,8,5,3,80,10,3,2,5,0,3,2,1,20,100],5));
    
    