let number = prompt("Mời bạn nhập một số: ");

if(number % 2 == 0){
    console.log(` ${number} là số chẵn`);
} else if (number % 2 == 1) {
    console.log(` ${number} là số lẻ`);
} else {
    console.log(` ${number} không phải là số nguyên!`);
}