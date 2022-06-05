//1. Length () : Untuk mengetahui berapa banyak jumlah pada array

let data1= ['Gyga', 'Budi', 'Riki']
for ( let i = 0 ; i < data1.length; i++){
    console.log (data1[i])
}

// 2. Join () : Menggabungan seluruh isi array dan merubahnya menjadi string

let data2 = ['Gyga', 'Budi', 'Riki']
    console.log (data2.join (' - '))

// 3. Push () : Untuk menambahkan element baru di akhir array 
let data3 = ['Gyga', 'Budi', 'Riki']
    data3.push ('Rudi')
    console.log (data3.join (' - '))

// 4. Pop () : Untuk menghilangan elemen terakhir pada array
let data4 = ['Gyga', 'Budi', 'Riki']
    data4.pop ()
    console.log (data4.join (' - '))

// 5. Unshift () : Untuk menambahkan element baru di awal array
let data5 = ['Gyga', 'Budi', 'Riki']
    data5.unshift ('Rudi')
    console.log (data5.join (' - '))   

// 6. Shift () : Untuk menghilangkan elemen peratma pada array
let data6 = ['Gyga', 'Budi', 'Riki']
    data6.shift ()
    console.log (data6.join (' - '))

// 7.Splice () : Untuk menambah atau menyisipkan elemen pada array
let data7 = ['Gyga', 'Budi', 'Riki']
    data7.splice (2, 0 , 'Rudi')
    console.log (data7.join (' - '))

// 8.Slice () : Untuk mengambil beberapa bagian array untuk menjadi array yang baru
let data8 = ['Gyga', 'Budi', 'Riki', 'Rudi']
    //Slice (index awal, index akhir)
    dataKedua8 =data8.slice  (1 , 3)
    console.log (dataKedua8.join (' - '))

// 9. Sort () : Untuk mengurutkan isi array
let data9 = [1,2,10,5,20,3,6,8,4]
    data9.sort (function (a,b){
        return a-b
    } )
    console.log (data9.join (' - '))

// 10.  Filter () : Digunakan untuk mencari banyak nilai
let data10 = [1,2,10,5,20,3,6,8,4]
    let datakedua10 = data10.filter(function(i){
        return i > 5 
    })
    console.log (datakedua10)