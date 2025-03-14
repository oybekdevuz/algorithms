function productExceptSelf(nums){
    const n = nums.length;
    const result = new Array(n).fill(1); // Natija massivi, boshlang‘ich 1 lar bilan to‘ldiriladi
    
    // 1-qadam: Chap taraf ko‘paytmalarni hisoblash
    for (let i = 1; i < n; i++) {
        result[i] = result[i - 1] * nums[i - 1];
    }
    
    // 2-qadam: O‘ng taraf ko‘paytmalarni hisoblab, natijani yangilash
    let rightProduct = 1; // O‘ng tarafdagi ko‘paytma
    for (let i = n - 1; i >= 0; i--) {
        result[i] = result[i] * rightProduct;
        rightProduct = rightProduct * nums[i];
    }
    
    return result;
}