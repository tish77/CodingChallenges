//Given an array of integers, return a new array with each value doubled.

//For example: [1, 2, 3] --> [2, 4, 6]


//P: Integers will be returned as integers? 

//R: Returning an array with values doubled

//E: [1, 2, 3] --> [2, 4, 6]  [2,3,4] --> [4,6,8]

//P: Function will take in an array, map through each element in the arrary and multiply by 2, return the new array 

function doubled(x){

    return x.map(el=>el*2)
}

doubled([1,2,3])
console.log(doubled([2,3,4]))