// Dep trai
// máy tính => dịch các dòng code => mã máy (ngôn ngữ mà máy hiểu được.)
console.log(1 + 2);


// abcc
//  comment code for => mục đích: để giải thích, chú thích 
// trên bàn bàn có 3 quả táo, Nam ăn hết 1 quả
// ngoài vườn có 4 quả táo, Bình ăn hết 2 quả.
// Hỏi tổng số táo còn lại là bao nhiêu.

// Variable. Biến. => biến đổi.
// Quy tắc đặt tên: tên biến viết thường, nếu có nhiều hơn 1 từ, thì cách nhau bởi dấu _ hoặc viết liền nhau, từ sau sẽ viết hoa chữ cái đầu.
// Ví dụ: my_beautiful_dog hoặc myBeautifulDog. Ưu tiên cách viết thứ 2 là cách viết chuẩn.

var apple_on_table = 3; // biến địa chỉ khác. 0xx293xxsdd
apple_on_table = apple_on_table - 1;
var apple_in_garden = 4; 
apple_in_garden = apple_in_garden - 2;
var sum_apple = apple_on_table + apple_in_garden;
console.log(sum_apple);

// Const Hằng số => Không đổi.
// Quy tắc đặt tên: Viết hoa hết toàn bộ, 
const MAX_AGE = 200;
MAX_AGE = MAX_AGE + 1;
console.log(MAX_AGE);

// Data types : kiểu dữ liệu RAM  4G ->
// 1 bit: 0, 1. bytes: 8 bit, kb => 1000 bytes, 1G = 1024 bytes
// Cố định kích thước bộ nhớ. 
var age = 18; // 4 bytes 32 bit. 2 bytes 1 ký tự 30 * 2 60 bytes.
var salary = 2000.3;
var address = "Số 5, Hai Bà Trưng, Hà Nội"; // String 
var description = "Là một người vô cùng xinh gái và duyên dàng. Là một người vô cùng xinh gái và duyên dàng. Là một người vô cùng xinh gái và duyên dàng.Là một người vô cùng xinh gái và duyên dàng.Là một người vô cùng xinh gái và duyên dàng.Là một người vô cùng xinh gái và duyên dàng.Là một người vô cùng xinh gái và duyên dàng."; 
var person = {
  name: 'Hiếu',
  age: 15,
  salary: 1000
};

// Number: Số.
// 8 kiểu dữ liệu, 
Boolean: true false.  // 1 bit
Number: 1,2,4, 10000
String: tên tuổi, địa chỉ... 
Object: người, động vật.. 


// Operator: toán hạng: +, -, *, /, %
var x = 50;
var y = 20;
console.log(x % y);

// Assignment: gán;
var x = 50;
var y = x;
console.log(y);

// ++, --, +=, -=, *=
// x = x - 1; 

var x = 2;
x *= 5; 
console.log(x);

var x = 8;
// --x;
console.log(x--);
console.log(x);

// Nối chuỗi
var x = 'Hello';
var y = "Mickey";
var z = x + ' ' + y; // nối thêm dấu ' ' để 2 từ k dính liền nhau.
console.log(z);












