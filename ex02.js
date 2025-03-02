let mathScore = Number(prompt("Mời bạn nhập điểm môn Toán: "));
let literatureScore = Number(prompt("Mời bạn nhập điểm môn Văn: "));
let englishScore = Number(prompt("Mời bạn nhập điểm môn Anh: "));
let avgScore = (mathScore + literatureScore + englishScore) / 3;

if (avgScore >= 8.0 && avgScore <= 10.0){
    console.log(` Xếp loại học lực: Giỏi`);
} else if (avgScore >= 6.5 && avgScore <= 7.9){
    console.log(` Xếp loại học lực: Khá`);
} else if (avgScore >= 5.0 && avgScore <= 6.4){
    console.log(` Xếp loại học lực: Trung bình`);
} else if (avgScore < 5.0){
    console.log(` Xếp loại học lực: Yếu`);
} else {
    console.log(` Không hợp lệ! Mời bạn nhập lại điểm`);
}
    
    
