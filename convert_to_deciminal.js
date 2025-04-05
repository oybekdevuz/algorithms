function convert_to_deciminal(num) {
    let result = 0;
    let length = num.length;
    for (let i = 0; i < length; i++) {     
        let digit = Number(num[i]);        
        result += digit * (2 ** (length - i - 1)); 
    }
    console.log(result);
}

convert_to_deciminal("1011")