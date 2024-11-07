// datatypes.js
function showDataTypes() {
    let name = "Azzahra Aini Ma'rifah"; // String
    let age = 20; // Number
    let isStudent = true; // Boolean
    let hobbies = ["Travelling", "Cooking"]; // Array
    let address = { // Object
        city: "Surabaya",
        country: "Indonesia"
    };
    let notDefined; // Undefined
    let emptyValue = null; // Null

    console.log("Nama:", name);
    console.log("Umur:", age);
    console.log("Mahasiswa:", isStudent);
    console.log("Hobi:", hobbies);
    console.log("Alamat:", address);
    console.log("Tidak Didefinisikan:", notDefined);
    console.log("Nilai Kosong:", emptyValue);

    alert(
        "Nama: " + name +
        "\nUmur: " + age +
        "\nHobi: " + hobbies.join(", ") +
        "\nKota: " + address.city +
        "\nNegara: " + address.country
    );
}

// Fungsi untuk menampilkan status mahasiswa
function showStudentStatus() {
    let isStudent = true; // Boolean sebagai status mahasiswa
    document.getElementById("studentStatus").textContent = "Mahasiswa: " + (isStudent ? "Ya" : "Tidak");
}
