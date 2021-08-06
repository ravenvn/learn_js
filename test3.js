var a = ['cat', 'dog', 'tiger', 'elephan']
a.forEach(function(e) {
    console.log(e)
})

var a = ['cat', 'dog', 'tiger', 'elephan']
var i = 0;
while (i < a.length) {
    console.log(a[i])
    i++;
}

var a = ['cat', 'dog', 'tiger', 'elephan']
var i = 0
do {
    console.log(a[i])
    i++
} while (i < a.length)


// if-else
// >, <, >=, <=, ==
// 
// weak type.
// data type: number, string, boolean, object, null, undefined, symbol, NaN
var number1 = 2
var number2 = "2"
var number3 = "1"
var number4 = true
console.log(number1 === number2)
console.log(number3 == number4)

var animal = 'dog4555'
if (animal == 'cat') {
    console.log('meo meo')
} else if (animal == 'dog') {
    console.log('gau gau')
} else {
    console.log('im lang')
}

var animal = 'dog23'
switch (animal) {
    case 'cat':
        console.log('meo meo')
        break;
    case 'dog':
        console.log('gau gau')
        break
    default:
        console.log('im lang')
}

