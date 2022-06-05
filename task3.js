seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray = []) => {
    dataArray.sort (function (a,b){
    return a-b
    } )
    let arrayBaru = [];    
if (nilaiAwal < nilaiAkhir && dataArray.length > 5) {

    for(let i = 0; i < dataArray.length;i++ ) {
        if(dataArray[i] > nilaiAwal && dataArray[i] < nilaiAkhir) {
            arrayBaru.push(dataArray[i]);
        }
    } 
     
} else if (nilaiAwal > nilaiAkhir && dataArray.length > 5) {
    return "Nilai akhir harus lebih besar dari nilai awal";
} else if (nilaiAwal < nilaiAkhir && dataArray.length < 5) {
    return "Jumlah angka dalam dataArray harus lebih dari 5";
} else if  (arrayBaru.length == 0) {
    return " asdsadsads"}
    else {
        return arrayBaru        }
}

// console.log (seleksiNilai(5,20,[2,25,4,14,17,30,8]));

// console.log (seleksiNilai(4,17,[2,25,4]));
console.log (seleksiNilai(15,3,[2,25,4,14,17,30,8]));