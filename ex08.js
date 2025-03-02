let a = Number(prompt("Mời bạn nhập vào cạnh thứ nhất của tam giác: "));
let b = Number(prompt("Mời bạn nhập vào cạnh thứ hai của tam giác: "));
let c = Number(prompt("Mời bạn nhập vào cạnh thứ ba của tam giác: "));

if ((a + b > c) || ( a + c > b) || (b + c > a)) {
    if (a == b && a == c) {
        console.log("Đây là tam giác đều");
    } else if ((a == b) || (b == c) || (c == a)){
        console.log("Đây là tam giác cân");
    } else if ((a * a == b * b + c * c) || (b * b == a * a + c * c) || (c * c == b * b + a * a)) {
        console.log("Đây là tam giác vuông");
    } else {
        console.log("Đây là tam giác thường");    
    }
} else {
    console.log("Không phải là một tam giác");  
}