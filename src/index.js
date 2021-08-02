
function parseConfig(config) {
    const result = {};

    config.forEach(element => {
        result[element[1]] = element[0];
    });

    return result;
}

module.exports = function check(str, bracketsConfig) {
    const testArr = [];
    const config = parseConfig(bracketsConfig);

    for (let index = 0; index < str.length; index++) {
        const char = str[index];

        if (char in config && config[char] === char) {
            if (testArr[testArr.length - 1] !== char) {
                testArr.push(char);
            } else {
                testArr.pop();
            }
        } else if (char in config && config[char] !== char) { //closed bracket
            if (config[char] !== testArr.pop()) {
                return false;
            }
        } else {
            testArr.push(char);
        }
    }

    return !testArr.length;
}
