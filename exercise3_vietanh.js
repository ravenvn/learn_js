// var myNumbers = [3, 5, 12, 1, 4, -4, 8, 5]; sắp xếp theo thứ tự tăng dần và giảm dần. In ra các kết quả.
// Theo tang dan
var myNumbers = [3, 5, 12, 1, 4, -4, 8, 5];
myNumbers.sort(function (a, b) { return a - b })
console.log(myNumbers);

// Theo giam dan
var myNumbers = [3, 5, 12, 1, 4, -4, 8, 5];
myNumbers.sort(function (a, b) { return b - a });
console.log(myNumbers);

// Dùng forEach() để in ra các số nhỏ hơn 0 ở mảng myNumbers.
var myNumbers = [3, 5, 12, 1, 4, -4, 8, 5];
myNumbers.forEach(function (e) {
    if (e < 0) {
        console.log(e)
    }
})

// Dùng while() và do while() để in ra các số lớn hơn 0 ở mảng myNumbers
var myNumbers = [3, 5, 12, 1, 4, -4, 8, 5];
i = 0;
while (i < myNumbers.length) {
    if (myNumbers[i] > 0) {
        console.log(myNumbers[i])
    }
    i++;
}

