function sqrt(number){
    return number ** (1/2)
}
console.log(sqrt(12))

//Unlimited number of parameters in arrow function

// function declaration
const sumAllNums = (...args) => {
  console.log(args)
}

console.log(sumAllNums(1, 2, 3, 4)) // 10
console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))  // 173