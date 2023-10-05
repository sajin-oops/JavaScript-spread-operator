let firstarr = [1,2,3]
let secondarr = [4,5,6]
let joinedarr = [firstarr,secondarr]
console.log(joinedarr)
// - output
// 0-th index  : (3)length [1, 2, 3]
// 1-st index : (3)length [4, 5, 6]

// Another way(by using concat)
let newjoin = firstarr.concat(secondarr)
console.log(newjoin)
//output - [1, 2, 3, 4, 5, 6]

//spread operator
let newarray = [...firstarr,...secondarr]
console.log(newarray)