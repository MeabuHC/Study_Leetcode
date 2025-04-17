let nums = [2, 3, 4];
let temp = nums[1]; // temp = 3
nums[1] = 99;

console.log("temp:", temp); // 👉 still 3
console.log("nums[1]:", nums[1]); // 👉 now 99
