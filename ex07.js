let numberA = Number(prompt("Mời bạn nhập vào số a: "));
let numberB = Number(prompt("Mời bạn nhập vào số b: "));
let operator = prompt("Mời bạn nhập vào phép tính (+,-,*,/): ");

let addition = numberA + numberB;
let subtraction = numberA - numberB;
let multiplication = numberA * numberB;
let division = numberA / numberB;

if (operator == "+") {
    alert(`Kết quả của phép tính là: ${addition}`);
} else if (operator == "-") {
    alert(`Kết quả của phép tính là: ${subtraction}`);
} else if (operator == "*") {
    alert(`Kết quả của phép tính là: ${multiplication}`);
} else if (operator == "/") {
    alert(`Kết quả của phép tính là: ${division}`);
} else {
    alert("Không hợp lệ!");
}