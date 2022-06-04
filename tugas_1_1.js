// Method Array .join() berfungsi untuk menggabungkan elemen array 
// menjadi sebuah string. Sebuah argumen bisa diinputkan kedalam method ini 
// yang akan berfungsi sebagai karakter ’pembatas’ untuk menyatukan array.
// contoh :
let arr_1 = ["Saya", "Dia", "Kita"]
console.log(arr_1.join(" Selalu "))


// Method Array.reverse() digunakan untuk membalikkan urutan dari elemen 
// di dalam array. Method ini akan mengubah array asal.
// contoh :
let arr_2 = [1,2,3,4,5,6,7]
console.log(arr_2.reverse())

// Method Array.sort() digunakan untuk mengurutkan elemen dari array. 
// Jika method ini dipanggil tanpa argumen, elemen dari array akan 
// diurutkan berdasarkan abjad. Jika elemen di dalam array bukan huruf, 
// maka akan dikonversi sementara menjadi string, baru kemudian dilakukan 
// proses pengurutan. Jika ditemukan elemen dengan nilai null atau undefined, 
// akan di tempatkan pada urutan akhir.

// contoh :
let array_buah = ["Jeruk", "Semnagka", "Pepaya", "Nanas", "Apel"]
console.log(array_buah.sort())


// Method bawaan pada number

// Method toFixed digunakan untuk membuat tampilan angka dengan jumlah desimal yang tetap. 
// Method ini membutuhkan satu parameter opsional yang jika diinput akan menentukan jumlah digit setelah tanda desimal.
// Jika angka yang di tampilkan mengurangi digit asal, method ini akan membulatkan ke bilangan terdekat (0,5 akan menjadi 1). 
// Dan apabila angka yang ditampilkan melebihi digit asal, method ini akan menambahkan angka 0 dibelakang hasil agar tampilan sesuai dengan yang diinginkan.
// contoh :
let number_1 = 78.12344
console.log(number_1.toFixed(3))

// Method toPrecision digunakan untuk menampilkan angka dengan jumlah digit angka yang ‘tetap’ tergantung nilai angka 
// yang dijadikan sebagai argumen. Misalkan jika angka yang akan ditampilkan adalah 12.2234 maka hasil dari toPrecision(2) adalah 12, dan toPrecision(3) adalah 12.2.
// Berbeda dengan 2 method sebelumnya, nilai tetap untuk method toPrecision adalah jumlah digit sebelum dan sesudah desimal.
// contoh :
let number_2 = 27.2345
console.log(number_2.toPrecision(4))


/*
Method toString dimiliki hampir semua tipe data. Method ini berfungsi untuk menkonversi tipe data menjadi string.
Jika digunakan untuk tipe data number, method ini bisa diberikan sebuah argumen opsional yang akan menampilkan angka 
ke dalam bentuk basis lain selain 10. Misalkan angka asal 255, jika dipanggil dengan toString(2) akan ditampilkan menjadi 11111111. 
Karena toString(2) berarti menampilkan angka menjadi basis 2 (bilangan biner). Argumen yang didukung adalah dari 2 sampai 36.
*/
// contoh: 
let number_3 = 27
let temp_1 = number_3.toString()
let temp_2 = number_3.toString(2)

console.log(temp_1)
console.log(typeof(temp_1))
console.log(temp_2)
console.log(typeof(temp_2))

// Method bawaan pada string

// toLowerCase(), mengubah semua huruf pada string menjadi kecil
// contoh :
let string_1 = "BUDI MAKAN BAKSO"
console.log(string_1.toLowerCase())

// toUpperCase(), mengubah huruf mejadi besar semua
// contoh :
let string_2 = "saya makan seafood"
console.log(string_2.toUpperCase())

// Metode concat () menggabungkan argumen string ke string pemanggil dan mengembalikan string baru.
// contoh :
let string_3 = "saya sedang olahraga di taman"
let string_5 = "dan saya suka makan basko"
console.log(string_3.concat(' ',string_5))

// parseInt, mengubah string menjadi int atau number
let string_4 = "2345"
let ubah_ke_int = parseInt(string_4)
console.log(ubah_ke_int)
console.log(typeof(ubah_ke_int))