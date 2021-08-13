console.log(typeof "hello")
console.log(typeof 100)
console.log(typeof true)
console.log(typeof "true")

const d = new Date();
console.log(d)

const d = new Date()

function sum(a, b) {
    // phep tinh toan phuc tap.
    // trả về kết quả.
    return a + b
}

function getFullname(firstName, lastName) {
    return `${lastName} ${firstName}`
}

function displayName(name) {
    console.log(name)
}

let fullname = getFullname("Dũng", 'Phạm');
displayName(fullname)

let a = sum(4, 5)
console.log(a)

var myNumbers = [3, 5, 12, 1, 4, -4, 8, 0, 5];
// viết 1 hàm tham số là 1 mảng gồm các số nguyên, trả về 1 mảng chỉ gồm các thành phần không âm của mảng đó
function getNotNegativeNumbers(arr) {
    let results = []
    arr.forEach(function (e) {
        if (e >= 0) {
            results.push(e)
            /// áddj
        }
    })

    return results
}

// let results = getNotNegativeNumbers(myNumbers)
// console.log(results)

var myNumbers2 = [-5, -10, 9, 2, -4];
let results = getNotNegativeNumbers(myNumbers2)
console.log(results)

var myNumbers = [3, 5, 12, 1, 4, -4, 8, 0, 5];
let results = []
myNumbers.forEach(function (e) {
    if (e >= 0) {
        results.push(e)
        /// up date code.
    }
})
console.log(results)

var myNumbers2 = [-5, -10, 9, 2, -4];
let results = []
myNumbers2.forEach(function (e) {
    if (e >= 0) {
        results.push(e)
    }
    /// up date code.
})
console.log(results)


myNumbers.forEach(function (e) {
    if (e < 0) {
        console.log(e);
    }
    /// up date code.
})

// input: tên thành phố
// output: nhiệt độ bây giờ của thành phố đó.
function getTemperature(city) {
    // gọi đến api ở trung tâm thời thế giới => city => nhiệt độ.
    temperature = lay_nhiet_do(city)
    return temperature
}

getTemperature('paris')
getTemperature('hanoi')
