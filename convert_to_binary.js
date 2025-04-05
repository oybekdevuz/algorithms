function convert_to_binary(num) {
    let result = ''
    while (num!=0) {
        let digit = num % 2        
        result += digit
        num = Math.floor(num/2)
        
    }
    return result.split("").reverse().join("");
}

console.log(convert_to_binary(74));
