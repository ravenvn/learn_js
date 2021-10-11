function greet(name) {
    // if(name === "Johnny")
    //   return "Hello, my love!";

    // return "Hello, " + name + "!";

    // return name === "Johnny" ? "Hello, my love!" : `Hello, ${name}!`
    return "Hello, " + (name == "Johnny" ? "my love!" : `${name}!`)   

}

console.log(greet('Dũng'));
console.log(greet('Johnny'));

let a = 5
if (a > 4) {
    console.log('lon hon 4')
} else {
    console.log('nho hon hoac bang 4')
}

// ternary operation
let a = 3
a > 4 ? console.log('lon hon 4') : console.log('nhon hon hoac bang 4')

let x = 100;
// neu chia het cho 2, in ra chẵn, nếu ko thì in ra lẻ
x % 2 === 0 ? console.log('chẵn') : console.log('lẻ')


var name = "Dũng Vinh"
console.log(name)

String.prototype.toAlternatingCase = function () {
    var result = ''
    for (var c of this) {
      if (c === c.toUpperCase()) {
        result += c.toLowerCase();
      } else {
        result += c.toUpperCase();
      }
    }
    return result
  }
var name = "Hello World"
console.log(name.toAlternatingCase())
