// Question: Paskal uchburchagining dastlabki n ta qatorini toping.

function generate(n) {
    let result = [];
    for (let i = 0; i < n; i++) {
        let row = []
        if (i === 0) {
            row = [1]
        } else {
            let prevRow = result[i - 1];
            for (let j = 0; j <= i; j++) {
                if (j === 0 || j === i) {
                    row.push(1)
                } else {
                    row.push(prevRow[j - 1] + prevRow[j])
                }

            }
        }
        result.push(row)
    }
    return result;
}
console.log(generate(3));