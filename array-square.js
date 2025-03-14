function sortedSquares(nums) {
    let result = []
    for (const num of nums) {
        result.push(num * num)
    }
    return result.sort((a, b) => a - b);
}
console.log(sortedSquares([-4, -1, 0, 3, 10]));
