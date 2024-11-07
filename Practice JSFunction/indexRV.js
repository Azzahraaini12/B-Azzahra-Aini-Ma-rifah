function multiply(num1, num2) {
    return num1 * num2;
}

console.log(multiply(2, 3)); // 6
console.log(multiply(9, 9)); // 81
console.log(multiply(5, 4)); // 20

document.getElementById("multiplicationForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const result = multiply(num1, num2);
    document.getElementById("result").textContent = "Hasil: " + result;
});
