module.exports = function check(str, bracketsConfig) {
    const brackets = Object.fromEntries(bracketsConfig);
    const stack = [];

    console.log(brackets);

    for (const char of str) {
        if (brackets[char]) {

            if (
                ((brackets[char] === '|') && stack.includes('|')) ||
                ((brackets[char] === '7') && stack.includes('7')) ||
                ((brackets[char] === '8') && stack.includes('8'))
            ){
                const lastOpBracket = stack.pop();
                if (brackets[lastOpBracket] !== char) {
                    return false;
                }
            } else {
                stack.push(char);
            }
        } else {
            const last = stack.pop();
            if (brackets[last] !== char) {
                return false;
            }
        }
    }

    return stack.length === 0;
}
