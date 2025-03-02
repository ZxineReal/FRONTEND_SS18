let year = Number(prompt("Mời bạn nhập số năm kinh nghiệm của nhân viên: "));

const classfication 
= year < 1 ? "Mới vào nghề" 
: year >= 1 && year <= 3 
? "Nhân viên có kinh nghiệm" 
: year >= 4 && year <= 6
? "Chuyên viên" 
: year > 6 
? "Quản lý" :
"Không hợp lệ!";

console.log(classfication);
