let year = Number(prompt("Mời bạn nhập vào năm cần kiểm tra: "));

let result = year % 400 == 0 || year % 4 == 0 && year % 100 != 0
? `${year} là năm nhuận` 
: `${year} không phải năm nhuận`;

console.log(result);
