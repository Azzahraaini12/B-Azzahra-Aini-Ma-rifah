function divide(a, b) {
    try {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error("Input harus berupa angka.");
        }

        if (b === 0) {
            throw new Error("Pembagian dengan nol tidak diperbolehkan.");
        }
        return a / b;

    } catch (error) {
        // Tampilkan pesan kesalahan jika terjadi error
        console.error(error.message);
        return null; 
    }
}

console.log(divide(10, 2));   // Output: 5
console.log(divide(10, 0));   // Output: null (dan pesan kesalahan "Pembagian dengan nol tidak diperbolehkan.")
console.log(divide(10, "a")); // Output: null (dan pesan kesalahan "Input harus berupa angka.")
