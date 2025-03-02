let username = prompt("Mời bạn nhập vào tên đăng nhập: ");

if (username == "ADMIN") {
    let password = prompt("Mời bạn nhập vào mật khẩu: ");
    if (password == "TheMaster"){
        console.log(` Welcome`);  
    } else if (password == ""){
        console.log(`Cancelled`);
    } else {
        console.log(`Wrong password`);
    }
} else if (username == "") {
    console.log(`Cancelled`);
} else {
    console.log(`I Don't know you`);
}