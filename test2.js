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

console.log('abc')

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

// kiểu dữ liệu: number, string, boolean, object, undefined, null, symbol
var a = null;
console.log(typeof(a))
// array: mảng
var carBrands = ['Mec', 'Bim', 'Toyota', 'Hyndai', 'Audi', 'Mazda'];
// đếm từ 0->5, 6
for (var i = 0; i < carBrands.length; i += 3) {
  console.log(carBrands[i])
}

// step: i = 0;
// 2: kiem tra 0 < 6 ? 
// 3: Mẹc
// 4: +1.
// i = 1
// carBrands[1] = 
// i = 5;
// kiểm tra 5 < 6?
// in ra vị trị thứ 5 => Mazda 
// i = 6 
// kiểm tra 6 < 6 ? 0
// kết thúc vòng lặp.

var carBrands = ['Mec', 'Bim', 'Toyota', 'Hyndai', 'Audi', 'Mazda'];
for (var i = 5; i >= 0; i--) {
  console.log(carBrands[i])
}

var carBrands = ['Mec', 'Bim', 'Toyota', 'Hyndai', 'Audi', 'Mazda'];
for (var carBrand of carBrands) {
  console.log(carBrand)
}


// cam, táo, xoài, mận.
var fruits = ['cam', 'xoài', 'táo', 'mận'];
for (var i = 0; i < fruits.length; i++) {
  console.log(fruits[i])
}

var fruits = ['cam', 'xoài', 'táo', 'mận'];
for (var fruit of fruits) {
  console.log(fruit)
}



console.log(typeof(fruits))

var x = 2;

function sum(a, b) {
  return a + b;
}


console.log(sum(4, 5))
4 + 5

var xinh_gai = ['Hiền', 'Lan', 'Huyền', 'Phương', 'Đào', 'Tuyết', 'Mận']
var xau_gai = ['Hương', 'Anh', 'Mai']
var num_1_10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var thuc_an_ngon = ['Tôm', 'Cua', 'Lươn', 'Gà']
var thu_uong_ngon = ['Pepsi']

// console.log(thuc_an_ngon[3])

// console.log(num_1_10.length)

// for
// console.log(xinh_gai[0])
// console.log(xinh_gai[1])
// console.log(xinh_gai[2])
// console.log(xinh_gai[3])

// for 
for (var i = 0; i < xinh_gai.length; i++) {
  console.log(xinh_gai[i])
}

// 1. i = 0
// 2. so sánh 0 < 7 ? true => in ra xinh_gai[0] => Hiền.
// 3. i = 1
// 4. so sánh 1 < 7 ? true => in ra xinh_gai[1] => Lan
// 5. i = 2
// 6. so sánh 2 < 7 ? true => in ra xinh_gai[2] => Huyền
//...
// 8. i = 6 
// 9. so sánh 6 < 7 ? true => in ra xinh_gai[6] => Mận
// 10. i = 7
// 11. so sánh 7 < 7 ? false => thoát khỏi vòng lặp.

var colors = [ 'red', 'green', 'black', 'blue', 'white'];
// colors.push('violet')
// colors.pop()
// colors = colors.slice(1)
// colors.shift()
var deletedColors = colors.splice(1, 2)
console.log(colors)
console.log(deletedColors)

var colors = [ 'red', 'green', 'black', 'blue', 'white']
var OS = [ 'Windows', 'macOS', 'Linux'];
var all = colors.concat(OS);
console.log(colors);

// hard code. code cứng.

var players = ['Messi','Ronaldo','Mbappe','Neymar','Haaland'];
players = players.slice(1)
console.log(players)


var sports = ['football', 'basketball', 'golf', 'tennis', 'volleyball'];
for (var i = 4; i >= 0; i--) {
    console.log(sports[i]);
}


var smartphone = ['apple', 'samsung', 'opple', 'vsmart', 'redmi'];
for (var i = smartphone.length - 1; i >= 0; i--) {
  console.log(smartphone[i])
}

var smartphones = ['apple', 'samsung', 'OPPO', 'vsmart', 'redmi', ];
// smartphones.unshift('nokia')
smartphones.splice(2, 0, 'nokia', 'yamaha')

console.log(smartphones)

const vans = ['🚚', '🚛'];
const trucks = ['🚙', '🚗', '🤪', '🤣'];
const automobiles = vans.concat(trucks);
console.log(automobiles)

var game = ['cod', 'pubg', 'lmht', 'csgo'];
for(var i = 0; i < game.length - 1; i++)
{
    console.log(game[i])
}









