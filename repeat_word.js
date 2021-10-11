function repeatWords(str, times) {
    let result = '';
    const alphanumericRegex = /^[a-z0-9]+$/i;
    for (let i = 0; i < str.length;) {
        let word = '';
        let j = i;
        for (; j < str.length; j++) {
            if (alphanumericRegex.test(str[j])) {
                word += str[j];
            } else {
                if (word.length > 0) {
                    result += (word + ' ').repeat(times).trimEnd();
                    word = '';
                }
                result += str[j];
                j++;
                break;
            }
        }
        i = j;
        if (word.length > 0) {
            result += (word + ' ').repeat(times).trimEnd();
        }
    }

    return result;
}

// console.log(repeatWords("kkkkk 222", 3));
console.log(repeatWords("'How are you?', I asked.", 2));
// 'How How are are you you?', I I asked asked.
