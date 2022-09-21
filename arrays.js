var friends = ["sarah", "cait", "missy", "ashley"]
var ages = [36, 45, 50, 38]
var isOnlineStatuses = [true, true, false, false]

//push will add elements to the end of the array.
friends.push("lindsey")

console.log(friends)

//shift removes the first element of an array.
ages.shift()

console.log(ages)

//unshift adds an element to the end of an array.
isOnlineStatuses.unshift(false)

console.log(isOnlineStatuses)

//using ages array as an example, the index would be the counting of the elements.
// index value of 36 is 0 in the begining.
console.log(ages[0])
//after using the shift method 45 is now in the 0 index position.
