let number = Number(prompt("Mời bạn nhập vào một số (0-999): "));
let hundered = Math.floor(number / 100); // Lấy ra hàng trăm
let ten = Math.floor((number % 100) / 10); // Lấy ra hàng chục
let unit = Math.floor(number % 10); // Lấy ra hàng đơn vị

let word = "";
const units = [
  "Không",
  "Một",
  "Hai",
  "Ba",
  "Bốn",
  "Năm",
  "Sáu",
  "Bảy",
  "Tám",
  "Chín",
];

const tens = [
  "linh",
  "mười",
  "hai mươi",
  "ba mươi",
  "bốn mươi",
  "năm mươi",
  "sáu mươi",
  "bảy mươi",
  "tám mươi",
  "chín mươi",
];

if (number < 0 || number > 999) {
  word += "Dữ liệu người dùng nhập vào không hợp lệ";
}
if (number === 0) {
  alert("Không");
}
if (hundered > 0) {
  word += units[hundered] + " trăm ";
}
if (ten === 0 && unit > 0) {
  word += " linh ";
}
if (ten > 0) {
  word += tens[ten];

  if (unit === 5) {
    word += " lăm ";
  } else if (unit === 1) {
    word += " mốt ";
  } else if (unit === 4) {
    word += " tư ";
  }
} else if (unit > 0) {
  word += " " + units[unit];
}

alert(word);
